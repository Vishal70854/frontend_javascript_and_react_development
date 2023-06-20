// // // functional programming language
// // // js is a dynamic programming langugae
// // // dynamically typed language
// // // js is loosely typed language
// // //Datatypes
// // //Primitive
// // // String
// // // Number
// // // Boolean
// // // Null
// // // Undefined
// console.log(true)

// var a = "vishal";
// console.log(a);

// var b = 1.2;
// console.log(b);

// var c = true;
// console.log(c);

// var d = null;
// console.log(d);

// var e;
// console.log(e);

// // console.log(typeof(a))
// // console.log(typeof(b))
// // console.log(typeof(c)) // "boolean"
// // console.log(typeof(d)) // typeof("object")
// // console.log(typeof(e)) //"undefined"
// // everything in js is a object

// // it returns me the type of whatevere is there in a string format

// // ==
// // ===

// console.log(1 == "1"); // (1 == 1) by converting the string to number
// console.log("1" == 1); //true
// console.log("1" === 1); //false // it do type check first then value check value
// console.log("ap"=="ap"); //true

// // implicit type conversion
// // coercion

// // automatically convert string to number in case of comparison with ==

// //explicity way to convert as well
// // add a + in front a string it will convert to a number

// console.log(+"1");  // converts "1" into 1 i.e number
// console.log(+true); // converts "true" into 1 i.e number

// console.log(1 == 1);

// console.log(true == true);

// console.log(true == 1);

// console.log(+true === 1);

// // unary + would get precedence

// // would it be always converted to number
// // yes it will always be

// console.log(1+2);

// console.log("1" + "2");  // string concatenation
// // concatenation

// console.log("1"+"abc");
// console.log(1 + "abc");
// // implicity type conversion of string

// // type convert operand to string in case of +
// // if one operand is string

// console.log(1 + 3 + "abc"); // 4+ "abc"

// console.log("abc" + 1 + 3);

// console.log(+"1" + 1);   // converts "1" into 1 i.e string to number

// console.log(-"1" + 1);   // converts -"1" into 1 i.e string to number

// console.log("1" - 1);    // converts "1" into 1 i.e string to number

// - as an operator will convert string to number
// + as an operator will convert number to string
// if one operand is string

// console.log(+"1") // explicitly

// console.log(1 + "1");

// console.log(-"1");

// console.log("1" - 1);

// console.log(false == '0'); // converts number to string i.e '0' to 0
// console.log(false === '0')

// console.log(+"anc");    // type is Nan i.e Not a Number
// console.log(typeof(+"anc")); // type is number because it is expected as infinity

// console.log(+"anc" === +"anc"); // infinity can never  be equal to infinity

// nan can be imagined as infinity and infinity can't be equal to itself hence false
// and type is number as it lies on the axis of numbers just like infinity


// Object
// Array

//[1,2,3,4,5,6]

// var a = [];
// var b = new Array(0);    // here 0 is the size of the array

// constructor function
// class

// var a = [1,2,3,"string", true];

// a.length = 2;    // setting length of a array equal to 2

// console.log(a);
// var d = 2;
// var a = [1, 2, 3, 4];
// var b = a;
// // a ->  [1,2,3,4,1]  <- b
// // a.pointer  = 890
// // b.pointer  = 890
// // a.pointer = 900
// a.pop();

// a = [];
// a.length = 0;
// // [1,2,3,4]  <- b

// // a -> []

// console.log(a);
// console.log(b);



/********************************* Day 2 ****************************************** */
//three ways to create an object
// two ways right now and one way after sometime
// var a = [];
// var arr = new Array();
// Object - constructor function for objects
// var a = {};  // way 1

// var obj = new Object();  // way 2


// var cat = {
//     name: "cat",
//     color : "white",
//     meow : function(){
//         console.log("meow meow");
//     }
// };
// cat.size = "small"; // adding parameters in object
// console.log(cat);
// console.log(cat.name);
// cat.meow();

// var dog = {
//   name:"dollar",
//   "breed": "desi",
//   owner: {
//     name: "Saurabh",
//     profession: "engineer"
//   },
//   bark: function() {
//     console.log("woof woof");
//   }
// }

// JSON
//Javascript object notation
// name of the owner
// profession
// var key = "name";

// // console.log(dog.name);

// // console.log(dog["name"]);

// console.log(dog[key]);
// dog["name"]

// console.log(dog.key);

// console.log(dog.breed);

// // console.log(dog.owner.name);
// // console.log(dog['owner']['name']);

// // dog.bark();
// // functional programing

// // functions ----------------------------------
// // function definition
// function abc() {
//   console.log("i am a function")
// }

// abc();

// // function expression or anonymous function
// var a = function() {
//   console.log("I am a function 2");
// }

// a();

// var d;
// if(true) {
//   d = function() {
//     console.log("do 1");
//   }
// } else {
//   d = function() {
//     console.log("do 2");
//   }
// }

// function a() {   
//   return (function() {  // inner function is anonymous function.
//     console.log(3);
//   });
// }

// console.log(a());    // it will print the inner function definition

// var temp = a();
// temp()


// function abc(a) {    // function with parameters.
//   a();
// }

// abc(function(){console.log(3);});

// creating object as key inside another object
// note that if a is object then a.x = "value"  where x is a key, 
    //is used to set parameters in the object
// but if we put a[m] = "value" then it will search for a variable m defined above
// if we give a[obj]= "value" where obj is another object then js will internally convert
    // it into "[object Object]" as key in place of object by calling obj.toString() method internally

