/*
console.log(a);
let a = 10;

Output:

ReferenceError: Cannot access 'a' before initialization.

 Like var, let and const are also hoisted.But they are hoisted in 
 different way.
 If we try to access the variable before initializing using Var,it 
 will return Undefined.
 But Incase of Let and Const It will return a Reference error like
 Cannot access the variable before initialization.
 The var will be inside the GLOBAL object declaration where as the
 let and const are also allocated in certain memory.but they are in different memory space.
 Let and const are BLOCK Scopes.
 The statements between the curly braces are called as blocks.=>{}

 Example:
 
 function func(){
     let b = 20;
     const c = 100;
     console.log(c);
 }
 console.log(b);
 output:
 ReferenceError: b is not defined

 So the error is because we are trying to access the variable outside the scope.
 The life time of let and const variables ends inside the scope.

SHADOWING OF VARIABLES:

let a =100;
{
    let a = 10;  
}

This is acceptable because the variable a inside the scope has an particular memory space and the global variable a has 
an seperate memory space.
This is same for const also.

 /*
 TEMPORAL DEAD ZONE:

console.log(a);
let a = 10;
let b = 100;
OUTPUT:
ReferenceError: Cannot access 'a' before initialization.

when the variables are in temporal deadzone we cant access it.
The variable having temporal deadzone gives the reference error.
we are trying to initialize the variable in line no 22.
so anything before line number 22 WaS the temporal deadzone of a.

when we try to access the variable which is not inside the global object or 
nowhere in the code. it will also gives reference error as the variable is 
not defined.

let a =100;
let a =100;
output:
SyntaxError: Identifier 'a' has already been declared

if we try to initialize the same variable again.it will gives a 
syntax Error.
Javascript wont even execute a single line of code when we have a syntax error.

const also behave same as let but it is even more strict than let.
In let we can declare and initialize it later.

let a;
a= 100;

but in const we cant do like that

const b;
b =100;
output:
SyntaxError: Missing initializer in const declaration


In const datatype we also cant do this like let,

const b =1000;
b =100000;

=====> This time it will give a type error

output:
TypeError: Assignment to constant variable.

The better way is to use let and const in programming now a days uless var is required.

SPREAD AND REST OPERATOR:

Spread operator is also used for Concatenation.

const t1 = [1,2,3];
const t2 = [4,5,6];
console.log(...t1,...t2);

//Output:
//1 2 3 4 5 6

//In concat method it will return the output in Array.
//The spread operator will return it in specified datatype.

REST OPERATOR:

const[name,age] = ['Jose',14,'male',16];
console.log(name,age);
output:
Jose 14

Here the rest of the values are get ignored.Rest operator will collect the rest of thre values.
and return it in array.

const[name,age,...rest] = ['Jose',14,'male',16];
console.log(rest);

output:
[ 'male', 16 ]

Rest and spread has the same syntax => (...)
but how we are using that is different.

ARRAY AND OBJECT DESTRUCTURE:

//Array destructure:

const [name ,age ] = ['jose',15];
console.log(name,age);
output:
jose 15
we are trying to access the same program in another way.
The output we getting here also same.

// const details = ['jose',15];
// const[name,age] = details;
// console.log(name,age);

if any of the values is undefined  then the default value can replace it.

const [Name,age=20] = ['jose',21];
console.log(Name,age);

But incase there is already a value defined then the default value will not replace it.

const [Name,age=20] = ['jose',21];
console.log(Name,age);
output:
jose 21

OBJECT DESTRUCTURING:

const {name,age} = {name:'joseph',age:15};
console.log(age,name);

OUTPUT:
15 joseph

How the object is printing the value correctly is, the object is matching the values by keys.
If we change the order also it will print correctly.

const {age = 12,name} = {name:'jose',age : 10};
console.log(name,age);

output:
jose 10

Destructuring refers to the unpacking of values.

TEMPLATE LITERALS:

Template literals are literals represented with backticks (`)
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). 
The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

example:

let name = 'joseph';
const source = 'Guvi';

console.log(`${name} is learining fullstack development in ${source} !.`);

Output:

joseph is learining fullstack development in Guvi !.

CLASS:

A class is simply a blue print.
For example if we have the blueprint of a car.which has certain base properties like door,wheel,Engine,sunroof.
we can create more number of new cars like this by changing its properties alone.


Let us see a Example for the class.

For creating a class we should have a keyword class.


class Car{
    constructor(wheel,door,engine,sunroof)//in the constrfuctor we are passing all the properties.
    {
        this.wheel = wheel;
        this.door = door;      // These are the Class Variables.
        this.engine = engine;
        this.sunroof = sunroof;
    }
}

const Audi = new Car(4,4,'V8',false);

//Audi => Object of the class.
//keyword new defines we are creating a new object from the class.

const BMW = new Car(4,4,'V6',true);
const RollsRoyce = new Car(4,4,'V12',false);

console.log(Audi);
console.log(BMW);
console.log(RollsRoyce);

output:

Car { wheel: 4, door: 4, engine: 'V8', sunroof: false }
Car { wheel: 4, door: 4, engine: 'V6', sunroof: true }
Car { wheel: 4, door: 4, engine: 'V12', sunroof: false }

Like ways we can create n number of objects using class.
we also have inheritance and encapsulation in class we can see that in Oops task.


ARROW FUNCTIONS:

In Arrow functions the keyword function is Ommited.

const sum = (a,b) => {
    return a + b;
}

console.log(sum(5,6));

//output is 11

//when the function is only one line  we need not use the  curly braces and return keyword.

const sum = (a,b) => a+b;

console.log(sum(5,6));

//If there is only one parameter we can also omit the () brackets.

const sum = a => a*100 ;
console.log(sum(2));

output:200

Desstructring in Arrow Functions:

Arrays:
const sum = ([a, b] = [10, 20]) => a + b;  
console.log(sum());
// result is 30

Objects:
const sum = ({ a, b } = { a: 10, b: 20 }) => a + b;
console.log(sum());
// result is 30
*/