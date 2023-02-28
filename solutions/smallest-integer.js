
function findSmallestInt(args) {
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

findSmallestInt([78, 56, 232, 12, 8]);
findSmallestInt([78, 56, 232, 12, 18]);
findSmallestInt([78, 56, 232, 412, 228]);
findSmallestInt([78, 56, 232, 12, 0]);
