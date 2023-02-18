function solution(sequence) {
  let removed = false;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (removed) {
        return false;
      }

      if (i === 0 || sequence[i - 1] < sequence[i + 1]) {
        sequence.splice(i, 1);
      } else {
        sequence.splice(i + 1, 1);
      }
      removed = true;
      i = -1;
    }
  }
  return true;
}

const sequence1 = [1, 3, 2, 1];
const sequence2 = [1, 3, 2];
const sequence3 = [3, 6, 5, 8, 10, 20, 15];

solution(sequence1);

solution(sequence2);

solution(sequence3);
