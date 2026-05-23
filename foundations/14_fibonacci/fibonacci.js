const fibonacci = function(num) {
  
  if (parseInt(num) === 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
  
  let currentFibo = 1;
  let previousNum  = 0;
  for (let i = 1; i < num; i++) {
    throwawayNum = currentFibo;
    currentFibo = previousNum + currentFibo;
    previousNum = throwawayNum;
    console.log(currentFibo);
  }

  return currentFibo;
};

// Do not edit below this line
module.exports = fibonacci;


// currentSum = 1 1 2 3 5 8 13 
// previous = 1 1 2 3 5 8
