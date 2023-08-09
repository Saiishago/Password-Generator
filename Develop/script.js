// Assignment Code
const generateBtn = document.querySelector('#generate');
var passwordLength = 10;
var password = '';

// Write password to the #password input
function writePassword() {
  var password = document.getElementById('password');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const chars = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
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