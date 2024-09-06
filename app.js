// var student = {
//     name : "areeba",
//     rollNo : 12357,
//     course : "web and app",
//     timing : ["Monday","wednesday"],
//     address :{
//         street :"main street",
//         city : "karachi"
//     }
// }
// console.log(student.course)
// console.table(student);
// console.table(student["address"])
    // console.log(student.rollNo)
    // delete student.rollNo
    // console.log(student.rollNo)
// student.age = 19
// console.table(student.age);                


var student = {
    name : "nimra",
   rollNo : 122445,
   getDetails : function(){
    return `student name is ${student.name} and is roll no ${student.rollNo}`;
   }
}
var studentDetails = student.getDetails()
console.log(studentDetails);
console.log("phoneNum" in student);
console.log("name" in student);


// var myName = "Tayyaba"
// console.log(window.myName);

// console.log(window);


// var myName = "Tayyaba"
// var myName = "Rabya"

// console.log(myName);

// var students = [


//         {
//             "My name": "Rabya",
//             course: "Web and app",
//             rollNo: 134243,
//             timings: ["Monday", "Wednesday"],
//             isEnrolled: true,
//             address: {
//                 street: "Main street",
//                 city: "karachi"
//             }
//         },
//         {
//             "My name": "M",
//             course: "Web and app",
//             rollNo: 134243,
//             timings: ["Monday", "Wednesday"],
//             isEnrolled: true,
//             address: {
//                 street: "Main street",
//                 city: "karachi"
//             }
//         }, {
//             "My name": "Rabia",
//             course: "Web and app",
//             rollNo: 134243,
//             timings: ["Monday", "Wednesday"],
//             isEnrolled: true,
//             address: {
//                 street: "Main street",
//                 city: "karachi"
//             }
//         }

//     ]
//     console.log(students[2]);

// for(var key in student){
//     console.log(student[key]);
    
// }




// var userKey =prompt()

// console.log(student[userKey]);






// var objectKeys = Object.keys(student)

// console.log(objectKeys);

// for(var i =0;i<objectKeys.length;i++){
//     console.log(student[objectKeys[i]]); 
    
// }


// console.log(student.length);

// for(var i =0;i<student.length;i++){
//     console.log(i);
    
// }