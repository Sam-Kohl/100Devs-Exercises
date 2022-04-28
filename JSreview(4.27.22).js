//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let poke = 'Squirtle, Pikachu, Magikarp'
function reverseList(str){
    return poke.split(', ').reverse().join(', ')
}
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let arrA = [2,6,3,8]
let arrB = [1,2,3,4]

function compareNumArr(a,b){
    let aSum = a.map(num => Math.pow(num, 2)).reduce((a, c) => a + c )
    let bSum = b.map(num => Math.pow(num, 3)).reduce((a, c) => a + c)
    console.log(aSum, bSum)
    return aSum > bSum
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
let arr2 = [22, -6, 32, 82, 9, 25] 
// =>  [-6, 32, 25]
let arr1 = [68, -1, 1, -7, 10, 10];
// => [-1, 10]

function newArr(arr){
    let result = arr.filter((x, i) => x % i === 0)
    return result
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let numArr = [1, '2', 3, '4', '5', 6]

function allToNum(arr){
    return arr.map((x) => Number(x)).reduce((a,c) => a + c)
}
