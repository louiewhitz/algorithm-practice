var solution = document.createElement('sol1');

var twoSum = function (nums, target) {
  var sum = 0;
  var finalArr = [];
  var current = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = nums[current] + nums[i];
    if (sum === target && current !== i) {
      finalArr.push(current, i);
      return finalArr;
    } else if (current === nums.length) {
      return;
    } else if (i === nums.length - 1) {
      i = 0;
      current++;
    }
  }
  return finalArr;
};
var input1 = [2, 7, 11, 15];
var target1 = 9;
var result1 = twoSum(input1, target1);

var input2 = [3, 2, 4];
var target2 = 6;
var result2 = twoSum(input2, target2);

var input3 = [3, 3];
var target3 = 6;
var result3 = twoSum(input3, target3);

solution.innerHTML = 'Result 1: ' + result1 + '<br>' + 'Result 2: ' + result2 + '<br>' + 'Result 3: ' + result3;
