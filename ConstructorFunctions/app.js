//  Constructor function

// function fun(name) {

//     console.log(this);
//     this.name = "Nilesh";

// }

// fun();


// function Person(name, age) {

//     this.name = name;
//     this.age = age;

//     this.sayHello = function() {

//         console.log(`Hello From ${this.name}`);

//     }

// }

// // Person("Hector", 26);

// // for binding the data we use new keyword

// let p1 = new Person("Nilesh", 21);
// let p2 = new Person("Raj", 22);

// Binding objects with new keywords

function Person(name, age) {

    this.name = name;
    this.age = age;

}
// for protect from wasting of memory we can  save sayHello function to its prototypes
Person.prototype.sayHello = function() {

    console.log(`Hello From ${this.name}`);

}

let p1 = new Person("Nilesh", 21);
let p2 = new Person("Raj", 22);

// implicit binding

const obj = {
    name: "Audi",
    price: 12345,
    getPrice: function() {
        console.log(this);
        // console.log(this.price);

    }
}

// explicit binding

function fun(name) {
    console.log(this);
    console.log(name);
}

const a = {
    l: 10,
    m: 20,
    n: true
}

// fun("Kartik");
// fun.call(a, "Nilu ");

let f = fun.bind(a);

f("Aries")