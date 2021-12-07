"use strict"

function main(){

    let number_test = parseInt(prompt());
    let dimensions = prompt().split(" ");
    let m = parseInt(dimensions[0]);
    let n = parseInt(dimensions[1]);
    let matrix = new Array(m);

    for(let i=0;i<m;i++){
        matrix[i] = prompt().split(" ");
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            matrix[i][j] = parseInt(matrix[i][j]);
        }
    }

}

main();
