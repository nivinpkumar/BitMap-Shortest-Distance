"use strict"
const prompt = require('prompt-sync')({sigint:true});

// A function to find the minimum distance between the pixel '1' and '0'
var minDistMatrix = function(matrix,m,n) {
        
    let queue = [];        

    for (let i = 0;i < m; i++) { 
        for ( let j = 0;j < n; j++) {   
            if (matrix[i][j] === 1) {
                //pushing all the bit's with '1' into the queue
                queue.push([i, j, 0]);
            } else {
                //storing all other bit's as infinity
                matrix[i][j] = Infinity;
            }  
        } 
    }
    //all possible direcition that can be traversed
    let dir = [[-1,0],[1,0],[0,-1],[0,1]];
    
    while (queue.length) {
        let  [row,col,dist] = queue.shift();
        
        if (matrix[row][col] > dist) {
            matrix[row][col] = dist;
        }
        
        dir.forEach(function(d) {
            let next = [row + d[0], col + d[1], dist + 1];
            if (next[0] > -1 && next[0] < m && next[1] > -1 && next[1] < n) {
                
                if (matrix[next[0]][next[1]] === Infinity) {
                    //console.log("index "+next);
                    queue.push(next);
                }
            }
        });
    }
    return matrix;
};
// A function to display the matrix
function displaymatrix(matrix){
    for(let i=0;i<matrix.length;i++){
        console.log(matrix[i]);
    }
}

function main(){
    // get number of test cases
    let number_test = parseInt(prompt());
    let dimensions;
    let m;
    let n;
    while(number_test>0){
        // get parameters for matrix
        dimensions = prompt().split(" ");
        m = parseInt(dimensions[0]);
        n = parseInt(dimensions[1]);
        let matrix = new Array(m);
        let resultantMatrix;
        //getting the user input matrix
        for(let i=0;i<m;i++){
            matrix[i] = prompt().split(" ");
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                // converting the string to number
                matrix[i][j] = parseInt(matrix[i][j]);
            }
        }
        if(matrix.length ===m){
            //checking if the matrix is valid
            for(let i=0;i<matrix.length;i++){
                if(matrix[i].length !=n){
                    console.log("Not valid entry");
                    number_test--;
                    continue;
                }
            }
        }else{
            //compute the minimum distance from '1'
            resultantMatrix = minDistMatrix(matrix,m,n);
            //display the matrix
            displaymatrix(resultantMatrix);
            number_test--;
        }
        }

}

main();
