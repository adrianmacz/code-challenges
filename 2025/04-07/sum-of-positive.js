// Description:
// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let pos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < pos.length; i++) {
    sum += pos[i];
  }
  return sum;
}

//prep
//p - any funny business? Are we only getting numbers? Pos and negative? No booleans?
//r - we are returning the sum of only the positive numbers
//console.log(positiveSum([1,-2,3,4,5]),13)
//console.log(positiveSum([-1,-2,-3,-4,-5]),0)
//console.log(positiveSum([-1,2,3,4,-5]),9)

//go through the array to check to see if there is any postive
//create a new of array of all the postive numbers
//let pos = []
//if there is a postive number push that element to the new array called pos
//get the sum of the new array pos
