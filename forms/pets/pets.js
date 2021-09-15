let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(`${petNames}`)
let withSal = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam", "Sal"]
console.log(`${withSal}`)
console.log(`The third pets name is ${petNames[2]}`)
let lengthSal = withSal.length
console.log(`The array (withSal) has ${lengthSal} names in it`)

withSal.pop()
console.log(`With popped ${withSal}`)

