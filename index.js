function diagonalOperation(matrix, isNegative = false) {
	let
		colIteratorStep = isNegative ? -1 : 1,
		currentColI = isNegative ? 1 : 0,
		result = 1;

	for (let i in matrix) {
		result *= matrix[i][currentColI];
		currentColI += colIteratorStep;
	}

	return result;
}

function computeDeterminantTwoByTwo(matrix) {
	return diagonalOperation(matrix) - diagonalOperation(matrix, true);
}

function getSubset(matrix, currentRowI, currentColI) {
  let subset = [];

  for (let i in matrix) {
    if (i != currentRowI) {
      let tempRow = [];

      for (let j in matrix[i]) {
        if (j != currentColI) tempRow.push(matrix[i][j]);
      }

      subset.push(tempRow);
    }
  }
  
  return subset;
}

function searchZeros(matrix) {
  let data = { count: 0, isRow: true, i: 0 };
  const err = 'The matrix is not N by N';

  function setCount(count, i, isRow) {
    if (count === matrix.length) {
      console.error(err);
      return null;
    }
    return { count, isRow, i };
  }

  for (let i in matrix) {
    let numZeros = matrix[i].reduce((count, num) => num === 0 ? count + 1 : count, 0);

    if (numZeros > data.count) data = setCount(numZeros, i, true);
    if (!data || data.count === matrix.length - 1) return data;
  }

  for (let i in matrix) {
    let numZeros = 0;

    for (let j in matrix) {
      numZeros += matrix[j][i] === 0 ? 1 : 0;
    }

    if (numZeros > data.count) data = setCount(numZeros, i, false);
    if (!data || data.count === matrix.length - 1) return data;
  }
  return data;
}

function computeDeterminantNByN(matrix, constant = 1) {
  if (constant === 0) return 0;

  let result = 0;

  if (matrix.length == 2) {
    result = computeDeterminantTwoByTwo(matrix);

    console.log(result, ' * ', constant, ' = ', result * constant);
    return result * constant;
  }
  const findZeros = searchZeros(matrix);

  if (!findZeros) return 0;

  const { isRow } = findZeros;
  let sign = findZeros.i % 2 == 0 ? 1 : -1;


  for (let i in matrix) {
    let
      colI = isRow ? i : findZeros.i,
      rowI = isRow ? findZeros.i : i;

    console.log({ rowI, colI, isRow });

    let subset = getSubset(matrix, rowI, colI);

    console.log(subset, matrix[rowI][colI] + ' * ' + constant, sign == 1 ? '+' : '-');

    result += computeDeterminantNByN(subset, constant * matrix[rowI][colI] * sign);
    sign *= -1;
  }
  console.log(result);
  return result;
}
const det = [
  [2, 3, 1, -4, 2],
  [2, 3, 0, 2, -3],
  [-1, 5, 1, 2, -2],
  [4, 1, 2, 0, -3],
  [-4, 0, -2, 1, 2],
]

const result = computeDeterminantNByN(det);
