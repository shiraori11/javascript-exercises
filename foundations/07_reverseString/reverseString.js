const reverseString = function(string) {
  reversedString = "";
  lengthOfString = string.length;
  for (let i = lengthOfString - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
