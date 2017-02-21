
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
