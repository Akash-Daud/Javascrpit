const userEmail = "akash@gmail.com"

if (userEmail) {
    // console.log("got the email");
    
} else {
    console.log("we don`t have a user mail");
    
}

//falsy value

//ex: false,0,-0,BigInt 0n, "", null , undefined ,NaN

//truthly values

// "0",'false',{},[],function(){}


const empthobj ={}

if (Object.keys(empthobj).length===0) {

    // console.log("object is empthy");
    
    
}


//Nullish Coalescing Opertor (??): null undefined

// let val;
// val=5 ??10
// val1 = null ?? 10
// console.log (val1);

var1= undefined ?? 14

// console.log(var1);


// terniary Operator

// condition ? true :flase////////////////////////

const icebarck=100
icebarck <=80 ? console.log("less than 80"):console.log("more than 80");
;
