// Create a new set with some initial values
const words = new Set(["bob", "john", "marry", "hilton", "bala"]);

// Add some more values ('rick', 'newton', 'bala') to the set
words.add("rick");
words.add("newton");
words.add("bala");

// Check if 'hilton' is in the set
const hasHilton = words.has("hilton");
// Get the size of the set
const arrSize = words.size;

// Delete 'rick' from the set
words.delete("rick");

// Convert the set to an array
const wordsArray = Array.from(words);

//Print the set
// Set {'bob', 'john', 'marry', 'hilton', 'bala', 'newton'}

console.log(words);
//Print the result to check if 'hilton' is in the set
// true
console.log(hasHilton);

//Print the size of the set
// 7
console.log(arrSize);

//Print the array
// ['bob', 'john', 'marry', 'hilton', 'bala', 'newton']
console.log(wordsArray);
