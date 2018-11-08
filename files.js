var fs = require('fs');

var data = null;
fs.readFile('test.js', 'utf-8', function (err, contents) {
  if (err) {
    throw err;
  }
  console.log(contents);
  data = contents;
});

console.log("======= This comes after readFile()");

var fileContents = fs.readFileSync('test.js', 'utf-8');
console.log(fileContents);

fs.writeFile(
  'writtenFile.txt',
  "This is what will be written into the file.\n",
  'utf-8',
  function (err) {
    if (err) {
      throw err;
    }
    console.log("== File successfully written");
  }
);
