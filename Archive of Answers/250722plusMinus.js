// PLUS MINUS

let arr = [-4, 3, -9, 0, 4, 1];
let n = arr.length;

const negNums = arr.filter((num)=> num < 0);
const posNums = arr.filter((num)=> num > 0);
const zeroNums = arr.filter((num)=> num == 0);

console.log((posNums.length/n).toFixed(6))
console.log((negNums.length/n).toFixed(6))
console.log((zeroNums.length/n).toFixed(6))
