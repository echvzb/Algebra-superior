
function genMatrixNbyN(n = 1) {
    let matrix = [];

    for (let i = 1; i <= n; i++) {
        let tempRow = [];
        for (let j = 1; j <= n; j++) {
            tempRow.push(`a${i},${j}`);
        }
        matrix.push(tempRow)
    }

    return matrix;
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

function permutation(matrix, cofactor = '', sign = 1) {
    
    if(matrix.length === 1) return (sign === 1 ? '' : '-') + cofactor + matrix[0][0];

    let combinations = [];

    for (let j in matrix) {
        const subset = getSubset(matrix, 0, j);
        const tempSign = j % 2 === 0 ? 1 : -1;

        // console.log({subset, currElem: matrix[0][j], cofactor, sign: tempSign === 1 ? '+' : '-' })
        combinations.push(permutation(subset, cofactor + matrix[0][j], sign * tempSign));
    }

    return combinations;
}

const matrix = genMatrixNbyN(3)
console.log(permutation(matrix))
console.log(matrix)