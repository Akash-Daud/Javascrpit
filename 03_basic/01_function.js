// Function 

// Thair are 2 type of the function 
// 1) Normal Function

// function sayMyName() {
//     console.log("Akash Daud")
    
// }

// sayMyName()

// 2) Arrow Function

//  sayName =()=>{
//     console.log("Akash Daud")

//   }

// sayName()

// function addTwoNumber(num1 , num2) {
//   console.log(num1+num2);
  
// }

// addTwoNumber(3 , 4 )







// function loginUserMessage(username) {
  
//   if (username===undefined) {
//     console.log("please enter the username");
//     return
    
    
//   }
//   `return ${username}just logged in`
// }

// console.log(loginUserMessage());

    




// function calculateCartPrice(...num1) {
  
//   return num1
// }

// console.log(calculateCartPrice(200,4000,6000,49));


// Object Handle in fuction

/*
const user ={

  username:"Akash",
  price:123
}


function handleObject(anyobject) {

  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  

}
  

// your pass the object in two type 
  handleObject(user)    

  handleObject({
  username:"sujit",
  price:321
  
  })
*/
  // you can also pass the array
  
const myNewArray = [200,400,6000,300 ]

function returnSecoundvalue(getArray) {
  return getArray[1]
  
}

console.log(returnSecoundvalue(myNewArray));


