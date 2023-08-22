const fibonacci = function (num) {
  if (num <= 0) return "OOPS";
  let i, f, n1, n2;
  i = 1;
  f = 0;
  n1 = 1;
  n2 = 1;
  while (i <= num) {
    f = n1;
    n1 = n2;
    n2 = f + n1;

    i++;
  }
  return f;
};

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
