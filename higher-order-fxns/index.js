// HIGHER ORDER FUNCTIONS

const KtwerkMoves = () => "Wiggle Wiggle Wiggle";
const jTwerkMoves = () => "Wiggle Wiggle Wiggle twerp twerp twerp";
const twerk = (twerkMovesFnx) => {
  let res = twerkMovesFnx();
  return res;
};
console.log(twerk(jTwerkMoves));
// twerk(jTwerkMoves);

const print = (jomasy, script = "Hello world") => {
  let printout = jomasy(script);
  console.log(printout);
};

const englishPrint = (script) => {
  return script;
};

const hebrewPrint = (script) => {
  return script.split("").reverse().join("");
};
const kPrint = (abiola) => abiola.toLowerCase();
// print(englishPrint);
// print(hebrewPrint);
print(kPrint, "Sup world 👋");
// print((script) => script.toUpperCase());

const adder = (a, b, adderFxn) => {
  let res = adderFxn(a, b);
  console.log(res);
};

const jAdd = (a, b) => {
  return `${a}${b}`;
};

const aAdd = (a, b) => {
  return `${a}+${b}`;
};
const pAdd = (a, b) => {
  //return 1*a + +b;
  //return +a + Number(b);
  return +a + +b;
};
const fAdd = (a, b) => {
  return `${"*".repeat(Number(a) + +b)}`;
};

let jan = 1;
let cj = 1;

// adder(jan, cj, pAdd);
// ((a, b) => "❤".repeat(a + b))(1, 1);
adder(jan, cj, (a, b) => "❤".repeat(a + b));
// const adder = (1, 1, fAdd) => {
//   let res = fAdd(1, 1);
//   console.log(res);
// };

// const adder = (1, 1, jAdd) => {
//   let res = jAdd(1, 1);
//   console.log(res);
// };

// const adder = (1, 1, aAdd) => {
//   let res = aAdd(1, 1);
//   console.log(res);
// };

// const adder = (1, 1, pAdd) => {
//   let res = pAdd(1, 1);
//   console.log(res);
// };

// const adder = (1, 1, (a,b)=>"❤".repeat(a+b)) => {
//   let res =((a,b)=>"❤".repeat(a+b))(1,1);
//   console.log(res);
// };

const shapePerimeter = (shape) => {
  switch (shape) {
    case "square":
      return function (b) {
        return 4 * b;
      };
    case "rectangle":
      return (l, b) => 2 * (l + b);
    case "triangle":
      return (a, b, c) => a + b + c;
    case "circle":
      return (r) => 2 * Math.PI * r;
    default:
      return (shape) => "I don't know that shape";
  }
};

const tri = shapePerimeter("triangle");
const squarePerimeter = shapePerimeter("square");
const rectanglePerimeter = shapePerimeter("rectangle");
console.log(rectanglePerimeter(4, 5));
console.log(squarePerimeter(4));

console.log(shapePerimeter("circle")(7));

console.log(tri(4, 5, 5));
console.log(tri(6, 5, 5));

const doubler = (num) => num * 2;

[1, 2, 3].map((num) => num * 2);
[1, 2, 3].map(doubler);
