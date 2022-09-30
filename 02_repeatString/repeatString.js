const times = Math.floor(Math.random()*1000);
    function repeatString(string, times) {
        if (times > 0) {
            return string.repeat(times);
        } else if (times == 0) {
            return "";
        } else {
            return "ERROR";
        }
    }
    repeatString("hey",);

// Do not edit below this line
module.exports = repeatString;
