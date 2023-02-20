const checkLength = (string, number) => string.length <= number;
checkLength('Привет', 10);

const checkPalindrome = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; --i) {
    reverseString += string[i];
  }
  return string === reverseString;
}
checkPalindrome('довОд');

const checkNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const currentSymbol = parseInt(string[i], 10);
    if (!isNaN(currentSymbol)) {
      result += currentSymbol;
    }
  }
  return string.length ? NaN : parseInt(result, 10);

};
checkNumber('а я томат');

const padStart = (string, minLength, addSymbols) => {
  if (string.length > minLength) {
    return string;
  }
  const symbolDifference = minLength - string.length;
  if (addSymbols.length > symbolDifference) {
    return addSymbols.substring(0, symbolDifference) + string;
  }
  let bonusString = '';
  while (bonusString.length < symbolDifference) {
    if (bonusString.length + addSymbols.length > symbolDifference) {
      bonusString = addSymbols.substring(0, (bonusString.length + addSymbols.length) - symbolDifference) + bonusString;
    } else {
      bonusString += addSymbols;
    }
  }
  return bonusString + string;
};
padStart('q', 4, 'we');
