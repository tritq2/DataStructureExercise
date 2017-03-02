/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.


//Given a pointer to the head node of a linked list, print its elements in order, one element per line.
//If the head pointer is null (indicating the list is empty), don’t print anything.
function print(head) {
    if(head == null){
        return;
    }
    else{
        console.log(head.data);
        print(head.next);
    }
}
