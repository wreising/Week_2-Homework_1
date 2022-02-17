document.getElementById('generate').addEventListener('click', () => {

})

let passwordLength = prompt("Please enter your password length.");
if (passwordLength < 8) {
  passwordLength = prompt("Passwords must be at least 8 characters. Enter the number of characters you would like.");
} else if (passwordLength > 128) {
  passwordLength = prompt("Passwords may not be greater that 128 characters. Enter the number of characters you would like.");
}
let upperCase = confirm("Would you like uppercase?");
let lowerCase = confirm("Would you like lowercase?");
let specialCharacters = confirm("Would you like special characters?");
let numbers = confirm("Would you like numbers?");

