// Exercise 1 : Print Full Name

function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

// Exercise 2 : Keys And Values

function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map((key) => obj[key]);

  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

// Exercise 3 : Counter Class

/*

An instance of the Counter class named counterOne is created using new Counter(). The count property of counterOne is initialized to 0.

counterOne.increment() is called twice, increasing the count property to 2.

counterTwo is assigned the reference to counterOne. Both counterOne and counterTwo now refer to the same instance of the Counter class.

counterTwo.increment() is called, which increments the count property of the shared instance to 3.

Finally, console.log(counterOne.count) logs the value of the count property of counterOne.

The expected output will be:  3

Both counterOne and counterTwo point to the same instance of the Counter class, so any changes made to one of them affect the other. In this case, both counterOne and counterTwo have their count property incremented three times in total.

*/
