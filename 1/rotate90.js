function rotateMatrix(n, matrix) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  matrix[i].reverse();
  for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(" "));
  }
}
