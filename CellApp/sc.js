var nextGeneration = function (matrix) {
    var newMatrix = new Array(matrix.length);

    for (var i = 0; i < matrix.length; i++) {
        newMatrix[i] = new Array(matrix[i].length);
    }

    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            var neighbours = 0;

            for (var x = -1; x < 2; x++){
                for (var y = -1; y < 2; y++){
                    if (x === 0 && y === 0) continue;
                    if ((x + i >= 0 && x + i < matrix.length)
                        && (y + j >= 0 && y + j < matrix[i].length)){
                        neighbours += matrix[i+x][j+y];
                    }
                }
            }
            if ((matrix[i][j] === 1) && (neighbours < 2)) newMatrix[i][j] = 0;
            else if ((matrix[i][j] === 1) && (neighbours > 3)) newMatrix[i][j] = 0;
            else if ((matrix[i][j] === 0) && (neighbours === 3)) newMatrix[i][j] = 1;
            else newMatrix[i][j] = matrix[i][j]

        }
    }

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = newMatrix[i][j];
        }
    }

    return {matr1 : matrix};
};