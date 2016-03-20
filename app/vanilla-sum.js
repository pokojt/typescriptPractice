var number = prompt('please enter a number.');
var otherNumber = prompt('enter another number.');
var sum = number + otherNumber;
alert("The sum of your two numbers is: " + sum);

//This will return the number 11 because vanilla JS is a loosely typed language that doesn't require us to define variable types. It read our input numbers as strings and adds the two strings together.

// In TypeScript, we can define variable types if we want to avoid this problem. 
