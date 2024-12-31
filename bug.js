function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

//The bug is that the function bar does not handle the case when the arguments are not numbers, it will still return a value.
//The function bar is called with 2 and 3, it will return 10.
//If we call bar('2',3) , the expected behavior is NaN,but it returns '23'.

console.log(bar('2',3));//Output:23