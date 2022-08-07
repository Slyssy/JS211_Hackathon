'use strict';
// const number = prompt('Enter a positive number. ');
//##### Function to convert a number to an array.
const numToArray = (num) => Array.from(String(num), Number);

//##### Function to filter an array of numbers so that only the numbers that are >= to the number before them are included in an array.
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

//###### Function that accepts a number as an input and determines if it is a Ramp Number.
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

//##### Function to create an array of numbers where the isRampNumber function returns true.
let rampArray = [];
const countRampNumbers = (num) => {
  num = document.getElementById('prompt-2-input').value;
  const results = document.getElementById('prompt-2-results');
  // * Create an array of numbers from 1 upto and including the number argument.
  const start = 1;
  const end = num;
  const rangeArray = [...Array(end - start + 1).keys()].map((x) => x + start);
  // * Filter the array to show only the numbers where the isRampNumber function
  // * returns true.
  const rampArray = rangeArray.filter((num) => isRampNumber(num));
  results.insertAdjacentHTML(
    'afterbegin',
    `<p>There are ${rampArray.length} ramp numbers between 0 and ${num}</p>`
  );
  console.log(rampArray.length);
};

//##### Function to remove special characters & numbers from a string .
const charsOnly = (string) => string.replace(/[^a-zA-Z]/g, '').toLowerCase();

//##### Function to convert a string to an array of characters.
const stringToArray = (string) => [...string];

//##### Function to tally the number of times an element appears in an array.
const createObject = (array) => {
  const count = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return count;
};

// #####Function to iterate over object and return each key and value.
const parseObject = (object) => {
  const results = document.getElementById('prompt-3-results');
  // * Create an array of the keys from the count object.
  const keys = Object.keys(object);

  // * Loop over the keys array and using each key to grab the value for each key
  // * in the count object.

  keys.forEach((key) => {
    results.insertAdjacentHTML('afterbegin', `<p>${key}: ${object[key]}</p>`);
  });
};

const letsCountLetters = () => {
  //* Create a variable to store the user's input.
  console.log('Clicked');
  const inputString = document.getElementById('prompt-3-input').value;
  const arrayOfChars = stringToArray(charsOnly(inputString));
  const letterCountObject = createObject(arrayOfChars);
  parseObject(letterCountObject);
};
