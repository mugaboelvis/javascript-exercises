const reverseString = function (word) {
  return word.split("").reverse().join("");
  // OR
  //   let textArray = word.split("");
  //   let text = "";
  //   for (let i = textArray.length - 1; i >= 0; i--) {
  //     text += textArray[i];
  //   }
  //   return text;
};
console.log(reverseString("hello there"));
// Do not edit below this line
module.exports = reverseString;
