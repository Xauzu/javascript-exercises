const removeFromArray = function(array, ...removal) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (!removal.includes(array[i])) {
            output.push(array[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
