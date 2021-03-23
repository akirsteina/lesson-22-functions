// 9. Write a function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function returnInputType(argument) {
    return typeof argument;
}

let empty;
let object1 = {}


console.log(returnInputType('dog'));
console.log(returnInputType(123));
console.log(returnInputType(true));
console.log(returnInputType(empty));
console.log(returnInputType(object1));