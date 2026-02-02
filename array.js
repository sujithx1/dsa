




// reverse an string



    const str='sujith'



    //reverse string with array 
//     const reversed=str.split('').reverse().join('')



//     const substring=str.substring(3)
//     // console.log('substring',substring)

//     // recersion
// const reverseString=(str)=>{

//     if(str.length==1)return str

//     // console.log(str)
//     return reverseString(str.slice(1))+str[0]


// }

// console.log(reverseString('sujith'))


// //another way 

// const reverseString_substring=(str)=>{

//     if(str.length==1)return str
    
    
//     return reverseString_substring(str.substring(1))+str[0]


// }

// console.log(reverseString_substring('sujith'))



// // with not using anythig



// const reverse=(str,j=str.length-1,rev='')=>{

// if(j<0)return rev

//     rev+=str[j]

// return reverse(str,j-1,rev) 


// }

// console.log(reverse('sujith'))



//palidrom 


//use array

// const isPalidromArray= (str)=>{


//     return str===str.split('').reverse().join('')


// }


// console.log(isPalidromArray('malayalam'))



//recursion


// const isPalidromRecursive=(str)=>{

//     if(str[0]!==str[str.length-1])return false

//     if(str.length==1)return true


//     return isPalidromRecursive(str.slice(1,-1))




// }   

// console.log(isPalidromRecursive('malayalam'))




//fizz buzz  
//        /    //



b







