document.getElementById('generate').addEventListener('click', () => {

})

let passlength = prompt("Please enter your password length.");

if (passlength < 8) {
  passlength = prompt("Passwords must be at least 8 characters. Enter the number of characters you would like.");
} else if (passlength > 128) {
  passlength = prompt("Passwords may not be greater that 128 characters. Enter the number of characters you would like.");
}

let upperCase = confirm("Would you like uppercase?");
let lowerCase = confirm("Would you like lowercase?");
let specialCharacters = confirm("Would you like special characters?");
let numbers = confirm("Would you like numbers?");

charsSUL = (upperCase && lowerCase && specialCharacters && (numbers == false));
charsSU = (specialCharacters && upperCase);
charsUL = (upperCase && lowerCase);
charsSL = (lowerCase && specialCharacters)
charsSULN = (upperCase && lowerCase && specialCharacters && numbers);
charsSUN = (specialCharacters && upperCase && numbers);
charsULN = (upperCase && lowerCase && numbers);

console.log(passlength);
console.log(upperCase);
console.log(lowerCase);
console.log(specialCharacters);
console.log(numbers);

// var charsSUL = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var charsSU = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var charsl = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()"
// var charUL = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var charU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var charL = "0123456789abcdefghijklmnopqrstuvwxyz"

// function is from https://stackoverflow.com/a/16548229/17557927 - modified by me

// if (charsSUL == true) {
function password_generator(len) {
  var length = (len) ? (len) : (passlength);
  var stringLower = "abcdefghijklmnopqrstuvwxyz";
  var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while (password.length < length) {
    // if (lowerCase == true) {
    entity1 = Math.ceil(stringLower.length * Math.random() * Math.random());
    // } else if (lowerCase == false) {
    // entity1 = ""
    // }
    entity11 = Math.ceil(stringUpper.length * Math.random() * Math.random());
    entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
    hold = stringLower.charAt(entity1);
    hold11 = stringUpper.charAt(entity11);
    // if (uppercase = true) {
    //   hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
    // }
    if (lowerCase == true) {
      character += hold;
    } else if (lowerCase == false) {
      character += ""
    }
    character += hold11;
    character += numeric.charAt(entity2);
    character += punctuation.charAt(entity3);
    password = character;
  }
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  return password.substr(0, len);
}
// } else if (charsUL == true) {
//   function password_generator(len) {
//     var length = (len) ? (len) : (10);
//     var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var numeric = '0123456789';
//     // var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//     var password = "";
//     var character = "";
//     var crunch = true;
//     while (password.length < passwordLength) {
//       entity1 = Math.ceil(string.length * Math.random() * Math.random());
//       // entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//       // entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
//       hold = string.charAt(entity1);
//       hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
//       character += hold;
//       // character += numeric.charAt(entity2);
//       // character += punctuation.charAt(entity3);
//       password = character;
//     }
//     password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
//     return password.substr(0, len);
//   }
// } else if (charsSL == true) {
//   function password_generator(len) {
//     var length = (len) ? (len) : (10);
//     var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var numeric = '0123456789';
//     var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//     var password = "";
//     var character = "";
//     var crunch = true;
//     while (password.length < passwordLength) {
//       entity1 = Math.ceil(string.length * Math.random() * Math.random());
//       // entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//       entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
//       hold = string.charAt(entity1);
//       // hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
//       character += hold;
//       // character += numeric.charAt(entity2);
//       character += punctuation.charAt(entity3);
//       password = character;
//     }
//     password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
//     return password.substr(0, len);
//   }
// } else if (charsULSN == true) {
//   function password_generator(len) {
//     var length = (len) ? (len) : (10);
//     var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//     var numeric = '0123456789';
//     var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//     var password = "";
//     var character = "";
//     var crunch = true;
//     while (password.length < passwordLength) {
//       entity1 = Math.ceil(string.length * Math.random() * Math.random());
//       entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//       entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
//       hold = string.charAt(entity1);
//       hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
//       character += hold;
//       character += numeric.charAt(entity2);
//       character += punctuation.charAt(entity3);
//       password = character;
//     }
//     password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
//     return password.substr(0, len);
//   }
// }

console.log(password_generator());