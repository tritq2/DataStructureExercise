//https://www.hackerrank.com/challenges/array-left-rotation
//Given an array of  integers and a number,d, 
//perform d left rotations on the array. 
//Then print the updated array as a single line of space-separated integers.
function processData(input) { 
    //Enter your code here 
    let input_ = input.split("\n");
    
    let param = input_[0].split(' ');
    let n = parseInt(param[0]);
    
    if(n<=1){
        process.stdout.write(input_[1]);
    }
    let d = parseInt(param[1]) % n;

    if(d == 0){
        process.stdout.write(input_[1]);
    }
    let arr = input_[1].split(' ');
    
    let arr1 = arr.splice(d);
    
    let output = arr1.concat(arr);

    process.stdout.write(output.join(' '));

} 