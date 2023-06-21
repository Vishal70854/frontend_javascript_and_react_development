// class 2 continuation of call(), apply(), bind() methods
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
  
  // syntax for apply ->  apply(scope, [array values])
  // console.log(Math.max.apply(null,[1,2,3,5])); // get max from an array using apply function
  
  // function abc() {
  //   console.log(Object.values(arguments))
  //   var a = Array.prototype.slice.call(arguments); // arguments.slice()
  //   a.push(10);
  //   console.log(a);
  // }
  
  // abc(1, 2, 3, 4, 5);

  
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
  
  // note: we will never use __proto__ for inheriting other object in a object.
  // we should always use prototype for inheritance.
  // var a = {
  //   x: 10,
  //   calculate: function (z) {
  //     return this.x + this.y + z;
  //   }
  // };
  
  // var b = {
  //   y: 20,
  //   __proto__: a  // its like inheriting a properties in b object //__proto__ is acting a a key
  //                 // to inherit properties of another object
  // };
  
  // var c = {
  //   y: 30,
  //   __proto__: b // its like inheriting b properties in c object 
                    // its called prototype chaining
  // };
  
  // // b -> a
  // // b.calculate(20); // calling calculate(z) function of a from b due to prototype chaining
  
  // console.log(b.calculate(20));
  
  // ----------------------- prototype -----------------------
  // Prototype is an object available in a constructor function(function)
  // which will be used for prototypical inheritence
  
  // function Foo(y) {
  //   this.y = y;
  //   this.calculate1 = function (z) {
  //     console.log("inside local function object");
  //     return this.x + this.y + z;
  //   };
  // }
  // Foo.prototype.x = 10;
  // Foo.prototype.calculate = function (z) {
  //   console.log("inside prototype");
  //   return this.x + this.y + z;
  // };
  
  // var b = new Foo(10);
  
  // console.log(b);
  // console.log(b.calculate()) // function of prototype available globally to all objects
  // console.log(b.calculate1()) // function of object b available locally 
  
  // console.log(b.__proto__ === Foo.prototype)
  
  // b.calculate === b.__proto__.calculate
  
  // console.log(Array.prototype)
  
  // ----------------------------------- Closure --------------------------------
  // Retaining the scope of a variable even after a function has returned
  // in easy terms if we have a function where we are returning another function then
  // that will be in closure scope (not in global scope or local scope)
  
  // function makeWorker() {
  //   var name = "Pete";
  //   return function() {
  //     console.log(name); // Pete
  //   };
  // }
  // var name = "John";
  // var work = makeWorker();
  // work();  // Pete
  // work();
  // work();
  
  //example 2:

  // var count = 0;
  // function makeCounter() {
  //   return function () {
  //     return count++; // has access to the outer "count"
  //   };
  // }
  
  // var counter = makeCounter();
  // var counter1 = makeCounter();
  // var counter2 = makeCounter();
  
  // console.log(counter());  //0   // maintaining closure scope
  // console.log(counter());  //1
  // console.log(counter());  //2
  // console.log(counter());  //3
  // console.log(counter());  //4
  
  // console.log(counter1()); //0
  // console.log(counter1()); //1
  // console.log(counter1()); //2
  // console.log(counter1()); //3
  // console.log(counter1()); //4