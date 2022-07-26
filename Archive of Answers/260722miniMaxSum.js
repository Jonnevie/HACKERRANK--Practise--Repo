//MINI-MAX SUM

let minSum = 0; 
let maxSum = 0;

const sortedArr = arr.sort((a,b)=> a-b);

for(i=0;i<arr.length-1; i++){
    minSum += (arr[i])
}
for(i=1;i<arr.length; i++){
    maxSum += (arr[i])
}

console.log(minSum, maxSum)