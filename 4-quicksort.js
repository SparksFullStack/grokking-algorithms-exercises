// First Example
function sum(arr) {
    let total = 0;
    let currentVal = arr[0];
    total += currentVal;
  
    if (!arr[0]) return 0;
    else {
      arr.shift();
      return total += sum(arr);
    }
}