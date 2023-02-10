function solution(statues) {
  var max = Math.max(...statues);
  var min = Math.min(...statues);
  var arr = [];
  while (min < max + 1) {
    arr.push(min);
    min++;
  }
  return arr.length - statues.length;
}

solution([6, 2, 3, 8]);
