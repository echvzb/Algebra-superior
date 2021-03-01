function getSubset(matrix, currentColI) {
    let subset = [];

    for (let i = 1; i < matrix.length; i++) {
        let tempRow = [];

        for (let j in matrix[i]) {
            if (j != currentColI) tempRow.push(matrix[i][j]);
        }
        subset.push(tempRow);
    }
    return subset;
}

function detByPermutation(det, cofactor = 1, sign = 1) {

    if (det.length === 1) return sign * cofactor * det[0][0];
    if (cofactor === 0) return 0;

    let result = 0;

    for (let j in det) {
        const
            subset = getSubset(det, j),
            tempSign = j % 2 === 0 ? 1 : -1;
        result += detByPermutation(subset, cofactor * det[0][j], sign * tempSign);
    }
    return result;
}

const det = [
    [2, 3, 1, -4, 2],
    [2, 3, 0, 2, -3],
    [-1, 5, 1, 2, -2],
    [4, 1, 2, 0, -3],
    [-4, 0, -2, 1, 2],
];

const result = detByPermutation(det);
console.log(result);
