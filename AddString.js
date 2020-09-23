const greetPeople = (names) => names.map((name) => "Hello " + name).join(', ');

const test = greetPeople(["Andrew", "Chelsea"]);
const test2 =  greetPeople([]);

console.log(test, test2);