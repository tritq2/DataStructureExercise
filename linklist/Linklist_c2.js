/*

You have to complete the Node* Insert(Node* head, int data) method. 
It takes two arguments: the head of the linked list and the integer to insert. 
You should not read any input from the stdin/console.
https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list

  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    let last = new Node(data);
    if(head == null){
        head = last;
    }
    else{
        let tmp = head;
        while(tmp.next){
            tmp = tmp.next;
        }
        tmp.next = last
    }
    return head;
}
