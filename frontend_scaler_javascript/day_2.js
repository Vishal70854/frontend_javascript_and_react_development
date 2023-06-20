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
