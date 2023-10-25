const numbers = [1, 2, 3, 4, 5, 6, 7, 9];

// Using map() to create a new array with nested arrays. The second element will be the current number * 2
const nestedArr = numbers.map((number) => [number, number * 2]);

// Using flat() to flatten the nested arrays

const flatArr = nestedArr.flat();

// Using flatMap() to create a new flattened array
const flatMappedArr = numbers.flatMap((number) => [number, number * 2]);

//Print nested array 
/* 
[
  [ 1, 2 ],  [ 2, 4 ],
  [ 3, 6 ],  [ 4, 8 ],
  [ 5, 10 ], [ 6, 12 ],
  [ 7, 14 ], [ 9, 18 ]
]
*/
console.log(nestedArr);

//Print flattened array
/*
[
  1,  2, 2,  4, 3,  6,
  4,  8, 5, 10, 6, 12,
  7, 14, 9, 18
]
*/
console.log(flatArr);

//Print flat mapped array
/*
[
  1,  2, 2,  4, 3,  6,
  4,  8, 5, 10, 6, 12,
  7, 14, 9, 18
]
*/

console.log(flatMappedArr);