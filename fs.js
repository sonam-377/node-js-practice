//write a function to read the content of file
// using fs module

//result : helllooo this is sonam from hello.txt

const fs = require("fs");
fs.readFile("hello.txt", "UTF-8", (err, data) => {
  console.log(data);
});
