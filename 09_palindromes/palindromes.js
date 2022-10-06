const palindromes = function (str) {
    const lowerString = str.toLowerCase();
    const string = lowerString.replace(/[^\w]|_/g,"");
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
