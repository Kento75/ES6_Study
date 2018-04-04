let x = 3
x = 4
let x = 4  // error


// scope check
if(true) { var y = 3 }
console.log(y)

if(true) { let z = 4 }
console.log(z)  // error
