


class DNode{
    constructor(value)
    
     {
        this.value=value
        this.next=null
        this.prev=null
     }
}




class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(value) {
    let newNode = new DNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return value;

    // // currentNode.next=newNode
    // newNode.next=this.tail
    // newNode.prev=currentNod
  }

  print() {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  pop() {

    let temp=this.tail


    if(this.length==1)
        {

            this.head=null
            this.tail=nul
        }

        this.tail=this.tail.prev
        this.tail.next=null
        temp.prev=null
        return temp

    
  }

  unshift(value)
  
{
const newNode=new DNode(value)




if(!this.head){
    this.head=newNode
    this.tail=newNode
    return newNode

}




let currentNode=this.head

newNode.next=currentNode
currentNode.prev=newNode
this.head=newNode
this.length++

}


shift(){
  if(!this.length)return null

  if(this.length==1){
    this.head=null
    this.tail=null

    return
  }
  
let tempNode=this.head

this.head=this.head.next
this.head.prev=null
tempNode.next=null
return tempNode.value



}



}


const d1=new DoublyLinkedList()
d1.push(1)
d1.push(2)
d1.push(3)

// console.log()

// d1.print()

// console.log(d1.pop())
d1.unshift(0)

// console.log(d1)
d1.print()

console.log(d1.shift()+'shifteddddddd')



d1.print()