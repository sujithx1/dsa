class Node{
    constructor(value){
        this.value= value  
        this.next=null 
    }




}



class Queue{
    constructor()
    {
        this.first=null
 
        this.last=null
        this.length=0
    }

    Enqueue(value){
        let newNode=new Node(value)
        if (!this.length) {
            this.first = newNode
            this.last=newNode
            this.length++
            return
        }

        newNode.next=this.last
        this.last=newNode
        this.length++
        return          



    }
    Dequeu()
    {
        if(!this.length)return null
        
        let temp=this. fe
        this.first=temp.next
        return temp.value

    }


}

const q1=new Queue()
q1.Enqueue(1)
q1.Enqueue(2)
q1.Enqueue(3)
q1.Dequeu()
console.log(q1)