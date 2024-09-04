/* 
    JavaScript 7 basic data types:
    1. Number
    2. BigInt
    3. String
    4. Boolean
    5. Null
    6. Undefined
    7. Object and Symbols
*/

/* 
    Numbers
    - they can be used for mathematical operations using arithmetic operators: +, -, /, *.
*/

/* 
    Number Separator
    - use underscore to separate numbers for readability.
*/

let million = 1_000_000;
let billion = 1_000_000_000;

/* 
    parseInt() and parseFloat()
    - it reads and returns the number within the string.
*/

let width = "100px";
let height = "2.5rem";

console.log(parseInt(width));
console.log(parseFloat(height));

/* 
    String
    - a series of characters that are surrounded by quotations.

    Types of quotes:
    1. single quotes: ''
    2. doudble quotes: ""
    3. backticks: ``
*/

/* 
    Strings can represents as an arrays. It also has the length which is the number of characters of that string. 
    To get the the length of the string, use the length property.
*/

let str = `Hello, World!`;
console.log(str.length);


/*
    Characters can be accessed with their indices.
    An index starts at 0.
*/

console.log(str[0]);
console.log(str.charAt(8));
console.log(str.at(-1)); // -> square brackets return undefined value when accessing a negative indices, use at() instead or the 4th way. 
console.log(str[str.length - 1]);


/*
    Boolean
    - it uses the keywords true or false to represents boolean literals. 
    - 0 and 1 can be used to represents booleans, where 0 is false, and 1 is true.
*/

let isVerified = true;
let isPublised = 0;

if (isPublised) {
    console.log(`Published? ${true}`)
} else {
    console.log(`Published? ${false}`)
}

/* 
    Null
    - it means empty, nothing, non-existend.
*/

/*
    Undefined
    - it means "a value is not assigned". 
*/
