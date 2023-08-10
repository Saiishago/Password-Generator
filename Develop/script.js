// Assignment Code
const generateBtn = document.querySelector('#generate');
var passwordLength = 10;
var password = '';
var event = Event
var textAreaEl = document.querySelector('#textarea');
var clearEl = document.querySelector('#clear');

// Write password to the #password input
function writePassword(event) {
  var password = document.getElementById('password');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
function writePassword() {
  var password = document.getElementById('password');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const chars = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
}

const getChars = [
  function upperCase() {
    return chars.upperCase[Math.floor(Math.random() * chars.upperCase.length)];
  },
  function lowerCase() {
    return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)];
  },
  function number() {
    return chars.number[Math.floor(Math.random() * chars.number.length)];
  },
  function symbol() {
    return chars.symbol[Math.floor(Math.random() * chars.symbol.length)];
  }
];

const upper = document.getElementById("upperCase");
const lower = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
if (upper + lower + number + symbol === 0) {
  alert('Check at least two boxes');

}

function generatePassword() {
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upper + lower + number + symbol === 0) {
    alert('Check at least two boxes');
  }
  const passwordBox = document.getElementById('Your Secure Password');
  const length = document.getElementById("length");
  let password = "";
  while (length.value > password.length) {
    let keyToAdd = getChars[Math.floor(Math.random() * getChars.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if (isChecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}




function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 16) + 46);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 22) + 50);
}
function getRandomSymbol() {
  const numbers = '1234567890';
  return numbers[Math.floor(Math.random() * numbers.length)];
}

Math.floor(Math.random() * chars.passwordLength)

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.passwordLength);
  
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener('click', function (event) {
  // Access value of pressed key with key property
  var key = event.chars.toLowerCase();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

generateBtn.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});




generateBtn.addEventListener('click', function() {
  insertText = password
  writePassword();
})

generateBtn.addEventListener("click", () => {
  const length = passwordLength.value;
  const value = generatePassword(length);
});
function generatePassword(number, length) {
  let generatedPassword = "";
  let variationsCount = [number].length;
  for (let i = 0; i < length; i += variationsCount) {
    if (numbers) {
      generatedPassword += getRandomNumber();
    }
    if (upperCase) {
      generatedPassword += getRandomUpperCase();
    }
    if (lowerCase) {
      generatedPassword += getRandomLower();
    }
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
document.addEventListener('load something', () => {
  passwordLength.valueOf = 10;
  passwordLength.innerText = "10";
  let onLoadLength = passLength.value;
  let onLoadNumbers = includeNumbers.checked;
  result.value = generatePassword(onLoadNumbers, onLoadLength);
});