const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length === 0){
    return 0;
  }
	return arr.reduce((accumulator, currentSum) => accumulator + currentSum);
};

const multiply = function(arr) {

  return arr.reduce((accumulator, currentProduct) => accumulator * currentProduct);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let factorialProduct = 1;
	for (let i = 0; i <= num; i++) {
	  if (i > 1) {
	    factorialProduct = factorialProduct * i;
	  }
	}

	return factorialProduct;
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
