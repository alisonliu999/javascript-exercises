const reverseString = function(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;

};
reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
