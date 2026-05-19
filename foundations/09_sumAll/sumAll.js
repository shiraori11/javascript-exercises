const sumAll = function(num1, num2) {
  let lowestNum;
  let highestNum;
  let totalSum = 0;
  
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return "ERROR";
  } else if (num1 < num2){
    lowestNum = num1;
    highestNum = num2;
  } else {
    lowestNum = num2;
    highestNum = num1;
  }

  for (lowestNum; lowestNum <= highestNum; lowestNum++) {
    totalSum += lowestNum;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
