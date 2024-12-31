# Unexpected Behavior in JavaScript Arithmetic Operations

This repository demonstrates a common JavaScript bug caused by type coercion in arithmetic operations.  The `bar` function unintentionally concatenates strings instead of performing numerical addition when provided string arguments. 

## Bug Description

The `foo` function performs simple addition. The `bar` function calls `foo` and doubles the result. The bug occurs when non-numeric arguments are passed to `bar`. Instead of throwing an error or returning `NaN` (Not a Number) as expected, JavaScript's type coercion leads to string concatenation.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`
3. Run the code using a JavaScript environment (e.g., Node.js).
4. Observe the unexpected output when calling `bar` with mixed data types.