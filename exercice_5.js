function invertString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}

let exampleString = 'Olá, mundo!';
console.log('String original:', exampleString);
console.log('String invertida:', invertString(exampleString));
