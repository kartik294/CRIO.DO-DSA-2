function MissingPositive(arr, n) {
  const set = new Set();
  for (let i = 1; i < n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return n + 1;
}
