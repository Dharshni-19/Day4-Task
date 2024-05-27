//Q1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumbers);

//Q2
let stringArray = ["hello guvi", "thank you"];

let titleCapsArray = stringArray.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log(titleCapsArray); 

//Q3
let numbers = [1, 2, 3, 4, 5];

let sum = function(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
};

console.log(sum(numbers));

//Q4
let strings = ["hello", "level", "racecar", "world", "madam"];

let isPalindrome = function(str) {
    return str === str.split('').reverse().join('');
};

let palindromeStrings = strings.filter(function(str) {
    return isPalindrome(str);
});

console.log(palindromeStrings);

