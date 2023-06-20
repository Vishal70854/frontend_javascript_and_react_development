//Class 4 starts here
// // let and const
// // var is functional scope
// // es6 ecmascript 6
// // let/const doesn't allow redeclartion
// // let/const is block scoped
// // let/const doesn't let you use a variable before it is declared
// // const reinitilisation is not allowed
// // function abc() {
// //   // const d = 20;
// //   // d = 30;

// //   let e = 20;
// //   e = 30;
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

// // var a = [...array];

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

// // let a = [1, 2, 3, 4];

// // a.push(4);

// // a.double();

// // Array.prototype.double = function () {
// //   console.log(this);
// // };

// function a() {
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

//setTimeout(callback, timer)
// setTimeout(function () {
//   console.log(2);
// }, 4000);

// Document

// addEventListener("type of event", function, useCapture)

// // Click
// //Mouse in
// // hover
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
//   function (e) {
//     console.log(e);
//     e.stopPropagation();
//     console.log("p");
//   },
//   false
// );
