//1.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)



let names = ['James', 'james', 'bob', 'JaMeS', 'Bob'];
let uNames = {};

names.forEach(n => {
  let lower = n.toLowerCase();
  if (!uNames[lower]) {
    uNames[lower] = n;
  }
});

names = Object.values(uNames);
console.log(names); 

/*2Write a JavaScript function to find an array contains a specific element. Examplearr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]*/

function contains(array, element) {
  return array.includes(element);
}
let array = [2, 5, 9, 6];
console.log(contains(array, 5));  // outputs: true




/*3.Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 Example: [3, 8, 23, "hello", " ", false, "45"]result: [3, 8, 23, "hello", "45"]*/


function clearArray(array) {
    return array.filter(Boolean);
  }
let arr = [3, 8, 23, "hello", " ", false, "45"];
let clearedArr = clearArray(arr);
console.log(clearedArr); 

//4.Write a function to reverse the words a string.example: "Hello world"result: "world hello"
function string_reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(string_reverse("hello world"));
