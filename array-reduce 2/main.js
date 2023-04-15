const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// Use the reduce method to sum all the numbers in the numbers array
const sum = numbers.reduce((prev, current) => prev + current, 0);
// console.log("🚀 ~ file: main.js:22 ~ sum:", sum);
const product = numbers.reduce((prev, current) => prev * current, 1);
// console.log("🚀 ~ file: main.js:24 ~ product:", product);

const balance = account.reduce((prev, current) => {
  if (current.type === 'deposit') {
    return prev + current.amount;
  } else {
    return prev - current.amount;
  }
}, 0);
// console.log("🚀 ~ file: main.js:27 ~ balance ~ balance:", balance);

const composite = traits.reduce((prev, current) => {
  return Object.assign(prev, current);
}, {});
// console.log("🚀 ~ file: main.js:38 ~ composite ~ composite:", composite);
// Use the reduce method to sum all the deposits in the account array
