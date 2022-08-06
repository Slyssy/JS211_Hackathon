# JS211_Hackathon

## Prompt 2: Ramp Numbers

A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number and so is 1124 and 13569. But 1032 is not and neither is 1528.

Challenge: Given the input of a number, build a program that will find the total
number of ramp numbers that are less than it.

### Coding Plan:

1. Create a function that accepts a number as an input.
2. Generate an error if the type of input is not a number.
3. Generate an error if the number entered is less than 0.
4. Convert valid number into an array.
5. Loop of the array to determine if the number after the current number is >=
   to the current number.
6. We can use the filter method to create a new array that contains only the current
   numbers that are greater than or equal to the previous number.
7. Then compare the lengths of the arrays.
8. Create a function that will accept a number and create an array of numbers
   between 1 and the number argument.
9. Loop over that array and use the filter method to create an array of numbers
   where the isRampNumber function returns true.
10. Count the length of that array to get the number of ramp numbers.

## Prompt 3: Count It

Given a sentence, paragraph or novel, count the letters in the string. Ignore
whitespace and anything not [a-z][a-z], i.e. punctuations and numbers.

### Coding Plan

1. Allow user to input a string and set that string to a variable.
2. Figure out a way to remove the special characters and spaces from that
   string.
3. Create an array from the string of letters only.
4. Loop over the array of letters and count the number of times a character
   appears.
5. I'm thinking I'll have to create an object with the letter as the key and the
   count the value. Starting with a blank object.
6. I can either leave it as an object, or I can unpack the object by creating an
   array of keys, and loop over the key array and get the key, and use that key
   to access the element in the count object.
