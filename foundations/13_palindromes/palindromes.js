const palindromes = function (text) {
  let cleanText = text.replace(".", "").replace("!", "").toLowerCase();
  cleanText = cleanText.split(" ").join("");
  cleanText = cleanText.split(",").join("");
  console.log(cleanText);
  let counterForText = cleanText.length - 1;

  for (let c = 0; c < cleanText.length; c++) {
    if (cleanText[c] !== cleanText[counterForText]) {
      return false;
    }
    counterForText--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
