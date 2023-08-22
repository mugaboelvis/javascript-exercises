const repeatString = function (string, num) {
  let text = "";
  for (let i = 1; i <= num; i++) {
    text = text + string;
  }
  return text;
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
