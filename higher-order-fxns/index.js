// // HIGHER ORDER FUNCTIONS

// const KtwerkMoves = () => "Wiggle Wiggle Wiggle";
// const jTwerkMoves = () => "Wiggle Wiggle Wiggle twerp twerp twerp";
// const twerk = (twerkMovesFnx) => {
//   let res = twerkMovesFnx();
//   return res;
// };
// console.log(twerk(jTwerkMoves));
// // twerk(jTwerkMoves);

// const print = (jomasy, script = "Hello world") => {
//   let printout = jomasy(script);
//   console.log(printout);
// };

// const englishPrint = (script) => {
//   return script;
// };

// const hebrewPrint = (script) => {
//   return script.split("").reverse().join("");
// };
// const kPrint = (abiola) => abiola.toLowerCase();
// // print(englishPrint);
// // print(hebrewPrint);
// print(kPrint, "Sup world 👋");
// // print((script) => script.toUpperCase());

// const adder = (a, b, adderFxn) => {
//   let res = adderFxn(a, b);
//   console.log(res);
// };

// const jAdd = (a, b) => {
//   return `${a}${b}`;
// };

// const aAdd = (a, b) => {
//   return `${a}+${b}`;
// };
// const pAdd = (a, b) => {
//   //return 1*a + +b;
//   //return +a + Number(b);
//   return +a + +b;
// };
// const fAdd = (a, b) => {
//   return `${"*".repeat(Number(a) + +b)}`;
// };

// let jan = 1;
// let cj = 1;

// // adder(jan, cj, pAdd);
// // ((a, b) => "❤".repeat(a + b))(1, 1);
// adder(jan, cj, (a, b) => "❤".repeat(a + b));
// // const adder = (1, 1, fAdd) => {
// //   let res = fAdd(1, 1);
// //   console.log(res);
// // };

// // const adder = (1, 1, jAdd) => {
// //   let res = jAdd(1, 1);
// //   console.log(res);
// // };

// // const adder = (1, 1, aAdd) => {
// //   let res = aAdd(1, 1);
// //   console.log(res);
// // };

// // const adder = (1, 1, pAdd) => {
// //   let res = pAdd(1, 1);
// //   console.log(res);
// // };

// // const adder = (1, 1, (a,b)=>"❤".repeat(a+b)) => {
// //   let res =((a,b)=>"❤".repeat(a+b))(1,1);
// //   console.log(res);
// // };

// const shapePerimeter = (shape) => {
//   switch (shape) {
//     case "square":
//       return function (b) {
//         return 4 * b;
//       };
//     case "rectangle":
//       return (l, b) => 2 * (l + b);
//     case "triangle":
//       return (a, b, c) => a + b + c;
//     case "circle":
//       return (r) => 2 * Math.PI * r;
//     default:
//       return (shape) => "I don't know that shape";
//   }
// };

// const tri = shapePerimeter("triangle");
// const squarePerimeter = shapePerimeter("square");
// const rectanglePerimeter = shapePerimeter("rectangle");
// console.log(rectanglePerimeter(4, 5));
// console.log(squarePerimeter(4));

// console.log(shapePerimeter("circle")(7));

// console.log(tri(4, 5, 5));
// console.log(tri(6, 5, 5));

// const doubler = (num) => num * 2;

// [1, 2, 3].map((num) => num * 2);
// [1, 2, 3].map(doubler);

// const people = [
//   { name: "Abiola", emoji: "👌" },
//   { name: "Jomasy", emoji: "😁" },
//   { name: "Prince", emoji: "" },
//   { name: "hannah", emoji: "😑" },
//   { name: "Amina", emoji: "😍" },
// ];
// const possibleEmojies = ["😂", "😁", "👌", "😍", "😑"];
// const hasEmoji = (person) => Boolean(person.emoji);
// const hasPreferredEmoji = person => possibleEmojies.includes(person.emoji)
// let ab = people[0];
// console.log(hasEmoji(ab));
// console.log(hasPreferredEmoji(ab));

// const everyoneHasEmoji = "";
// // let res = true;

// // for (person of people) {
// //    res = res & hasEmoji(person)

// // }
// // console.log(Boolean(res))
// // const people = [
// //   { name: "Abiola", emoji: "👌" },
// //   { name: "Jomasy", emoji: "😁" },
// //   { name: "Prince", emoji: "" },
// //   { name: "hannah", emoji: "😑" },
// //   { name: "Amina", emoji: "😍" },
// // ];

// //every
// let res ;
// for (person of people) {
//   //{ name: "Abiola", emoji: "👌" },
//   if (!hasEmoji(person)) {
//     res = false;
//     break;
//   } else {
//     res = true
//   }
// }

// //some
// res;
// for (person of people) {
//   //{ name: "Abiola", emoji: "👌" },
//   if (hasEmoji(person)) {
//     res = true;
//     break;
//   } else {
//     res = false;
//   }
// }
// console.log(res);

// for (person of people) {
//   let has = hasEmoji(person);
//   if (!has) {
//     res = false;
//     break;
//   }
// }
// let resArr = [];
// for (person of people) {
//   resArr.push(hasPreferredEmoji(person))
// }

// let finRes;
// for (let i = 0; i < resArr.length; i++){
//   if (true === resArr[i]) {
//     finRes = true;
//   }
//   else {
//     finRes = false;
//     break;
//   }
// }
// console.log(res)
// console.log(finRes);

// allHasEmoji = people.every(hasEmoji)
// allHasEmoji = people.every((person) => Boolean(person.emoji));




const people = [
  { name: "Abiola", emoji: "😂" },
  { name: "Jomasy", emoji: "" },
  { name: "Prince", emoji: "" },
  { name: "hannah", emoji: "" },
  { name: "Amina", emoji: "" },
];
const possibleEmojies = ["😂", "😁", "👌", "😍", "😑"];
const hasEmoji = (person) => true;
const hasPreferredEmoji = person => possibleEmojies.includes(person.emoji)
let allHasEmoji = people.every(hasEmoji)
// let allHasEmoji = people.every(hasPreferredEmoji)
// let allHasEmoji = people.every(hasPreferredEmoji)
// let allHasEmoji = people.every((person) =>
//   possibleEmojies.includes(person.emoji)
// );

console.log(allHasEmoji)
//some
// let someHasEmoji = people.some(hasEmoji);
let someHasEmoji = people.some(hasEmoji);
// let someHasEmoji = people.some((person) => Boolean(person.emoji));
// let someHasEmoji = people.some(hasPreferredEmoji);
// let someHasEmoji = people.some((person) =>
//   possibleEmojies.includes(person.emoji)
// );

console.log(someHasEmoji)
