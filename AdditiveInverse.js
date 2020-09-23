const additiveInverse = (arr) => arr.map((num) => {
    if (Math.sign(num) === 1) {
        return num - (num * 2);
    } else {
         return (num * -1);
        
    }
});

const test = [2, -3, 4, -6];
const test2 = [-5, -6];

console.log(additiveInverse(test),additiveInverse(test2));