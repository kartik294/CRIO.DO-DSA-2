function validAnagram(s, t) {
  if (
    s === undefined ||
    t === undefined ||
    s.length !== t.length ||
    (s === undefined && t === undefined)
  ) {
    return false;
  }

  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    if (freq[t.charCodeAt(i) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }
  return true;
}
