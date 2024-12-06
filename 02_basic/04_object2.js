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


//

// [Prototype]]
// : 
// Object
// constructor =====================
// : 
// ƒ Object()
// assign
// : 
// ƒ assign()
// create
// : 
// ƒ create()
// defineProperties
// : 
// ƒ defineProperties()
// defineProperty
// : 
// ƒ defineProperty()
// entries
// : 
// ƒ entries()
// freeze
// : 
// ƒ freeze()
// fromEntries
// : 
// ƒ fromEntries()
// getOwnPropertyDescriptor
// : 
// ƒ getOwnPropertyDescriptor()
// getOwnPropertyDescriptors
// : 
// ƒ getOwnPropertyDescriptors()
// getOwnPropertyNames
// : 
// ƒ getOwnPropertyNames()
// getOwnPropertySymbols
// : 
// ƒ getOwnPropertySymbols()
// getPrototypeOf
// : 
// ƒ getPrototypeOf()
// groupBy
// : 
// ƒ groupBy()
// hasOwn
// : 
// ƒ hasOwn()
// is
// : 
// ƒ is()
// isExtensible
// : 
// ƒ isExtensible()
// isFrozen
// : 
// ƒ isFrozen()
// isSealed
// : 
// ƒ isSealed()
// keys
// : 
// ƒ keys()
// length
// : 
// 1
// name
// : 
// "Object"
// preventExtensions
// : 
// ƒ preventExtensions()
// prototype
// : 
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// seal
// : 
// ƒ seal()
// setPrototypeOf
// : 
// ƒ setPrototypeOf()
// values
// : 
// ƒ values()
// arguments
// : 
// (...)




/////////////////////////////



hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)