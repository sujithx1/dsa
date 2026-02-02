


//linked list 

// node create


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class LinkedList{
    constructor()
    {
        this.head=null  
        this.tail=null
        this.length=0
    }



push(value){
        const node=new Node(value)
        if(!this.head) {
            this.head=node
            this.tail=node
            return
        }
    this.tail.next=node
    this.tail=node
    this.length++


    }



    print(){
        let currentNode=this.head

        while (currentNode) {
            console.log(currentNode.value)
            currentNode=currentNode.next
            
        }


    }

    pop(){

        if(!this.head)return null
      
        let temp=this.head
        let prev=this.head
        while (temp.next) {
            prev=temp
            temp=temp.next

        }
        
        this.tail=prev
        this.tail.next=null
        this.length--
        return temp.value
    }
    unshift(value){
        const newNode=new Node(value)

        if(!this.head){
            this.head=newNode
            this.tail=newNode
            this.length++
            return
        }

      newNode.next =this.head

        this.head=newNode
        this.length++


    }


    shift(){
        if (!this.head) {
            return null
            
        }

        const tempNode=this.head

        this.head.next=tempNode.next
        this.head=tempNode.next
        return tempNode.value


    }



}




const l1=new LinkedList()

l1.push(1)
l1.push(2)
l1.push(3)
l1.push(4)
// console.log(l/
// 1)
l1.unshift(0)
l1.unshift(-1)
l1.unshift(3)
l1.unshift(10)
l1.print()

console.log('shift---',l1.shift())
l1.print()
// console.log('pop --- ----- ----'+l1.pop())

// l1.print()


