const palindromes = function (word) {
  /*
  [^...]: This is a character set negation. It matches any character that is not listed within the square brackets.
  a-z: This range specifies all lowercase letters from "a" to "z".
  0-9: This range specifies all digits from 0 to 9. 
  */

  let newWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = newWord.split("").reverse().join("");

  return newWord == reverse;
};

console.log(palindromes("racecar"));
console.log(palindromes("racecar!"));
console.log(palindromes("Racecar!"));
console.log(palindromes("A car, a man, a maraca."));
console.log(palindromes("Animal loots foliated detail of stool lamina."));
console.log(palindromes("ZZZZ car, a man, a maracaz."));
console.log(palindromes("rac3e3car"));
console.log(palindromes("r3ace3car"));
// Do not edit below this line
module.exports = palindromes;
