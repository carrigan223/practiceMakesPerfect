const numberSyllables = (word) => word.match(/-/g).length + 1;


const test = numberSyllables("o-ver-ly");

console.log(test);