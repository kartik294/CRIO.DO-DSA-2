function incrementNumber(N, A) {
  let result = [];
  let carry = 1; // Initialize carry to 1

  for (let i = N - 1; i >= 0; i--) {
    let sum = A[i] + carry;

    if (sum >= 10) {
      carry = 1;
      result.unshift(sum - 10);
    } else {
      carry = 0;
      result.unshift(sum);
    }
  }

  // After the loop, if there is still a carry, add it to the result
  if (carry === 1) {
    result.unshift(1);
  }

  return result;
}
//leetcode
var plsuOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits = 0;
    }
  }
};
