
function solution(year) {
  let century = null;
  if (year % 100 !== 0) {
    const thiscentury = year - (year % 100) + 100;
    century = thiscentury / 100;
  } else {
    century = year / 100;
  }
  return century;
}

solution(1905);
