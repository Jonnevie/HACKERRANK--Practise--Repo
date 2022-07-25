// WARM UP DIAGONAL DIFFERENCE

function diagonalDifference() {
  let n = arr.length;
  let output = 0;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][n - 1 - i];
  }
  output = Math.abs(primaryDiagonal - secondaryDiagonal);
  return output;
}

diagonalDifference();
