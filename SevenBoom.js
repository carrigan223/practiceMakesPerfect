
const sevenBoom = (arr) => {
    const numString = arr.toString();
    const sevenCheck = numString.includes('7');
    if (sevenCheck) {
        return "Boom!"
    } else {
        return "there is no 7 in the array"
    }
};


const test = sevenBoom([2, 6, 7, 9, 3])
const test2 = sevenBoom([33, 68, 400, 5])
const test3 = sevenBoom([86, 48, 100, 66])
const test4 = sevenBoom([76, 55, 44, 32])
const test5 = sevenBoom([35, 4, 9, 37])

console.log(test, test2, test3, test4)