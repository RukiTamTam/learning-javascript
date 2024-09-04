/* 
    -- let --

    1. can be re-assigned
    2. block, locally scoped variables
*/

let num = 24;

function callVarValue() {
    let anotherNum = 25;
    let num = 26;
    console.log(num);
}

callVarValue();
console.log(anotherNum);

/*
    -- const --

    1. cannot be re-assigned
    2. block, locally scoped variables
*/

function callVarValue() {
    const num = 25;
    console.log(num);
}

console.log(num);

/* 
    -- var --

    1. Variable can be re-declared and re-assigned.
    2. variables can be accessed globally. Variables cannot be accessed outside of the function body. Does not have a block scope
*/

function callVarValue() {
    var num = 24;
}

num = 25;
console.log(num);
