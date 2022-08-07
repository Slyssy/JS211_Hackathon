'use strict';
const prompt = require('prompt-sync')({ sigint: true });
const number = prompt('Enter a positive number. ');
const assert = require('assert');

// * Function to convert a number to an array.
const numToArray = (num) => Array.from(String(num), Number);

// * Function to loop over an array of numbers and determine if the number after
// * the current # is greater or equal to the previous #.
const isNextNumGreater = (arr) => {
  const resultArray = arr.filter((el, i) => {
    // console.log(el, arr[i - 1]);
    // * If the index is equal to 0 we can't look in front of it. So we set the
    // * value equal to itself.
    const indexValue = i === 0 ? arr[i] : arr[i - 1];
    return el >= indexValue;
  });
  // * Returning an array of all the numbers that are >= to the number before
  // *them in the array.

  return resultArray;
};

// * Create a function that accepts a number as an input.
const isRampNumber = (num) => {
  // * Generate an error if the input is not a number or if the number is not > zero.
  if (typeof num !== 'number' || num <= 0) {
    console.log(`You must enter a number that is greater than 0`);
    return `You must enter a number that is greater than 0`;
  } else {
    // * Setting values based on function calls from functions above.
    const numberArray = numToArray(num);
    const filteredArray = isNextNumGreater(numberArray);
    // * If the two arrays equal each other then it is a ramp number, if not, it
    // *  means a number was filtered out in the "isNextNumberGreater" function.
    // *  This means it is not a ramp #.
    if (numberArray.length === filteredArray.length) {
      // console.log(`${num} is a ramp number.`);
      return true;
    } else {
      // console.log(`${num} is NOT a ramp number.`);
      return false;
    }
  }
};

const countRampNumbers = (num) => {
  // * Create an array of numbers from 1 upto and including the number argument.
  const start = 1;
  const end = num;
  const rangeArray = [...Array(end - start + 1).keys()].map((x) => x + start);
  // * Filter the array to show only the numbers where the isRampNumber function
  // * returns true.
  const rampArray = rangeArray.filter((num) => isRampNumber(num));
  console.log(rampArray);
  console.log(
    `There are ${rampArray.length} ramp numbers between 0 and ${num}.`
  );
};

countRampNumbers(number);

// * Create a variable to store the user's input.
const string = prompt('Enter a word, paragraph or novel: ');

//* Removing special characters and numbers from the string.
const charsOnly = string.replace(/[^a-zA-Z]/g, '');

// * Adding characters to a string
const arrayOfChars = [...charsOnly];

// * Loop over the array of characters and count each character and counting
// * each time a character appears and putting results in a count object.
const count = {};

for (const char of arrayOfChars) {
  // * If the character exists in the count object, add 1 to it. If not, it's a
  // * new character, and you will set it's value equal to 1.
  count[char] ? (count[char] += 1) : (count[char] = 1);
}

console.log(count);
// * Create an array of the keys from the count object.
const keys = Object.keys(count);

// * Loop over the keys array and using each key to grab the value for each key
// * in the count object.
keys.forEach((key) => {
  console.log(`${key}: ${count[key]}`);
});

// ######## Start Test Section ##########
if (typeof describe === 'function') {
  const assert = require('assert');
  describe('Testing to see if the number entered is transformed into an array.', () => {
    it('Should covert any number into an array of individual numbers', () => {
      let testNum = 256843;
      let testArray = numToArray(testNum);
      assert.equal(testArray.length, 6);
      assert.equal(
        JSON.stringify(testArray),
        JSON.stringify([2, 5, 6, 8, 4, 3])
      );
    });
  });

  describe('Testing to see an error is thrown if positive "numbers" are not entered.', () => {
    it('Should accept only numbers', () => {
      let onlyNumbers = isRampNumber('cat');
      assert.equal(
        onlyNumbers,
        'You must enter a number that is greater than 0'
      );
      onlyNumbers = isRampNumber(-5);
      assert.equal(
        onlyNumbers,
        'You must enter a number that is greater than 0'
      );
    });
  });

  describe('Testing to see if ramp numbers are detected correctly', () => {
    it('If number after first number is >= to the first number it is a ramp number (Returns True). If not, it returns false.', () => {
      let testNumber = isRampNumber(13);
      assert.equal(testNumber, true);
      testNumber = isRampNumber(20);
      assert.equal(testNumber, false);
    });
  });
}
