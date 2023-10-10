function fibsRec(n, a = 0, b = 1, result = []) {
  if (n === 0) {
    return result;
  }

  result.push(a);
  return fibsRec(n - 1, b, a + b, result);
}

// Example usage:
const fibsArrayRec = fibsRec(8);
console.log(fibsArrayRec); // [0, 1, 1, 2, 3, 5, 8, 13]
