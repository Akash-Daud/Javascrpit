// Two type of declair the object

//const tinderUser = new Object()       sinletone object
const tinderUser = {}          // non singletone

tinderUser.id = "123abc"
tinderUser.name= "Sujit"
tinderUser.isLoggedIn =false
// console.log(tinderUser)



// // you can write the object inside the number of object

// const regularUser = {

//     email: "patil@gmail.com",
//     fullname:{
//         userFullname :{
//           firstname:"Akash"

//         }
//     }
// }

// console.log(regularUser.fullname.userFullname);


const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}

// const obj3={obj1 , obj2}
   

// empty {} is the target the merge the all object
const obj3 = Object.assign({} ,obj1,obj2)
// console.log(obj3);

// using the spread object
const obj4 ={...obj1 , ...obj2}

//  console.log(obj4)


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


