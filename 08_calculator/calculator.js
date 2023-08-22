const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multication = 1;
  for (let i = 0; i < array.length; i++) {
    multication *= array[i];
  }
  return multication;
};

const power = function (num, power) {
  let pwr = num;
  for (let i = 1; i < power; i++) {
    pwr = pwr * num;
  }
  return pwr;
};

const factorial = function (num) {
  let f = 1;
  let i = 1;
  while (i <= num) {
    f *= i;
    i++;
  }
  return f;
};

console.log(add(2, 6));
console.log(subtract(10, 4));
console.log(sum([1, 3, 5, 7, 9]));
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
console.log(power(4, 3));
console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
