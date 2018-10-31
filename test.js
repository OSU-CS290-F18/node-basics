console.log("Hello world");

console.log("== process.argv:", process.argv);

console.log("== process.env.USER:", process.env.USER);
console.log("== process.env.VARIABLENAME:", process.env.VARIABLENAME);

console.log("== __filename:", __filename);
console.log("== __dirname:", __dirname);

function foo(arg) {
  console.log("== foo's argument:", arg);
}

foo("cat");

var circumference = require('./circumference');
console.log("== circumference(5):", circumference(5));
console.log("== circumference(8):", circumference(8));

var circle = require('./circle');
console.log("== circle.circumference(5):", circle.circumference(5));
console.log("== circle.area(5):", circle.area(5));
