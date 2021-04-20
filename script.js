// Assignment Code
var generateBtn = document.querySelector("#generate");

function password(numChar) {
  if (isNaN(numChar)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(numChar) < 8) {
    alert("Your password must be at least 8 characters.");
    return false;
  } else if (parseInt(numChar) >= 128) {
    alert("Your password must be less than 128 characters.");
    return false;
  }
  return true;
}

function random(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function generatePassword() {
  var numChar = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = password(numChar);
  if (passwordValid) {
    var hasspecialChar = confirm(
      "Click OK to confirm special characters."
    );
    var hasNumbers = confirm("Click OK to confirm adding numeric characters.");
    var hasLowerCase = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var hasUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  
  if (
    [hasspecialChar, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  )
    var characters = [];

  var finalCharacters = [];

  if (hasspecialChar) {
    characters = characters.concat(specialChar);
    finalCharacters.push(
      specialChar[Math.floor(Math.random() * specialChar.length)]
    );
  }
  if (hasNumbers) {
    characters = characters.concat(numChar);
    finalCharacters.push(
      numChar[Math.floor(Math.random() * numChar.length)]
    );
  }
  if (hasLowerCase) {
    characters = characters.concat(lowerCaseChar);
    finalCharacters.push(
      lowerCaseChar[
      Math.floor(Math.random() * lowerCaseChar.length)
      ]
    );
  }
  if (hasUpperCase) {
    characters = characters.concat(upperCaseChar);
    finalCharacters.push(
      upperCaseChar[
      Math.floor(Math.random() * upperCaseChar.length)
      ]
    );
  }
  var randomChar = [];
  for (var i = 0; i < numChar; i++) {
    var index = Math.floor(Math.random() * characters.length);
    randomChar.push(characters[index]);
  }
  var newChar = {};

  while (finalCharacters.length > 0) {
    var char1 = Math.floor(Math.random() * randomChar.length);
    if (!newChar[char1]) {
      randomChar[char1] = finalCharacters.pop();
      newChar[char1] = true;
    }
  }
  return randomChar.join("");
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialChar = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
