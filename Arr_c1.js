
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    let msg = '';
    for(let i =n-1 ; i>=0; i--){
        msg += arr[i];
        if(i!=0){
            msg+= ' ';
        }
    }
    process.stdout.write(msg);
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    //arr = arr.map(Number);

    if(n <1){
        process.stdout.write('');
    }
    let output = '';
    let loop = Math.ceil(n/2) -1;
    let isOdd = (n%2)==1;
    if(isOdd){
        output += arr[loop]
    }
    else{
        output += arr[n- loop -1] + ' ' + arr[loop]
    }
    for(let i =loop-1 ;i>=0 ; i--){

        output = arr[n-i-1] +' '+ output+ ' '+ arr[i];

    }
    process.stdout.write(output);
}
