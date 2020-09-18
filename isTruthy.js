const isTruthy = (val) => val ? 1 : 0 ;

const test = isTruthy(function() {});

console.log(test);