//https://www.hackerrank.com/challenges/sparse-arrays
//There are  strings. Each string's length is no more than  characters. There are also  queries. For each query, you are given a string, 
//and you need to find out how many times this string occurred previously.

function processData(input) {
    //Enter your code here
    let input_ = input.split("\n");
    let N = parseInt(input_[0]);
    let Q = parseInt(input_[N+1]);
    let data = {};
    for(let i = 1; i <= N; i++){
        if(!data[input_[i]]){
            data[input_[i]] = 1;
        }
        else{
            data[input_[i]]++;
        }
    }
    for( let i= N+2 ; i<= N+Q+1; i++){
        if(data[input_[i]]){
            console.log(data[input_[i]]);
        }
        else{
            console.log(0);
        }
    } 
} 