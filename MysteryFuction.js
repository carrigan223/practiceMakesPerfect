const mysteryFunc = (num) =>   num.toString().split('').reduce((a,b) => a * b);
    


const test1 = mysteryFunc(152);//10
const test2 = mysteryFunc(5511);//25

console.log(test1,test2);
