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
    //implementing BFS algorithm to find the minimum distance
    while (queue.length) {
        //each iteration to get the value of row,column and distance
        let  [row,col,dist] = queue.shift();
        //update matrix if the value is greater than the distance
        if (matrix[row][col] > dist) {
            matrix[row][col] = dist;
        }
        //cheak all possible neighbor position
        dir.forEach(function(val) {
            let pixel = [row + val[0], col + val[1], dist + 1];
            //check if the cordinate is valid
            if (pixel[0] > -1 && pixel[0] < m && pixel[1] > -1 && pixel[1] < n) {
                
                if (matrix[pixel[0]][pixel[1]] === Infinity) {
                    //push to the queue
                    queue.push(pixel);
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
        }
        if((matrix.length ===m)&&(matrix[0].length ===n)){
            //compute the minimum distance from '1'
            resultantMatrix = minDistMatrix(matrix,m,n);
            //display the matrix
            displaymatrix(resultantMatrix);
            number_test--;
        }
        }

}
main();
