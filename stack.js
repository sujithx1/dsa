



class Node{
    constructor(value){
       this.value=value
       this.next=null

    }
}



class Stack{
    constructor()
    {
        this.first=null
        this.length=0
    }

    push(value){
        let newNode=new Node(value)
        if(!this.first){
            this.first=newNode
            this.length++
            return
        }
        newNode.next=this.first
        this.first=newNode
         this.length++
         return this

    }
    pop()
    {
        if(!this.first)return null
        let temp=this.first
        this.first=temp.next

        this.length--
        return temp.value
        

    }
    print()
    {
    let currentNod=this.first
    while (currentNod) {
        console.log(currentNod.value)
        currentNod=currentNod.next
    }

    }
}

const s1=new Stack()
s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.pop()
console.log(s1)
s1.print()