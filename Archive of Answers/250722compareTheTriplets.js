//WARM UP - COMPARE THE TRIPLETS

let a = [5, 6, 7];
let b = [3, 6, 10];
let output = [0, 0];

for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    output[0]++;
  }
  if (a[i] < b[i]) {
    output[1]++;
  }
}
