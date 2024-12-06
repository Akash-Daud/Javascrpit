// OBJECT

//singleton
//object.create   

//object literals  ----------

const jsUser = {
    name: "Akash",
    age :22 ,
    location:"Pune",
    email:"daud@gmail.com",
    isLogin:false,
    lastLoginDay:["Monday","Sunday"]

}

//How to access the user 

// console.log(jsUser.name);      //1 option to access the object

// console.log(jsUser["email"]);    // 2nd option access the object

//How to change the value in object

// jsUser.email ="akash@gmail.com"

// console.log(jsUser["email"]); 

// Object.freeze(jsUser) // freeze the jsUser Obje

// jsUser.email ="akashdaud@gmail.com"
// console.log(jsUser["email"]); 




// take a refrence inside the object value
jsUser.greeting = function(){
    console.log(`Hello   , ${this.name}`);
    
}

console.log(jsUser.greeting());
