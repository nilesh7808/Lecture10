// object and protypes


const person = {

    name: "Nilesh",

    age: 21,

    sayHello: function() {

        console.log("Hello from Nilesh");

    }

}

let p1 = Object.create(person);

// let p2 = Object.create(person);

let p2 = Object.create(p1);