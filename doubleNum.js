const myArr = [26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// const myArr = []

// let count = 0;

function doubler (arr, n) {
    let copyArr = []
    for (let index = 0; index < arr.length; index++) {
        // myArr.push(arr[i]*2)
        copyArr[index] = arr[index]*n;
    }
    return copyArr
}

console.log(doubler(myArr, 2))

// for (let index = 0; index < arr.length; index++) {
//     // myArr.push(arr[i]*2)
//     myArr[index] = arr[index]*2;
// }

// for (let r = arr.length-1; r >= 0; r--) {
//     myArr.push(arr[r]*2)
// }

// console.log(myArr)

function fNonVoid (age){
    const result = age + 1
    return result
}

function fVoid (age){
    let result = age + 1
}

console.log(fNonVoid(5))
console.log(fVoid(5))