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

// math in javascript

let n = 10;
console.log(Math.sqrt(n));
console.log(Math.pow(n, 2));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(12, 34, 50, 60));
console.log(Math.min(12, 45, 50, 60));
console.log(Math.random());
console.log(Math.abs(n));
console.log(Math.PI);

//----------------------------------------------------------------------------------------------------------------

// Date and time methods

let date = new Date();
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

//----------------------------------------------------------------------------------------------------------------
//  for statement

for(let i = 1; i<=4; i++ ){
    console.log(i);
}

// while statement

let i = 1;
while(i <= 4){
    console.log(i);
    i++;
}

// do while statement

let i = 1;
do{
    console.log(i);
    i++;
}while(i <= 4 );

// for in statement

let student = { name : "vishva ", age : 21 };
for (let key in student){
    console.log(key +" : "+ student[key]);
}

// for of statement

let nums = [1,2, 3, 4] ;
let sum = 0;
for ( let n of nums){
    sum += n;
}
console.log(sum);

//----------------------------------------------------------------------------------------------------------------

// if statement 

let age = 18 ;
if (age >= 18 ){
 console.log("eligible to vote");
} 

// if - esle statement
let age = 21;
if (age >= 18){
 console.log("eligible to vote");
}else {
    console.log("not eligible to vote");
}

// if - else if - else statement

let mark = 85;
if (mark >=  90){
    console.log("A grade");
}else if (mark >= 80){
    console.log("B grade");
}else if (mark >=60){
    console.log("C grade");
}else if (mark >= 40){
    console.log("D grade");
}else {
    console.log("fail");
}

// switch statement

let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// -------------------------------------//END//---------------------------------------------------------------------------//

