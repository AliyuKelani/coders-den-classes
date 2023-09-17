// Pi r * r

// calc area of circle
let r = 23;
let area = 2 * Math.PI * r * r;

console.log(area);

r++;
area = 2 * Math.PI * r * r;
console.log(area);

r += 50;

// function circleArea (radius) {
//    let a = 2 * Math.PI * radius * radius;
//    console.log(a);
//    return a
//    console.log("Pls run me")
// }

// let y = 1
// let areab = circleArea(y)
// console.log(areab)

function circleArea(radius) {
  return 2 * Math.PI * radius * radius;
}
let y = 1;
let areab = circleArea(y);
console.log(areab);

console.log(circleArea(7));

function greet() {
  return "Hello World!";
}
console.log(greet());

function greet2() {
  console.log("Hello World!");
}
greet2();

function greet3(msg) {
  return msg;
}
console.log(greet3("Hi world"));

function logGreet(msg) {
  let result = greet3(msg);
  console.log(result);
}
logGreet("Sup world");
let g = function  (a,b) {
 return a * b
}
let h = g
console.log(g(3,4))
console.log(h(3,4))

//   setInterval(function () {
//     logGreet("🕺👯‍♂️👯‍♀️💃");
//   }, 1000);
