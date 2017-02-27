//https://www.hackerrank.com/challenges/crush
//You are given a list of size N, initialized with zeroes.
//You have to perform M operations on the list and output the maximum of final values of all the N elements in the list.
//For every operation, you are given three integers a, b
//and k and you have to add value k to all the elements ranging from index  to (both inclusive).

function processData(input) {
    //Enter your code here

    let input_ = input.split("\n");
    let param = input_[0].split(' ');

    let N = parseInt(param[0]);
    let M = parseInt(param[1]);
    let arr = new Array(N);
    for (let i = 0 ; i < N; i++) arr[i] = 0;

    let opParam = new Array(3);

    for(let i = 1; i<=M ; i++){
        let op = input_[i].split(' ');
        //console.log(op);
        for(let op_i =0 ; op_i <3 ; op_i++){
            opParam[op_i] = parseInt(op[op_i]);
        }
        //console.log(opParam);
        arr[opParam[0]-1] += opParam[2];
        if(opParam[1] < N){
            arr[opParam[1]] -= parseInt(op[2]);
        }
        //console.log(arr);
    }
    let max = arr[0];
    for(let i =1 ; i<N; i++){
        arr[i] += arr[i-1];
        if(arr[i] > max){
            max = arr[i];
        }
    }
    process.stdout.write(max);
}
