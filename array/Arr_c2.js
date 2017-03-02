//https://www.hackerrank.com/challenges/2d-array
//Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let n=6;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i =1; i<n-1; i++){
        for(let j = 1; j <n-1; j++){
            let tmp = arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] 
                        +   arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
            if(tmp>max){
                max = tmp;
            }
        }
    }
    process.stdout.write(max);

}