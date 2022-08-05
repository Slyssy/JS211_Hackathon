'use strict';
const prompt = require('prompt-sync')({ sigint: true });
const number = prompt(
  'Enter a positive number to determine how many ramp numbers exist between 1 and that number. Enter number:'
);

// $ Function to convert a number to an array.
const numToArray = (num) => Array.from(String(num), Number);

// $ Function to loop over an array of numbers and determine if the number after
// $ the current # is greater or equal to the previous #.
const isNextNumGreater = (arr) => {
  const resultArray = arr.filter((el, i) => {
    // console.log(el, arr[i - 1]);
    // $ If the index is equal to 0 we can't look in front of it. So we set the
    // $ value equal to itself.
    const indexValue = i === 0 ? arr[i] : arr[i - 1];
    return el >= indexValue;
  });
  // $ Returning an array of all the numbers that are >= to the number before
  // $them in the array.
  return resultArray;
};

// $ Create a function that accepts a number as an input.
const isRampNumber = (num) => {
  // $ Generate an error if the input is not a number or if the number is not > zero.
  if (typeof num !== 'number' || num <= 0) {
    console.log(`You must enter a number that is greater than 0`);
  } else {
    // $ Setting values based on function calls from functions above.
    const numberArray = numToArray(num);
    const filteredArray = isNextNumGreater(numberArray);
    // $ If the two arrays equal each other then it number, if not, it means a
    // $ number was filtered out in the "isNextNumberGreater" function. This
    // $ means it is not a ramp #.
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
  // $ Create an array of numbers from 1 upto and including the number argument.
  const start = 1;
  const end = num;
  const rangeArray = [...Array(end - start + 1).keys()].map((x) => x + start);
  // $ Filter the array to show only the numbers where the isRampNumber function
  // $ returns true.
  const rampArray = rangeArray.filter((num) => isRampNumber(num));
  console.log(rampArray);
  console.log(
    `There are ${rampArray.length} ramp numbers between 1 and ${num}.`
  );
};

countRampNumbers(number);
