const fs = require("fs");
const { onEmitHandler10 } = require("./mission10EventClass");
const { onEmitHandler } = require("./mission9EventClass");

// //!-->Ex2)
// // for (let i = 0; i < 10; i++) {
// //   if (i % 2 == 0) console.log(i);
// // }

// //!-->Ex3)
// let arr = [];
// for (let i = 0; i < 16; i++) {
//   arr[i] = Math.floor(Math.random() * 10);
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }
// //!-->Ex4)

// // let child = {
// //   name: "childrenOfGod",
// //   age: 4,
// //   inKindergarden: true,
// // };

// // fs.writeFile("./mission4.json", `${JSON.stringify(child)}`, () => {});
// ////!--Ex5)
class Child {
  name;
  age;
  inKindergarden;
  constructor(name, age, inKindergarden) {
    this.name = name;
    this.age = age;
    this.inKindergarden = inKindergarden;
  }
}
let child1 = new Child("Gedamo", 3, true);
let child2 = new Child("Xabi", 5, false);
let child3 = new Child("Asmamaoo", 3, true);
let arr = [child1, child2, child3];
// fs.writeFile("./mission5.txt",JSON.stringify(arr),()=>{})
// fs.readFile("./mission5.txt", (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   let arrFromJson = JSON.parse(res);
//   for (let i = 0; i < arrFromJson.length; i++) {
//     if (arrFromJson[i].inKindergarden == true) {
//       console.log(arrFromJson[i]);
//     }
//   }
// });
// ////!--Ex6)
// fs.writeFile("./mission6.json",JSON.stringify(arr),()=>{})
// fs.readFile("./mission6.json", (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   let mission6Arr = JSON.parse(res);
//   for (const child of mission6Arr) {
//     if (child.inKindergarden == true) {
//       console.log(child);
//     }
//   }
// });

////!--Ex7)
// const OneHundredArr = [];
// for (let i = 0; i < 100; i++) {
//   OneHundredArr.push(Math.floor(Math.random() * 100));
//   // fs.writeFile("./mission7ArrayCheck.txt", `${OneHundredArr}`, () => {});
// }
// const OnlyModule7Arr =[]
// OneHundredArr.forEach(num => {
//   if(num % 7 ==0){
//     OnlyModule7Arr.push(num);
//   }
// });
//   fs.writeFile("./mission7.txt", `${OnlyModule7Arr}`, () => {});

// fs.readFile("./mission7.txt", (err, res) => {
//   if (err) {
//     console.log(err);
//   }
// //   let arr = res.toString().split(",");
// //   arr.forEach((item) => {
// //     if (item > 50) {
// //       console.log(item);
// //     }
// //   });
// // });

// ////!--Ex8)
// const OneHundredArr = [];
// for (let i = 0; i < 100; i++) {
//   OneHundredArr.push(Math.floor(Math.random() * 100));
//   // fs.writeFile("./mission8.json", `${JSON.stringify(OneHundredArr)}`, () => {});
// }
// const OnlyModule7Arr = [];
// OneHundredArr.forEach((num) => {
//   if (num % 7 == 0) {
//     OnlyModule7Arr.push(num);
//   }
// });
// // fs.writeFile("./mission8.json", `${JSON.stringify(OnlyModule7Arr)}`, () => {});
// fs.readFile("./mission8.json", (err, res) => {
//   if (err) {
//     console.log(err);
//   }

//   res
//     .toString()
//     .split(",")
//     .forEach((num) => {
//       if (num > 50) {
//         console.log(num);
//       }
//     });
// });


//!Ex9-->)

// require('./mission9EventClass');
// onEmitHandler('mission9',"Mission9 Completed.");

//!Ex10-->)
arrayMission10=["dsadsa",222,51,true]
require('./mission10EventClass');
onEmitHandler10('mission10',arrayMission10)

//!Ex11-->)
