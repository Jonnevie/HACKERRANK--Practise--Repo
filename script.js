// WARM UP DIAGONAL DIFFERENCE

let arr = [[10,2,4,5],[4,5,6,10],[10,8,-12,5],[4,5,6,10]];
let n = arr.length;
let output = 0;
let primaryDiagonal = 0;
let secondaryDiagonal = 0;

function diagonalDifference(){
    for (let i=0; i<arr.length; i++){
   primaryDiagonal += (arr[i][i]);
   secondaryDiagonal += (arr[i][(n-1)-i]);
}
output = Math.abs(primaryDiagonal - secondaryDiagonal)
return output;
}

diagonalDifference()

