const characters = ["a", "b", "c", "d", "e"];

//Using for, print elements in characters array
console.log("for loop: ");
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

//Using for/in, print elements in characters array
console.log("for/in loop: ");
for (const i in characters) {
  console.log(characters[i]);
}

//Using forEach(), print elements in characters array
console.log(".forEach(): ");
characters.forEach(function (character) {
  console.log(character);
});

//Using for/of, print elements in characters array
console.log("for/of loop: ");
for (let i of characters) {
  console.log(i);
}
