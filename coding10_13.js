const words = ['bob', 'john', 'marry', 'hilton', 'bala'];

// Using map() to capitalize the first letter of each word
const capitalWords = words.map((word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Using map() to create an array of word lengths
const wordLengths = words.map((word) => {
  return word.length;
});

// Using map() to create an array of objects with word and length properties

const wordObjectsArray = words.map((word) => {
  return { word: word, length: word.length };
});

//Print capitalized words 
// ['Bob', 'John', 'Marry', 'Hilton', 'Bala']

console.log(capitalWords);
//Print words length
// [3, 4, 5, 6, 4]
console.log(wordLengths);

//Print array of objects with word and length properties
// [{word: "bob", length: 3}, {word: "john", length: 4}, {word: "marry", length: 5}, {word: "hilton", length: 6}, {word: "bala", length: 4}]

console.log(wordObjectsArray);