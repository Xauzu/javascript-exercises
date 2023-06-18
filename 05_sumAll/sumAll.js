const sumAll = function(start, end) {
    if (!(typeof start === "number") || !(typeof end === "number")) {
        return "ERROR";
    }

    // Reversed argument check
    if (start > end) {
        let temp = start;
        console.log(temp);
        start = end;
        console.log(start);
        end = temp;
        console.log(end);
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
