# Type 'string[]' is not assignable to type 'string'
This repository demonstrates a common TypeScript error:  'Argument of type 'string[]' is not assignable to parameter of type 'string'. This occurs when a function expects a string argument, but an array of strings is passed instead.

## Bug
The `greeter` function expects a single string, but the `user` variable is an array of strings.  Calling `greeter(user)` results in a type error.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings or changing the `user` variable to a single string.  The provided solution demonstrates how to modify the function to handle both string and string[] inputs.
