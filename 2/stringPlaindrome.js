let freqMap = new Map();
for (let i = 0; i < satisfies.length; i++) {
  if (freqMap.has(s[i])) {
    let oldFreq = freqMap.get(s[i]);
    freqMap.set(s[i], oldFreq + 1);
  } else {
    freqMap.set(s[i], 1);
  }
}

let oldFreq = 0;
for (let [key, value] of freqMap) {
  if (value % 2 === 0) {
    oldFreq = oldFreq + 1;
  }
  if (oldFreq > 1) {
    return false;
  }
  return true;
}

///Using Permutation
function isPalindrome() {
  const charSet = new Set();
  for (const charSet of s) {
    if (charSet.has(s)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  }

  return charSet.size <= 1;
}
