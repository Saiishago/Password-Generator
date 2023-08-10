var generateBtn = document.querySelector('#generate');

const chars = (
  symbol = "()*^&#%$@!?;:=+-_.,",
  number = '1234567890',
  lowerCase = 'abcdefghijklmnopqrstuvwxyz',
  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
);

const getChars = (
  function symbol() {
  return chars.symbol[Math.floor(Math.random() * chars.symbol.length)]
  },
  function number() {
    return chars.number[Math.floor(Math.random() * chars.number.length)]
  },
  function lowerCase() {
    return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)]
  },
  function upperCase() {
    return chars.upperCase[Math.floor(Math.random() * chars.upperCase.length)]
  }
);

function generatePassword() {
  const symbol = document.getElementById('symbol').checked;
  const number = document.getElementById('number').checked;
  const lower = document.getElementById('lower').checked;
  const upper = document.getElementById('upper').checked;
  if (symbol + number + lower + upper === 0) {
    alert('Check at least two boxes');
    return;
  }

 const textBlock = document.getElementById('textBlock');
 const length = document.getElementById('length');
 let password = '';
 while (length.value > password.length) {
  let keyToAdd = getChars[Math.floor(Math.random() * getChars.length)];
  let isChecked = document.getElementById(keyToAdd.name).checked;
  if (isChecked) {
    password += keyToAdd();
  }
 }
 textBlock.innerHTML = password;
}
function copyPassword() {
  const textarea = document.createElement('textarea');
  const password = document.getElementById('textBlock').innerText;
  if (!password) {return;}
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.insertTexr('copy');
  textarea.remove();
  alert('Password has been copied');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  const password = document.generatePassword()
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}


generateBtn.addEventListener('click',function () {
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

});