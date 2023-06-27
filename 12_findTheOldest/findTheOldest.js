const findTheOldest = people => {
    const ordered = people.sort((a, b) => {
        let aDeath = a.yearOfDeath;
        let bDeath = b.yearOfDeath;

        if (!aDeath) aDeath = (new Date()).getFullYear();
        if (!bDeath) bDeath = (new Date()).getFullYear();

        const last = aDeath - a.yearOfBirth;
        const next = bDeath - b.yearOfBirth;
  
        return last > next ? 1 : -1;
    });
    return ordered[ordered.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
