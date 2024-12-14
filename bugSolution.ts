function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane User", "Peter Jones"];

console.log(greeter(user)); //This will now work correctly

let singleUser = "Jane User";
console.log(greeter(singleUser)); //This will also work correctly