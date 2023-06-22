function Student(name, gender, age) {
  this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = [];
}

let student1 = new Student('Mishel', 'woman', 21);
let student2 = new Student('Jhon', 'man', 22)
let student3 = new Student('Ozark', 'man', 21)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
  if ('marks' in this === true) {
    this.marks.push(...marks)
  }
};


Student.prototype.getAverage = function () {
  if ('marks' in this === false || this.marks.length === 0) {
    return 0;
  }
  return this.marks.reduce((total, currentItem) => total + currentItem, 0) / this.marks.length;

}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;

}


let student = new Student("Василиса", "женский", 19);
student.addMarks(5, 5, 5);