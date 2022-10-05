const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
  }
};

const multiply = function(array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x < 0) {
    return -1;
  } else if (x === 0 || x === 1) {
    return 1;
  } else {
    for (var i = x - 1; i >= 1; i--) {
      x *= i;
    }
    return x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
