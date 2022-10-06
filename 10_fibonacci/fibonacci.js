const fibonacci = function (num) {
    if (num < 0) return "OOPS";
    let a = 0;
    let b = 1;
    let temp;

    if ( num == 1 || num == 2) return b;

        for (let i = 2; i <= num; ++i) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return temp;
};
// Do not edit below this line
module.exports = fibonacci;
