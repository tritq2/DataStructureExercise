/*
	https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list
  Delete Node at a given position in a linked list 
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Delete(Node *head, int position)
{
  // Complete this method
    Node *prev = head;
    if(position <= 0){
        head = head->next;
        delete prev;
        return head;
    }
    else{
        Node *tmp  = prev->next;
        for( int i = 1; i< position; i++){
            prev = prev->next;
            
            if(prev == NULL){
                return head;
            }
            tmp  = prev->next;
            if(tmp == NULL){
                return head;
            }
        }
        prev->next = tmp->next;
        delete tmp;
        return head;
    
    }
}
