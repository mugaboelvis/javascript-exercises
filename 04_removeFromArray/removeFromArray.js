const removeFromArray = function (array, ...elements) {
  return array.filter((item) => !elements.includes(item));
};
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
