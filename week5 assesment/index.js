2//.With the following code blocks, can you say what will happen in each of these instances?

// const c1 = 1; c1 = 3;



// const c2 = “hello”; c2 += “world!”;


// const c3 = {}; c3.name = “Geoff”; c3.someValue = “Sausage”; c3 = {};






//In the first code block, you are trying to reassign a value to a constant declared 
//with const, which is not allowed in JavaScript.
 //You will receive an error message:

// In the second code block, you are updating a string value, which is allowed in JavaScript. 
//The string "hello" is assigned to c2, and then the expression c2 += "world!" will concatenate the string "world!" to c2, so the final value of c2 will be "helloworld!".

// In the third code block, you are updating an object property, which is allowed in JavaScript. 
//The object {} is assigned to c3, and then you add properties name and someValue to the object.
// However, you are then trying to reassign c3 to a new object {}, which is not allowed in JavaScript because c3 was declared with const. 
//You will receive an error message

//example 1
let first =[1, 2, 3];
let  second = [2, 3, 4, 5];
let  third = [...first, ...second];
console.log(third);
//example2
let arr=[234,45,66,642]
let arr2=[45,56,60]
console.log(... arr2);

const combinedArray=[...arr,...arr2]
console.log(... combinedArray);

