/*
	https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    let nnode = new Node(data);
    let tmp = head;
    if(position == 0){
        nnode.next = head;
        head = nnode;
        return head;
    }
    for(let i = 1 ; i<position ; i++){
        tmp = tmp.next;
        if(!tmp){
            return false;
        }
    }
    nnode.next = tmp.next;
    tmp.next = nnode;
    return head
    
}
