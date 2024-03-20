let reversed = ""
let word = "Philippi Village"
function reverseWord (word) {

    for (i = word.length-1; i >= 0; i--) {
        reversed = reversed + word[i]
    }
    
    return reversed

}

// function strReverse () {
//     let reversed = ""
//     for (let i = str.length - 1; i >= 0; i--){
//         reversed = str[i];
//     }
//     return reversed
// }

console.log(reverseWord(word))