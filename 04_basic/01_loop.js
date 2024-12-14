// 3 type of loop for loop, do while loop ,  while loop

    // For

    for (let index = 0; index < 10; index++) {
        const element = index;

        if (element==5) {
            // console.log("5 is the best option");
            
        }
            // console.log(element);
            
        
    }


    for (let i = 0; i < 10; i++) {
        // const element = i;
        // console.log(`outer loop value is :${i}`);
        
        for (let j = 0; j < 10; j++) {
            // const element =j;
            // console.log(`Inner loop value is:${j} an inner lopp{i}`);
            


            
        }
        
    }


    let Myarray=["akash" ,"gopal","ravi"]

    for (let index = 0; index < Myarray.length; index++) {
        const element = Myarray[index];
        console.log(element);
        
    }


    /// break and continus

for (let index = 0; index < 20; index++) {
    const element = index;
    if (index==5) {
        console.log("5 is detected");
       break 
    }
console.log(element);



}
for (let index = 0; index < 20; index++) {
    const element = index;
    if (index==5) {
        console.log("five is detected");
       continue
    }
console.log(element);



}