// var message = 'in global';
// console.log('global: message =' + message);

// var a = function ( ) {
//     var message = "inside a";
//     console.log('a:message =' + message);

//     function b () {
//         console.log("b.message = " + message);
//     }
//     b()
    
// }


// a()



// ** If statement (all false);

// if (false || NaN || 0 || "" || undefined) {
//     console.log("this line won't execute");
// }
// else {
//     console.log("all false");
// }

// // all true
// if (true && "hello" && 1 && -1 && "false"){
// console.log("all true");
// }

// loop in javascript
var sum = 0;
for( var i = 0; i<10; i++) {
console.log(i);
sum = sum + i;
}
console.log("sum upto 9 is " + sum);

function chickenWithDish(withdish) {
    withdish = withdish || "whatever";
    console.log("chicken with " + withdish);
}
chickenWithDish("noodles");
chickenWithDish();