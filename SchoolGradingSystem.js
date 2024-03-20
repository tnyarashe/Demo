//Declare all that contain the different grade categories

//E.g A - 80 - 100, B - 60 - 79, C - 50 - 59, F - 0 - 50

//given this student object, your program needs to update the student's gradeCate Property

// let cate = ["A", "B", "C", "F"]

// let student1 = {
//     name: "John",
//     surname: "Doe",
//     mark: 90,
//     gradeCate: "unknown"
// }

// if (student1.mark > 80 && student1.mark < 100){
//     student1.gradeCate = cate[0]
// }
// else if (student1.mark > 60 && student1.mark < 79){
//     student1.gradeCate = cate[1]
// }
// else if (student1.mark > 50 && student1.mark < 59){
//     student1.gradeCate = cate[2]
// }
// else if (student1.mark > 0 && student1.mark < 49){
//     student1.gradeCate = cate[3]
// }
    
//console.log(student1)

// var num = 0;
// var sum =  ++num;
// for (start = 0; start < 10; start++) {
//         console.log(start)
// }
const num = [5, 2, 5, 6, 3, 5, 2, 9, 6]
const target = 9;

let count = 0;

for(let start = 0; start < num.length; start++){
    count++
    if (num[start] == target){
        console.log("Found " + target + " at index " + start)
        break;
    }
    else {
        console.log("Not found")
    }
}

let start2 = 0;
while (start2 < 10) {
    console.log(start2)
    start2++;
}
// console.log()


//print the student's details