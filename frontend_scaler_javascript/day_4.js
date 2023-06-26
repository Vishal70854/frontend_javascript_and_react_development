//Class 4 starts here
// // let and const
// // var is functional scope
// // es6 ecmascript 6
// // let/const doesn't allow re-declaration
// // let/const is block scoped(within {}) i.e we can have variable declaration using let inside and ouside block scope(or {})
// // let/const doesn't let you use a variable before it is declared
// // const reinitilisation is not allowed but it is allowed in let
// function abc() {
//   const d = 20;
//   d = 30;   // const reinitilisation is not allowed
// }
// abc();

//   let e = 20;
//   e = 30;   // let reinitilisation is allowed 
//   console.log(e); 

// //   if (true) {
// //     const d = 20;
// //     console.log(d);
// //   }
// //   let a = 20;
// //   console.log(a);
// // }

// // abc();

// // const array = [1, 2, 3];
// // const arr2 = [4, 5, 6];
// // console.log(...array);

// // var a = [...array];   // rest operator.

// // var d = [...array];

// // d.push(1);
// // console.log(d);

// // const a = [...array, ...arr2];

// // console.log(a);

// // // Assignment try using spred in all possible ways
// // //

// // const obj = {
// //   a: 10
// // }

// // const obj2 = {...obj};

// // console.log(obj2);

// // rest operator
// // function a(c,e,...b) {
// //   console.log(c);
// //   console.log(b);
// // }

// // a(1, 2, 3, 4, 5);

//this function will be available for all the array declared in the js file
// since we have overwrite double function with our anonymous function.
// this works for each array instances declared in the js file.
// we can add function to any prototype instance for ex : push, pop, or we can make our own
    // function which will work according to our definition.
// Array.prototype.double = function () {
//     console.log("bofore operation", this);
    
//     // double each element in the array according to our requirements.
//     for (let i = 0; i < this.length; i++){
//         this[i] = this[i] * 2
//     }
//     console.log("after double operation", this);
//   }
  
//   let a = [1, 2, 3, 4];
//   let b = [1, 2, 3, 5,6,7];
//   a.push(8);
  
//   a.double();   // [1, 2, 3, 4] // Array.prototype.double works for every array since we have overwrite double on our own
//   b.double();   // [1, 2, 3, 5,6,7]

// js in single threaded but whenever setTimeout, setTimein etc. functions are called then 
// js internally calls stack which stores all console.log() statements. 
// all setTimeout etc. functions are rejected by stack and then stored in web browser apis which
    // is then stored in event queue. these functions are passed in stack once stack is empty
    // and then the function is executed

// function a() {   //output for below function -> 1 , 4 , 2 , 3
//   console.log(1); //event stack

//   setTimeout(function () {
//     console.log(2);
//   }, 0);

//   // stack
//   // browser api
//   // queue

//   setTimeout(function () {
//     console.log(3);
//   }, 1000);

//   //stack
//   //browser api
//   // queue

//   console.log(4);//stack
//   console.log(4);//stack
//   console.log(4); //stack
//   console.log(4);//stack
//   console.log(4); //stack
//   console.log(4); //stack
//   console.log(4); //stack
//   console.log(4); //stack
//   console.log(4); //stack
//   console.log(4);//stack

// }

// a();

//queue log2 log3

//setTimeout(callback, timer)   // it gets stored in browser api then in event queue then executed in stack
// setTimeout(function () {
//   console.log(2);
// }, 4000);


// ---------------------------
// Document
//eventListeners
// addEventListener("type of event", function, useCapture) // userCapture = true is capturing and false is bubbling
// bubbling - event triggers from bottom to top 
// capturing - event triggers from top to bottom

// // Click
// //Mouse in
// // hover
// ex : 
// const c = document.getElementById("ck");
// c.addEventListener("click", 
// function(){
// console.log("you clicked me")}
// );

// const f = document.getElementById("f");
// const d = document.getElementById("d");
// const p = document.getElementById("p");

// f.addEventListener(
//   "click",
//   function () {
//     console.log("f");
//   },
//   false
// );

// d.addEventListener(
//   "click",
//   function () {
//     console.log("d");
//   },
//   false
// );

// p.addEventListener(
//   "click",
//   function (e) { // e is the object/ event that is getting clicked and it displays object info
//     console.log(e);
//     e.stopPropagation(); // this will stop other events and only e id event would be triggered
//     console.log("p");
//   },
//   false
// );
