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
