const nameShuffle = (firstLast) => {
  const first = firstLast.replace(/ .*/,'');
  const last = firstLast.split(" ").pop();
  return last + ' ' + first;
};

const test = nameShuffle("Ebony Greene");

console.log(test);
