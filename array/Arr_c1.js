https://www.hackerrank.com/challenges/arrays-ds
/*
Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.


*/
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    //arr = arr.map(Number);
    let loop = Math.ceil(n/2);
    for(let i =0; i< loop; i++){
        let tmp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = tmp
    }
    let output = arr.join(' ');
    process.stdout.write(output);

}
