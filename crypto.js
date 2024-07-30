//write a function that creates a random number using crypto module
const crypto = require("crypto");

const getRandom = (digit) => {
  //crypto code
  const start = digit === 6 ? 100000 : 10000;
  const end = digit === 6 ? 999999 : 99999;
  return crypto.randomInt(start, end);
};
console.log(getRandom(6));

// const getrandom = (didgit) => {
//   return crypto.randomInt(100000, 999999);
// };
// console.log(getrandom(6));
