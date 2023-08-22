const sumAll = function (startNumb, endNumb) {
  let sum = 0;
  if (!Number.isInteger(startNumb) || !Number.isInteger(endNumb))
    return "ERROR";
  if (startNumb > 0 && endNumb > 0 && startNumb < endNumb) {
    for (let i = startNumb; i <= endNumb; i++) {
      sum += i;
    }
  } else if (startNumb > 0 && endNumb > 0 && startNumb > endNumb) {
    for (let i = startNumb; i >= endNumb; i--) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return `The sum of numbers from ${startNumb} to ${endNumb} is ${sum}`;
};
console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));
// Do not edit below this line
module.exports = sumAll;
