/* 
    -- let --

    1. can be re-assigned
    2. block, local scoped variables
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

    1. stored value cannot be re-assigned
    2. block, local scoped variables
*/

function callVarValue() {
    const num = 25;
    console.log(num);
}

console.log(num);

/* 
    -- var --

    1. stored value can be re-assigned.
    2. can access globally, and outside of the block and function body.
*/

function callVarValue() {
    var num = 24;
}

num = 25;
console.log(num);