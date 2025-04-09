// Task 1: Declare a variable age and assign it a value of 25. 
// Declare another variable isAdult that is true if age is 18 or more, otherwise false.
let age = 25;
let isAdult = age >= 18;

// Task 2: Given x = 10 and y = 5, perform the following operations and store the results:
let x = 10;
let y = 5;

let addition = x + y;         // Addition
let multiplication = x * y;  // Multiplication
let modulus = x % y;         // Modulus

// Task 3: Write a program that checks if a number n is even or odd and stores the result in a variable.
let n = 7; // Example number
let isEven = n % 2 === 0 ? "Even" : "Odd";

// Task 4: Write a for loop to store numbers from 1 to 5 in an array.
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}

// Task 5: Write a function square that takes a number as input and returns its square.
function square(num) {
    return num * num;
}

// Example usage of the square function
let result = square(4); // 16