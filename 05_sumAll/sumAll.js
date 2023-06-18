const sumAll = function(start, end) {
    if (!(start instanceof Number) || !(end instanceof Number)) {
        return "ERROR";
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
