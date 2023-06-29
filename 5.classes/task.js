
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
            this.releaseDate = releaseDate,
            this.pagesCount = pagesCount,
            this.state = 100,
            this.type = null
    }

    fix() {
        this.state *= 1.5;
    }

    set state(stateValue) {
        if (stateValue < 0) {
            this._state = 0;
        } else if (stateValue > 100) {
            this._state = 100
        } else {
            this._state = stateValue;
        }
    }

    get state() {
        return this._state;
    }

}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'detective';
    }
}



class Library {
    constructor(name) {
        this.name = name,
            this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }


        }
        return null
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice([i], 1)[0];
            }
        }

        return null;
    }

}


//Задача 3

class Student {
    constructor(name) {
        this.name = name,
            this.marks = {};
    }

    addMark(mark, subject) {
        if (mark > 5 || mark < 1) {
            alert('Оценка должна быть от 2 до 5')
        } else {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = [mark];
            } else {
                this.marks[subject].push(mark)
            }

        }
    }

    getAverageBySubject(subject) {
        if ([subject] in this.marks === false || this.marks[subject].length === 0) {
            return 0;
        }
        return this.marks[subject].reduce((total, currentItem) => total + currentItem, 0) / this.marks[subject].length;
    }

    getAverage() {
        if (Object.keys(this.marks).length > 0) {
            let result = Object.entries(this.marks).reduce((total, [currentItem]) => total += this.getAverageBySubject(currentItem), 0)
            return result / Object.keys(this.marks).length;
        } else {
            alert('Нет оценок')
        }
    }
}