// var a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };
// a.b = "vishal";  // initialization of a key in a object where b is a key
// a[b] = 123; // a[b.toString()] // a["[object Object]"] = 123 // here b is another object
// a[c]=456; // a["[object Object]"] = 456 // here a[b] or a[c] is storing another object as key in a object
// console.log(a.b)    // here b is a normal key

// console.log(a.j);    // error as a.j is undefined
// a = console.log({}.toString())

// error
//123
//456
// undefined

// var obj = {
//   k: 1
// };

// var m = 1;
// obj.l = 10;

// obj.l = 20;

// obj[m] = '20'

// obj["[object Object]"] = 1;
// obj["[object Object]"] = 3;

// console.log(obj);
// var a = [];
// var a = new Array(0); // array of length 0
// var obj = new Object(); // create a new object

// this

// constructor functions should always
// be starting with Capital letter
// pascal case

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// var d1 = new Dog("Dollar", "desi");
// var d2 = new Dog("Dollar1", "desi");

// console.log(d1);
// console.log(d2);


/*------------------- 3 ways to create object ------------*/

// // 1. by creating a new object directly
// var obj = {};

// // 2. by using the new keyword for creating a new object
// var obj1 = new Object();

// // 3. Define a custom constructor
// function Dog(name, breed){
//     this.name = name;
//     this.breed = breed;
// }
// var d1 = new Dog("Dollar", "desi");
// var d2 = new Dog("hussy","german");
// console.log(d1)
// console.log(d2)

/*--------------------------------------------------*/
// var a = 10;
// function abc() {
//   var a;
// //   var b;
// //   console.log(a);
// //   b=20;
// //   a = 2;
// //   // var b =20    // js internally initialized variables at start of function without values
// //   // var a = 2;   // so it will give undefined as we have values of variables after print statement
// // }

// // abc();
// // global scope
// // local scope

// var z = 2;  // global scope
// function check() {
//   var z = 10;   // local scope
//   console.log(z);
// }

// // console.log(z);
// check();

// // var x = 21;
// // var girl = function () {  // it will internally work as example mentioned above
// // console.log(x);
// // var x = 20;
// // };
// // girl();

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   }
// };
// var pokemonName = function (snack, hobby) {
//   console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
// };

// // // call, apply, bind
// pokemonName("Sushi", "Algos")

// // //call(scope,param1, param2, ...)
// pokemonName.call(pokemon, "Sushi", "Algos")
// // // apply(scope, [params1, params2])
// pokemonName.apply(pokemon, ["Sushi", "Algos"])
// var bindedPokemonName = pokemonName.bind(pokemon);
// bindedPokemonName("sushi", "algos");
// bindedPokemonName("sushi1", "algos1");
// bindedPokemonName("sushi1", "algos1");

// pokemonName.call(pokemon,"s","a");

// // var bindedPokemonName = pokemonName.bind(pokemon, "sushi", "algos");

// bindedPokemonName();

/*----------------------------- Day 3 start --------------------------------*/

// Class 3 starts here

var monica = {
  name: "Monica Geller",
  total: 400,
  deductMontlyFee: function (fee) {
    this.total = this.total - fee;
    return this.name + " remaining balance is " + this.total;
  }
};

var rachel = { name: "Rachel Green", total: 1500 };

// console.log(monica.deductMontlyFee.call(rachel, 20));
// var deductMethod = monica.deductMontlyFee.bind(rachel);

// console.log(deductMethod(20));

// console.log(monica.deductMontlyFee(20));

// console.log(Math.max.apply(null,[1,2,3,5]));

// function abc() {
//   console.log(Object.values(arguments))
//   var a = Array.prototype.slice.call(arguments); // arguments.slice()
//   a.push(10);
//   console.log(a);
// }

// abc(1, 2, 3, 4);

// var a = [1, 2, 3, 4, 5, 6];

// console.log(a.slice());

// var b = 1;
// function outer(){
//   var b = 2
//   function inner(){
//     var b;
//     b++; //NaN
//     b = 3;
//     console.log(b); //3
//   }
//   inner();
// }
// outer();

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://javascript.info/
//https://www.w3resource.com/javascript-exercises/

// var a = {
//   x: 10,
//   calculate: function (z) {
//     return this.x + this.y + z;
//   }
// };

// var b = {
//   y: 20,
//   __proto__: a
// };

// var c = {
//   y: 30,
//   __proto__: b
// };

// // b -> a
// // b.calculate(20);

// console.log(b.calculate(20));

// prototype
// Prototype is an object available in a constructor function(function)
// which will be used for prototypical inheritence

// function Foo(y) {
//   this.y = y;
//   this.calculate1 = function (z) {
//     return this.x + this.y + z;
//   };
// }
// Foo.prototype.x = 10;
// Foo.prototype.calculate = function (z) {
//   return this.x + this.y + z;
// };

// var b = new Foo(10);

// console.log(b);

// console.log(b.__proto__ === Foo.prototype)

// b.calculate === b.__proto__.calculate

// console.log(Array.prototype)

// Closure
// Retaining the scope of a variable even after a function has returned

// function makeWorker() {
//   var name = "Pete";
//   return function() {
//     console.log(name); // Pete
//   };
// }
// var name = "John";
// var work = makeWorker();
// work();
// work();
// work();

// function() {
//   console.log(name);
// };
// var count = 0;
// function makeCounter() {
//   return function () {
//     return count++; // has access to the outer "count"
//   };
// }

// var counter = makeCounter();
// var counter1 = makeCounter();
// var counter2 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

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
