// Basic Recursion Example
function countdown(i){
    console.log(i);
    if (i > 1) countdown(i - 1);
}
  
countdown(10);

// Recursive Factorial Example
function factorial(x) {
    if (x === 1) return x;
    else return x * factorial(x - 1);
};
  
factorial(4);