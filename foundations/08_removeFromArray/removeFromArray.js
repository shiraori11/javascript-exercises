const removeFromArray = function(arr, ...num) {
  function checkArrayItemToNum(item, num) {
    return item !== num;
  }
 
  for (const n of num) {
    arr = arr.filter(item => item !== n)
  }

  return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
