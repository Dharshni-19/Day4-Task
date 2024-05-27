//Q1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); 

//Q2
let stringArray = ["hello world", "good morning", "have a nice day"];

let titleCapsArray = stringArray.map(str =>
    str.toLowerCase().split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
);

console.log(titleCapsArray); 

//Q3
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

//Q4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers);

//Q5
let strings = ["hello", "level", "racecar", "world", "madam"];

let isPalindrome = str => str === str.split('').reverse().join('');

let palindromeStrings = strings.filter(isPalindrome);

console.log(palindromeStrings); 
