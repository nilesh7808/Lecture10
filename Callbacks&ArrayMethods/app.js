// function fun() {

//     console.log("Inside Fun");

// }

// function innerFun() {

//     console.log("Inside Innerfun");

//     fun();

// }

// innerFun();


// function fun(x) {

//     console.log("Inside Fun");

//     x();

// }

// function innerFun() {

//     console.log("Inside Innerfun");

// }

// fun(innerFun);

// ---------------------- ########################### ---------------------------------


// ***************************** Filter *****************************

// Array methods---> Map

// function square(num) {
//     return num * num;
// }

// let x = square(2);
// console.log(x);

// ---------------------- ########################### ---------------------------------

//1st Way

// function square(num) {
//     return num * num;
// }

// function cube(n) {
//     return n * n * n;
// }

// let a = [1, 2, 3, 4, 5];

// let b = a.map(square);

// let c = a.map(cube);

// console.log(b);

// console.log(c);

// ----------------------------- ########################### ---------------------------------

// 2nd Way 

// function square(num) {
//     return num * num;
// }

// let a = [1, 2, 3, 4, 5];

// let b = a.map(square);

// let c = a.map(function cube(n) {
//     return n * n * n;
// });

// console.log(b);

// console.log(c);

// ----------------------------- ########################### ---------------------------------

// 3rd Way (Annonymous Function)

// function square(num) {
//     return num * num;
// }

// let a = [1, 2, 3, 4, 5];

// let b = a.map(square);

// let c = a.map(function(n) {
//     return n * n * n;
// });

// console.log(b);

// console.log(c);

// ----------------------------- ########################### ---------------------------------

// ***************************** Filter *****************************

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(num) {

    if (num % 2 !== 0) {

        return true;

    } else {

        return false;

    }

}

let res = a.filter(isOdd);
console.log(res);