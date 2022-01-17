
function range(start, end, step) { 
  let result = [];
  if (start === undefined || end === undefined || step === undefined) return result;
  if (start > end) return result;
  if (step <= 0) return result;

  let i = start;
  while (i <= end) {
    // console.log(i);
    result.push(i);
    i += step;
  } 
  return result;
}


console.log(range(0,10,2)); // should print [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10,30,5)); // should print [ 10, 15, 20, 25, 30 ]
console.log(range(-5,2,3)); // should print [ -5, -2, 1 ]
console.log(range(10,1)); // should print []
console.log(range(10,5,1)); // should print []