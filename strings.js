//Q1. Extract the last four characters from the string below;"extravaganza"

let word = "extravaganza";
let a = word.substring(8,11);
console.log({a});

/*Q2. Insert the following string at the fourth index of the below variable:"eat"
 const food = "The quick fox jumped over the lazy dog"*/

let food = "The quick fox jumped over the lazy dog";
let check = food[3];
console.log({check});
let b = food.replace(check, 'eat');
console.log({b});

/*Q3. Count how many times the following string appears in the string variable:1. "the"
 2."brown"const story= "The quick brown fox jumps over the lazy dog"*/

 const story = "The quick brown fox jumps over the lazy dog";

//  1.
 let the = story.match(/the/gi);
 console.log({the});

//  2.
 let brown = story.match(/brown/gi);
 console.log({brown});

/*Q4. Using JavaScript, find the following words from the following strings:
1. "are"const string1 = "The pupils are reading in the library";
2. "sitting"const string2 = "The child was sitting on the table before it fell"*/

// 1.

const string1 = "The pupils are reading in the library";

let are = string1.search("are");
console.log({are});

// 2.

const string2 = "The child was sitting on the table before it fell";

let sitting = string2.search("sitting");
console.log({sitting});

//Convert the following strings into the specified format:

// 1. UpperCase: "wonderful"

let Word1 = "wonderful";
let firstWord = Word1.toUpperCase();
console.log({firstWord});

// 2. LowerCase: "amazing", "UndERneath"
// a.

let Word2 = "amazing";
let secondWord = Word2.toLowerCase();
console.log({secondWord});

// b.
let Word3 = "UndERneath";
let thirdWord = Word3.toLowerCase();
console.log({thirdWord});


// 3. Title case "A wonderful world"

let Word4 = "wonderful";
// let fourthWord = Word4.capitalize();
// console.log({fourthWord});