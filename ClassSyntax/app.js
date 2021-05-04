//  Class Syntax


class Car {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // getName = function() {
    //         return this.name;
    //     }
    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }

}

// -------------------------------------------#####################-----------------------------------------------


// inherit properties of class car

class RacingCar extends Car {

    constructor(name, price, speed, color) {

        super(name, price);

        this.speed = speed;

        this.color = color;

    }

    get getSpeed() {

        return this.speed;

    }

    set setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

}

let c1 = new Car("Audi", 158988);
let c2 = new Car("BMW", 159999);

let r1 = new RacingCar("Ferari", 800000, 400, "Red");
let r2 = new RacingCar("Bugati", 9000000, 750, "Yellow");