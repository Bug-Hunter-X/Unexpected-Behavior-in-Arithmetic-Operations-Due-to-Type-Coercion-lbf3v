function foo(a, b) {
  //Explicit type checking and error handling for non-numeric values
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

function bar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

try {
  console.log(bar('2', 3)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}
//This version of the code explicitly checks the types of the arguments before performing any operations.
//It throws an error if either argument is not a number, preventing unexpected behavior due to type coercion.