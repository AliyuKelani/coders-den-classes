// for (;;) console.log("Jane");
// while (true) console.log("Jane");
// let input = "hello";
// // do{
// //    console.log("")
// //    input = prompt("Enter a number between 1 - 5 else I will quit my Job.")
// // } while (input <= 5 && input >= 1)
// // 1 2 3 4 5

// if (1 < 5) {
//   console.log("Whoa");
// }
// let test = [1, 2, 3];

// for (let i = 0; i < test.length; i++) {
//   test[i] = test[i]?.toLocaleUpperCase();
// }

// for (let el of test) {
//   console.log(el);
// }

// for (let char of "Jomasy") {
//    console.log(char)
// }

// console.log("hey");

let foods = ["🍕", "🌭", "🥞", "🥟", "🥐"];

// foods[0] += foods[0];
// foods[1] += foods[1];
// foods[2] += foods[2];
// foods[3] += foods[3];

for (let i = 0; i < foods.length; i++) {
  foods[i] = foods[i].repeat(1);
}

// for (let i = 0; i < foods.length; i++){
//   console.log(`I ate ${foods[i]}`)
// }
// let foods = ["🍕", "🌭"];
//                           p
// eat = "🌭"

// const nF = [];
// for (let eat of foods) {
//   // console.log(eat.repeat(2));
//   // nF.push(eat.repeat(2));
// }

let c = 0;
// for (let el of foods) {
//   foods[c] = el.repeat(2);
//   c++;
// }

// foods = ["🍕", "🌭"];
//                  p
// key =0

for (let key in foods) {
  foods[key] = foods[key].repeat(2);
}
// console.log(foods);

let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     continue;
//   }
//   arr[i] += 1;
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     break;
//   }
//   arr[i] += 1;
// }

// let fruits = ["🍏", "🍐", "🍑", "🍒", "🍓", "🍅", "🍆"];
// let request = "🍏";
// let noOfTimes = 0;
// for (let fruit of fruits) {
//   noOfTimes++;
//   if (request === fruit) {
//     console.log(`Found your ${request} `);
//     break;
//   }
// }
// console.log(`after ${noOfTimes} searches`);

// let fruits = ["🍏", "🍐", "🍑", "🍒", "🍓", "🍅", "🍆"];
// let request = "🍌";
// let noOfTimes = 0;
// for (let i = 0; request !== fruits[i] && i < fruits.length; i++) noOfTimes++;

// if (request === fruits[noOfTimes - 1]) console.log(`Found your ${request} `);
// console.log(`after ${noOfTimes} searches`);

// let fruits = ["🍏", "🍐", "🍑", "🍒", "🍓", "🍅", "🍆"];
// let request = "🍑";
// let noOfTimes = 0;
// for (let i = 0; i < fruits.length; i++) {
//   noOfTimes++;
//   if (request === fruits[i]) {
//     console.log(`Found your ${request} `);
//     break
//   }
// }
// console.log(`after ${noOfTimes} searches`);

let fruits_stall = ["🍏", "🍐", "🍑", "🍒", "🍓", "🍅", "🍆"];
//                               P
let basket = "🍑🍒🍅";
for (let i = 0; i < fruits.length; i++) {
  if (!basket.includes(fruits[i])) {
    console.log(`Didnt' buy ${fruits[i]}`);
    continue;
  }
  console.log(`Hello I was run cos of ${fruits[i]} `);
  fruits_stall[i] += fruits_stall[i];
}
console.log(`stall after update ${fruits_stall}`);

