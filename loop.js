for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++;
    }
  }
  return count;
}

  
