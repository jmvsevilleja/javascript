const add = (num1, num2) => {
    return num1 + num2;
};
console.log('function call add(1,2):', add(1, 2));
// Callbacks - function(callback); - functions that are slipped or passed into another function
// First class - variable = first_class_function(); - Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value
// Higher order functions - high_order_function(callback); - The functions that take a function as an argument, or return a function as a return value
// lambda - variable = () => 'return'; - functions are passed in to another function or returned from another function, then those functions which gets passed in or returned

// Standard Functional Programming
//  1 Avoid Mutations and Side Effects Using Functional Programming ex. array.splice();
//  Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
//  2 Pass Arguments to Avoid External Dependence in a Function
//  Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.


// What is really going on inside the Array.prototype.map();
var s = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) { // callbacks
    var newArray = [];
    this.forEach(function (item) {
        newArray.push(callback(item));
    });
    return newArray;
};

console.log('Iterate and Multiply numbers by 2 using myMap: ', s, s.myMap(item => item * 2)); //lambda

// What is really going on inside the Array.prototype.filter();
Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    var newArray = [];
    this.forEach(function (item) {
        if (callback(item)) {
            newArray.push(item);
        }
    });
    // Only change code above this line
    return newArray;
};
console.log('Iterate and Filter odd numbers using myFilter: ', s, s.myFilter(item => item % 2 === 1)); //lambda

// PUSH vs CONCAT
var arr = [1, 2, 3];
console.log('Concat combine Array:', arr.concat([4, 5, 6]), arr); // arr is not changed - functional
console.log('Push mutates the Array:', arr.push(4, 5, 6), arr); // arr is mutated

// Sorting
var str = 'ACBacb';
console.log('Sort mutates the Array:', str, str.split('').sort((a, b) => a === b ? 0 : a > b ? 1 : -1), str); // str is mutated

// Joining
var str = 'A-B';
console.log('Join mutates the Array:', str, str.split(/\W/).join(' '), str); // str is not mutated

//Introduction to Currying and Partial Application
// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
curry = (x) => (y) => x + y;
console.log('Currying:', (x) => (y) => x + y, curry(1)(2));

// Challenge
// square of only the positive integers
const squareList = arr => {
    // Only change code below this line
    let newArr = arr.filter(num => num > 0 && num % 1 == 0).map(num => num * num);
    return newArr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);

//Convert Strings to URL Slugs
var title = ' Winter Is  Coming';
var url = title.trim().toLowerCase().split(/\s+/).join('-');
console.log('Title to URL:', title, url);