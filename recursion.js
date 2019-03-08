// Basic Recursion Example
function countdown(i){
    console.log(i);
    if (i > 1) countdown(i - 1);
}
  
countdown(10);