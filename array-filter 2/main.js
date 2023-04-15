const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

// function isEven(num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// }

const evenNumbers = numbers.filter(num => num % 2 === 0);

const overFive = numbers.filter(num => num > 5);

const startsWithE = names.filter(name => name[0] === 'E');

const haveD = names.filter(name => name.includes('d') || name.includes('D'));

// const evenNumbers = numbers.filter(number => {number > 5
// return number})
