// Their are two type of scope

// function scope / Global Scope
// ex.var


////////////////////////////////////////////////////////

// block scope 
// ex.let,const
/*
let a = 200
if (true) {
    let a = 10
    const b = 20
  console.log("Inner:"  , a);
  
}

console.log(a); */


/* Nested Scope 


function one() {

    const username ="Akash"

    function Two() {
        const surename = "Daud"
        console.log(username);
        
        
    }
    //    console.log(surename);
       
    Two()
    
}

one()
*/


//  Use the If else Condition

/*
if (true) {

    const username = "Akash"

if (username=="Akash") {
    const website = "yutuber"
   console.log(username+ " " + website);

       
}
// console.log(website);

    
}
// console.log(username);
*/


//========================================Interesting=====================================================

 function addone(num) {
    return num+1
    
 }

 addone(4)


 const addTwo = function (num) {
    return num+1
   
 }

 
console.log(addTwo(5));

 