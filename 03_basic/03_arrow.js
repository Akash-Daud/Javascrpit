// Introduce the ES6
 /*
const user = {
    username: "Akash",
    price: 999,

    welcomeMessage :function(){

        console.log(`${this.username}, welcome to the our website`);

        console.log(this)
        
    }
 }

 user.welcomeMessage()
 user.username ="daud"

 console.log(this.welcomeMessage);
 console.log(this);
 user.welcomeMessage()
      */
 // This keyword don`t support to the function 

//  function addNum(num1 , num2) {
//   return  num1+ num2

    
//  }

// console.log( addNum(4 ,5));



// const addNum = (num1 , num2)=> {
//     return num1 + num2
    
// }

// console.log(addNum(3,5));


// const addNum = (num1 , num2)=>num1 + num2;
// console.log(addNum(3,5))


// if you have use the the {}  you need to write the rturn keyword

const addNum = (num1 , num2)=>({username:"Akash"})

console.log(addNum(4,5));
