// Higher Order Functions


// function fun(x) {

//     console.log("Inside Fun");

//     x();

// }

// function innerFun() {

//     console.log("Inside InnerFun");

// }

// fun(innerFun);


function fun() {

    console.log("Inside Fun");
    // var x = undefined;
    // var x = null;
    var x = 0;


    function innerFun() {
        x++;
        console.log(x);

    }

    return innerFun;

}

var f = fun();
f();
f();
f();
f();
f();