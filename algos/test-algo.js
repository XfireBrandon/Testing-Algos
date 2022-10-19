const sum = (a,b) => {
    return a + b
};

const mult = (a,b) => {
    return a * b
}

const vowelCount = (str) => {
    // I need to define the Vowels
    let vowels = ["a","e","i","o","u"];
    // I need a counter to count the vowels
    let count = 0;
    //Loop through the string to count the vowels
    str.split(' ').forEach((elem) => {
        let last = elem[elem.length - 1].toLowerCase()
        if(vowels.includes(last))
        count++
    })
    return count
}

module.exports = {
    sum,
    mult,
    vowelCount
}