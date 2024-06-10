
// Understanding Data Types in JavaScript

//Task 1
let studentInfo = {
    name: 'Spencer',
    age: 38,
    grades: ['a', 'b', 'a', 'b'],
    attendance: 100
}

console.log(studentInfo);

//Task 2
studentInfo['name'] = 'John';
studentInfo['age'] = 25;
studentInfo['grades'].push('a', 'b')
studentInfo['attendance'] = 95;

console.log(studentInfo);
console.log(studentInfo['grades']); // ['a', 'b', 'a', 'b', 'a', 'b']


//Task 3
// done above

// Exploring JavaScript Operators

//Task 1

let num1 = 0;
let num2 = 0;

//Task 2

num1 = 3;
num2 = 8;

//Task 3

console.log("sum:", num1 + num2); // 11
console.log("difference:", num1 - num2); // -5
console.log("product:", num1 * num2); // 24
console.log("quotient:", num2 / num1); // 2.66666666665
console.log("quotient whole num:", Math.floor(num2 / num1)); // 2

//Task 4
console.log("Updated num1:", num1 += 4); //num1:7
console.log("Updated num2:", num2 *= 3); //num2:24
console.log("Updated num2", num2 /= 6); //num2:4
console.log("Updated num1:", num1 -= 2); //num1:5

//Task 5
console.log("Is num1 equal to num2?", num1 === num2); // false
console.log("Is num1 greater than num2?", num1 >= num2); // true
console.log("Is num1 not equal to num2?", num1 != num2); // true

//Task 6
let myNum1 = 5;
let myNum2 = 9;
let myNum3 = 3;

console.log(myNum1 < myNum2 && myNum1 > myNum3); // true
console.log(myNum1 > myNum3 || myNum2 < myNum1); // true