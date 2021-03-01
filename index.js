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
<<<<<<< HEAD
	let subset = [];

	for (let i in matrix) {
		if (i != currentRowI) {
			let tempRow = [];
=======
  let subset = [];

  for (let i in matrix) {
    if (i != currentRowI) {
      let tempRow = [];
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe

      for (let j in matrix[i]) {
        if (j != currentColI) tempRow.push(matrix[i][j]);
      }

<<<<<<< HEAD
			subset.push(tempRow);
		}
	}
=======
      subset.push(tempRow);
    }
  }
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe

	return subset;
}

function searchZeros(matrix) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe

  let result = 0;

<<<<<<< HEAD
	if (!findZeros) return 0;
=======
  if (matrix.length == 2) {
    result = computeDeterminantTwoByTwo(matrix);
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe

    console.log(result, ' * ', constant, ' = ', result * constant);
    return result * constant;
  }
  const findZeros = searchZeros(matrix);

  if (!findZeros) return 0;

  const { isRow } = findZeros;
  let sign = findZeros.i % 2 == 0 ? 1 : -1;

<<<<<<< HEAD
	for (let i in matrix) {
		let
			colI = isRow ? i : findZeros.i,
			rowI = isRow ? findZeros.i : i;

		console.log({ rowI, colI, isRow });
=======
  for (let i in matrix) {
    let
      colI = isRow ? i : findZeros.i,
      rowI = isRow ? findZeros.i : i;

    console.log({ rowI, colI, isRow });
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe

    let subset = getSubset(matrix, rowI, colI);

<<<<<<< HEAD
		console.log(subset, matrix[rowI][colI] + ' * ' + constant, sign == 1 ? '+' : '-');

		result += computeDeterminantNByN(subset, constant * matrix[rowI][colI] * sign);
		sign *= -1;
	}
	console.log(result);
	return result;
}

const stMatrix = [
	[2, 1, 0, -1],
	[0, -1, 0, 3],
	[-2, 1, 1, -2],
	[3, 2, 0, 1]
];

const sndMatrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const trdMatrix = [
	[0, 3, 4, 3],
	[-3, -2, 1, 0],
	[4, 1, 0, 1],
	[-1, 2, 1, 0],
]

const frMatrix = [
	[1, 0],
	[0, 1],
]

const fifMatrix = [
	[2, 3, 1, -4, 2],
	[2, 3, 0, 2, -3],
	[-1, 5, 1, 2, -2],
	[4, 1, 2, 0, -3],
	[-4, 0, -2, 1, 2],
=======
    console.log(subset, matrix[rowI][colI] + ' * ' + constant, sign == 1 ? '+' : '-');

    result += computeDeterminantNByN(subset, constant * matrix[rowI][colI] * sign);
    sign *= -1;
  }
  console.log(result);
  return result;
}

const stMatrix = [
  [2, 1, 0, -1],
  [0, -1, 0, 3],
  [-2, 1, 1, -2],
  [3, 2, 0, 1]
];

const sndMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const trdMatrix = [
  [0, 3, 4, 3],
  [-3, -2, 1, 0],
  [4, 1, 0, 1],
  [-1, 2, 1, 0],
]

const frMatrix = [
  [1, 0],
  [0, 1],
]

const fifMatrix = [
  [2, 3, 1, -4, 2],
  [2, 3, 0, 2, -3],
  [-1, 5, 1, 2, -2],
  [4, 1, 2, 0, -3],
  [-4, 0, -2, 1, 2],
>>>>>>> 5377937cdad3e687c9d7126a747b5489701feffe
]

const result = computeDeterminantNByN(fifMatrix);