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