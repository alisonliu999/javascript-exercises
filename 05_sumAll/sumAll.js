const sumAll = function (x, y) {
    if ((x > 0 && y > 0) && (typeof x === 'number' && typeof y === 'number')) {
        var startx = x;
        var starty = y;
        var sum = 0;
        if (x < y) {
            for (var i = startx; i <= starty; i++) {
                sum += i;
            }
            return sum;
        } else if (x > y) {
            for (var i = starty; i <= startx; i++) {
                sum += i;
            }
            return sum;
        }
    } else {
        return 'ERROR'
     }
    };

// Do not edit below this line
module.exports = sumAll;
