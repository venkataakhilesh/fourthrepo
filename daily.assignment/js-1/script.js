// Task-1
// Array Initialization
// Create an arr of 10 random integers btwn 1 and 100.

let newArray=[45,34,87,54,12,32,65,80,21,9]

console.log(newArray)

// Task-2
// Array Manipulation:

// push operation

newArray.push(78)
console.log(newArray)

//pop operation
newArray.pop()
console.log(newArray)

// unshift operation

newArray.unshift(56)
console.log(newArray)

//shift operation

newArray.shift()
console.log(newArray)

// Task-3
// Array Sorting:
// Ascending order
newArray.sort((a,b)=>a-b)
console.log(newArray)

//descending order
newArray.sort((a,b)=>b-a)
console.log(newArray)


// Task-4
// Array Iteration:

newArray.forEach(obj=> console.log(obj))

// Task-5
// Array Transformation:

newArray2=[45,78,89,34]

let newArray3=newArray2.map(rec=>rec**2)
console.log(newArray3)

// Task-6
// Array Filtering:

newArray4=[3,6,8,9,2]

let newArray5=newArray4.filter(item=>item%2===0)
console.log(newArray5)

// Task-7
// Array Reduction:

newArray6=newArray4.reduce((acc,curr)=>acc+curr)
console.log(newArray6)