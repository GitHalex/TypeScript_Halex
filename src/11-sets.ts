let mySet: Set<number> = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate, will be ignored
console.log(mySet); // Output: Set { 1, 2, 3 }

let otroSet: Set<string> = new Set(["apple", "banana", "orange"]);
console.log(otroSet); // Output: Set { 'apple', 'banana', 'orange' }
