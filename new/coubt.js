// Prompt the user to enter a string
let input = prompt("Enter a string:");

// Check the length of the input string
if (input.length < 5 || input.length > 10) {
  // Prompt for another string if the length is not within the desired range
  input = prompt("Please enter a string with a length between 5 and 10 characters:");
}

// Print the final string
console.log("Final string:", input);