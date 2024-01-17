function setMatrixZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // check if the first row has zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Mark zeroes on the first row and col based on other elements
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // Set elements to zero based on marks in the first row and column
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        // Fix the condition here
        matrix[row][col] = 0; // Fix the assignment here
      }
    }
  }

  // Set first row to zeros if required
  if (firstRowHasZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }
  return matrix;
}
