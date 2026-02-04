


class DNode{
    constructor(value)
    
     {
        this.value=value
        this.next=null
        this.prev=null
     }
}




class DoublyLinkedList{
    constructor(){
        this.head=null
        this.length=0
        this.tail=null
    }

    push(value){

        let newNode=new DNode(value)


        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return

        }


        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
        this.length++
        return value
        
        // // currentNode.next=newNode
        // newNode.next=this.tail
        // newNode.prev=currentNod






    }




    print(){
        if(!this.head)return null


        let currentNode=this.head

        while(currentNode){
            console.log(currentNode.value)
            currentNode=currentNode.next
        }



    }
}


const d1=new DoublyLinkedList()
d1.push(1)
d1.push(2)
d1.push(3)

// console.log()

d1.print()
