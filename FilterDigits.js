const filterDigitLength = (arr, digits) => arr.map((number) => number.toString()).filter((num) => num.length === digits).map((string) => string * 1)






const test = filterDigitLength([88, 232, 4, 9721, 555], 3);
console.log(test);