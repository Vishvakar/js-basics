// data types,null,undefined,boolean,number,string,object,array+

 let a = 10;
 let b = 20;
 console.log(a+b);

 let a = 10;
    console.log(a*a);

let a = [10, 20, 30];
let isactive = true;
console.log(a[1]);

let a = 13456;
console.log(a);

let a = null;

let name = "vish";
let age = 21;
console.log(name);
console.log(age);

let student ={name : "vishva", age : 21};
let marks ={maths : 90, science : 80, english : 70};
console.log(student);
console.log(marks.maths);

//----------------------------------------------------------------------------------------------------------------
// operators

// arithmetic operators

let a = 10;
let b = 20;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b);

//----------------------------------------------------------------------------------------------------------------
// assignment operators
let a = 10;
console.log(a += 5);
console.log(a -= 5);
console.log(a *= 5);
console.log(a /= 5);

//----------------------------------------------------------------------------------------------------------------
// comparison operators
let a = 5;
console.log( a == 5);
console.log(a === 5);
console.log(a != 5);
console.log(a !== 5);
console.log(a > 5);
console.log(a < 10);
console.log(a >= 5);
console.log(a <= 5);

//----------------------------------------------------------------------------------------------------------------
// logical operators
let age = 21;
console.log(age > 18 && age < 30);
console.log(age > 18 || age < 30);
console.log(!(age > 18 && age < 30));

//----------------------------------------------------------------------------------------------------------------
// ternary operator

let age = 21;
let result = (age >= 18) ? "eligible" : "not eligible";
console.log(result);

//----------------------------------------------------------------------------------------------------------------

//typeof operator

 let a = "vishva";
 let b = 21;
 let c = true;
 console.log(typeof a);
 console.log(typeof b);
 console.log(typeof c);

//----------------------------------------------------------------------------------------------------------------

// functions

  function greetings(){
    console.log("hello world!");
}
greetings();
// function with args & parameters
  function add (a, b){
    console.log(a+b);
  }
  add (3 ,4);

// return function

  function add (a, b){
    return a+b;
  }
console.log(add(3, 4 ));

// anonymous function

 let greet = function(){
    console.log("hello world!");
 }
 greet();

// arrow function

let multiply = (a, b) => a*b;
console.log(multiply(3, 4));

//----------------------------------------------------------------------------------------------------------------

// array methods

 let arr = [10, 20, 30, 40, 50];
 console.log(arr[4]);
 console.log(arr.slice(0, 1));
 arr.push(60);
 console.log(arr);
 arr.unshift(0);
 console.log(arr);
 arr.pop();
 console.log(arr);
 arr.shift();
 console.log(arr);

//----------------------------------------------------------------------------------------------------------------
// 
