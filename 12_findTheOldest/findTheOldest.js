const findTheOldest = people => {
    const ordered = people.sort((a, b) => {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
  
        return last > next ? 1 : -1;
    });
    return ordered[ordered.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
