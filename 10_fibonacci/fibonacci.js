const fibonacci = series => {
    if (series < 0) return "OOPS";
    if (series <= 2) return 1;
    
    let num1 = 1;
    let num2 = 1;

    let currentSeries = 3;
    while(currentSeries <= series) {
        const newNum = num1 + num2;
        num1 = num2;
        num2 = newNum;
        currentSeries++;
    }
    return num2;
}

// Do not edit below this line
module.exports = fibonacci;
