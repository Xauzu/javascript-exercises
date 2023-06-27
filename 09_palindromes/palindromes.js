const palindromes = (input) => {
    const ignore = [' ', '.', ',', '!']
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        // Moves the start and end index if the character at the index is a character to be ignored
        while (ignore.includes(input[start])) start++;
        while (ignore.includes(input[end])) end--;
        
        if (input[start].toLowerCase() !== input[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
