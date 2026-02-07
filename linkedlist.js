//linked list

// node create

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  pop() {
    if (!this.head) return null;

    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp.value;
  }
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const tempNode = this.head;

    this.head.next = tempNode.next;
    this.head = tempNode.next;
    return tempNode.value;
  }

  //dont give any suggestions

  set(index, value) {
    if (index < 0 || index >= this.length) return false;

    let currentNode = this.head;

    let newNode = new Node(value);

    for (let i = 0; i < index - 1; i++) {
      // console.log(currentNode.value)
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next.next;
    currentNode.next = newNode;
  }
  insert(index, value) {
    if (!index || index > this.length) return false;

    let currentNode = this.head;

    let newNode = new Node(value);
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return newNode;
  }


  reverse(){
      if(!this.length)return null

        let temp=this.head

        this.head=this.tail
           this.tail=temp


           let next=temp
           let  prev=null



           while (temp) {
            next=temp.next
            temp.next=prev
            prev=temp
            temp=next
           }

           let tempNode=this.head
           while (tempNode) {
            console.log(tempNode.value)
            tempNode=tempNode.next
            
           }


  }

}

const l1 = new LinkedList();

l1.push(1);
l1.push(2);
l1.push(3);
l1.push(4);
l1.reverse()
// console.log(l/
// // 1)
// l1.unshift(0)
// l1.unshift(-1)
// l1.unshift(3)
// l1.unshift(10)
// l1.print()

// console.log('shift---',l1.shift())
// l1.print()

// l1.set(2, 10);
// console.log('pop --- ----- ----'+l1.pop())
// l1.insert(2, 100);
// l1.print();

// l1.print()
