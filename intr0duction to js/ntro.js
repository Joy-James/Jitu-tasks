/*let age ;
const year_of_birth = 2002;
let current_year = 2023;
age= current_year-year_of_birth;
console.log(age +"years");*/
//multiplication
let length=12;
let width=6;
let area= length*width;
console.log(area);
//division 
let total_marks=300;
let total_subjects=5;
console.log(total_marks/total_subjects +"this is the average");
//exponential
let value=4;
console.log(value**2);

//modulus
let value1=10;
let value2=5;
console.log(value1%value2);
console.log(value1%3);

//increment
let value3=10;
let value4=++value3;
console.log(value4);
console.log("increment" + value4);

//Assignmet operators
//=
let p=100;
let y=p;
console.log(p);

//+=
let x=200;
x+=100;
console.log(x);

// *=
let l=4;
l*=2
console.log(l);

// %=
let b=20;
b%=3;
console.log(b);

// **=
let c=3
c**=3;
console.log(c);

// Javascript Functions
/*function firstfunction (){
    let a=5;
    let v=4;
    console.log(a*v);
}
firstfunction();*/

function firstfunction (){
    let a=5;
    let v=4;
    return a*v;
}
 /*let result =firstfunction();
 console.log(result);*/

 //passing parameter functions
 function firstfunction ( year_of_birth, current_year){
    let age=current_year-year_of_birth;
    return age;
    
}
 let result= firstfunction(2000,2023);
 console.log(result);
 
 //anonymous function
  let today=function (){
let now =new Date();
console.log(now);
 
 }
 today();
//length
 let long='Hello world'
 long.length;
 console.log(long.length);
 //to uppercase
 let color="blue".toUpperCase();
console.log(color);
//to lowercase
let color2='GREEN'.toLocaleLowerCase();
console.log(color2);
//visualize a variable 
function plus(w,g){
    console.log(w);
    console.log(w+g);
    return w+g;
}
plus(1,4);

const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character
console.log(language[1]);



const language1= "JavaScript";

language1[ language.length - 2 ]; // "p" because it's the second to last character from "JavaScript"

//at index

const Language = "JavaScript";
Language.at(0); // "J"
Language.at(1); // "a"
Language.at(-1); // "t"
Language.at(-2); // "p"

//getbyId element
//document.getElementById("demo").innerHTML="Hello world";
const Element=document.getElementsByTagName("P")
document.getElementById("demo").innerHTML="MUMBI" + Element[0].innerHTML