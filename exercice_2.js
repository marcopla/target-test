function generateFibonacci(n) {
  let a = 0,
    b = 1;
  let fibonacciSequence = [];

  for (let i = 0; i < n; i++) {
    fibonacciSequence.push(a);

    [a, b] = [b, a + b];
  }

  return fibonacciSequence;
}

// Examplo
const n = 8;
console.log(generateFibonacci(n)); // [0, 1, 1, 2, 3, 5, 8, 13]
