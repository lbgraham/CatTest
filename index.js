const CatTest = require('./CatTest.js');

// Time limit 45 minutes
// Write a function findMiddleChar that takes a string and returns the string char that is at the midway point of the string.  If the string has no character at the midway point, return ""

// 1) To have a middle the string must be odd (length % 2 === 1)
//
// 2) If the number is not odd, then just return an empty string
//    (else statement)
//
// 3) To find the middle of an odd number use Math.floor to round
//    down from the division by 2 (if length is 5, 5/2 = 2.5
//    Math.floor(2.5) === 2 // <-- Index of middle char)
//                        ^ // return this index value

// Pseudocode:
//
// if the number is odd
//   return the value of the string at .floor(strLength / 2)
// else
//   return ''

const findMiddleChar = (str) => str.length % 2 === 1 ? str[Math.floor(str.length / 2)] : '';

// Testing Section

// Prepare Data for Testing
var grumpyCat = findMiddleChar('GrumpyCat');
var grumpyCatBang = findMiddleChar('GrumpyCat!');
var grumpyCatMantra = findMiddleChar('All work and no play make Grumpy Cat reject the purr!');
var grumpyCatZen = findMiddleChar('');

// Format of Each Test Array Index:
// Result of Actual Test, Expected Results, Test Name
// No spaces between args
var testArr = [
  `${grumpyCat},p,Find Middle Char`,
  `${grumpyCatBang},,Even Length Should Return Empty String`,
  `${grumpyCatMantra},G,Long Odd Sentence`,
  `${grumpyCatZen},,Nothing Returns Nothing`
];

// Instantiate a CatTest
var test = new CatTest();

// Run Tests
test.runTests(testArr);
