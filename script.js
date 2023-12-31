// Array of special characters to be included in password
// Placed specialCharacters all on one line
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
// Placed lowerCasedCharacters all on one line
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
// Placed upperCasedCharacters all on one line
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {

  // empty array to store possible characters based on user criteria
  var possibleCharacters = [];

  // prompt for user to select password length
  var passwordLength = parseInt(prompt("Please ennter a password length from 8-128 characters):"));

  // check ensuring length of password is between 8-128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {

    // confirmation if the user would like lowercase characters in the password
      var includeLowerrcase = confirm("Would you like the password to include lowercase characters?");

    // confirmation if the user would like uppercase characters in the password      
      var includeUppercase = confirm("Would you like the password to include uppercase letters?");

    // confirmation if the user would like numeric characters in the password      
      var includeNumeric = confirm("Would you like the password to include numeric characters?");

    // confirmation if the user would like special characters in the password         
      var includeSpecial = confirm("Would you like the password to include special characters?");

      // check to ensure at least one character type has been selected
      if (includeLowerrcase || includeUppercase || includeNumeric || includeSpecial) {

        if (includeLowerrcase) {
          possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        }

        if (includeUppercase) {
          possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        }

        if (includeNumeric) {
          possibleCharacters = possibleCharacters.concat(numericCharacters);
        }

        if (includeSpecial) {
          possibleCharacters = possibleCharacters.concat(specialCharacters);
        }

        // return password based on options selected
        return {
          length: passwordLength,
          possibleCharacters: possibleCharacters
        };

        // if no character type selected, user must choose again
      } else {
        alert("You must select at least one character type. Try Again.");
        return getPasswordOptions();
      }

    // if user choise an invlaid character length, must try again
  } else {
    alert("The assword length is invalid. Please ensure the number selected is between 8 and 128.");
    return getPasswordOptions();
  }
}

// Function for getting a random element from an array
// Math.floor allows for a whole number, Math.random produces a random number
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var generatedPassword = '';

  // password generated randomly from the characters from the possibleCharacters array
  for (var i = 0; i < options.length; i++) {
    generatedPassword += getRandom(options.possibleCharacters);
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);