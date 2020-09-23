const findSmallestNum = (arr) => arr.sort((a,b) => b-a).pop();

const test = [34, 15, 88, 2];
const test2 = [34, -345, -1, 100];
const test3 = [7, 7, 7];
const test4 = [0.4356, 0.8795, 0.5435, -0.9999];

console.log(findSmallestNum(test),findSmallestNum(test2),findSmallestNum(test3),findSmallestNum(test4));