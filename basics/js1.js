

const students=["sujith","sajith","sreejith","sarath","midhun"]



const getName=(students,name)=>{
    for(const std of students){
        if(std===name){
            return true
        }
    }
    return false
}

console.log(getName(students,"sujith"))