
//Задача 1
const parseCount = (purchaseAmount) => {
    if (isNaN(Number.parseFloat(purchaseAmount)) === true) {
        throw new Error('Невалидное значение')
    }
    return (Number.parseFloat(purchaseAmount));
}

const validateCount = (purchaseAmount) => {
    try {
        let result = parseCount(purchaseAmount);
        return result;
    } catch (error) {
        return error;
    }
}

//Задача 2

class Triangle {
    constructor(a, b, c) {
            this.a = a,
            this.b = b,
            this.c = c;
        if (a + b < c || c + b < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfPerimeter = this.perimeter / 2;
        let result = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return Number(result.toFixed(3));
    }

}

const getTriangle = (a,b,c) => {
    try{
        let triangle = new Triangle(a,b,c);
        return triangle;
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }

}