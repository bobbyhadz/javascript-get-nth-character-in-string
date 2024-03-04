// EXAMPLE 1 - Get the Nth Character of a String in JavaScript

const str = 'bobbyhadz.com';

// ✅ Using charAt
console.log(str.charAt(0)); // 👉️ "b"
console.log(str.charAt(1)); // 👉️ "o"
console.log(str.charAt(2)); // 👉️ "b"

// ✅ Counting backwards
console.log(str.charAt(str.length - 1)); // 👉️ "m"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Nth Character of a String using bracket notation

// const str = 'bobbyhadz.com';

// // ✅ Using bracket notation
// console.log(str[0]); // 👉️ "b"
// console.log(str[1]); // 👉️ "o"
// console.log(str[2]); // 👉️ "b"

// // ✅ Count backwards
// console.log(str[str.length - 1]); // 👉️ "m"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Nth Character of a String using String.at()

// const str = 'bobbyhadz.com';

// console.log(str.at(0)); // 👉️ b
// console.log(str.at(1)); // 👉️ o

// // ✅ count backward
// console.log(str.at(-1)); // 👉️ m
// console.log(str.at(-2)); // 👉️ o
// console.log(str.at(-3)); // 👉️ c
