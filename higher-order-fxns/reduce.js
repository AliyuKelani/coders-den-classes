// const doubler = function (fruit) {
//    return fruit + fruit;
//    return `${fruit}${fruit}`
//    return fruit.repeat(2)
// }
const fruits = ["🍐", "🍑", "🍓", "🍒", "🍅"];
const doubler = function (fruit) {
  return fruit + fruit;
};

const tripler = (fruit) => fruit.repeat(3);

console.log(doubler("🍐"));
console.log(tripler("🍐"));

doubleFruits = [];

for (let i = 0; i < fruits.length; i++) {
  let double = doubler(fruits[i]);
  doubleFruits.push(double);
}
console.log(doubleFruits);

// const tripleFruits = fruits.map(tripler)
const tripleFruits = fruits.map((fruit) => fruit.repeat(3));
console.log(tripleFruits);

const nFruits = (fruit, n) => fruit.repeat(n);
const nerFruits = fruits.map(nFruits);
// const nerFruits = fruits.map((fruit) => nFruits(fruit,4));
console.log(nerFruits);
/*
 *@pre = (el, index) => b
 */
const map = (pre, arr) => {
  res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(pre(arr[i], i));
  }
  return res;
};

// const reduce = (pre, defVal, arr) => {
//   res = defVal || arr[0];
//   for (let i = defVal != undefined ? 0 : 1; i < arr.length; i++) {
//     res = pre(res, arr[i], i);
//   }
//   return res;
// };

const filter = (pre, arr) => {
  res = [];
  for (let i = 0; i < arr.length; i++) {
    if (pre(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

const cnerFruits = map((el, i) => el.repeat(4), fruits);

console.log(cnerFruits);

const rFruits = [];
fruits.reduce((_, current, i) => {
  rFruits[i] = doubler(current);
}, "");

const countFruit = (fruit) => fruit.length / 2;
console.log("🍐".codePointAt(0));
console.log(String.fromCodePoint(127820))
// 127824
/**
 *
 * @param {function} reducer :(previous, current) => res
 * @param {*} defVal
 * @param {*} arr
 * @returns
 */
// const fruits = ["🍐", "🍑", "🍓", "🍒", "🍅"];
const reduce = (reducer, defVal, arr) => {
  let prevRes = defVal === undefined ? arr[0] : defVal ;
  for (let i = defVal === undefined ? 1 : 0; i < arr.length; i++) {
    res = reducer(prevRes, arr[i], i, arr);
  }
  return res;
};


class Arr {
  constructor(arr) {
    this.arr = arr || [];
  }
  reduce = (reducer, defVal) => {
    let prevRes = defVal === undefined ? this.arr[0] : defVal;
    for (let i = defVal === undefined ? 1 : 0; i < this.arr.length; i++) {
       prevRes = reducer(prevRes, this.arr[i], i, this.arr);
    }
    return prevRes;
  };
}



console.log(countFruit("🍑"));
console.log(rFruits);

const reducer = (prevRes, curr) => {
   return prevRes + countFruit(curr)
}

const defFruit = new Arr(fruits);

const totalDefFruit = defFruit.reduce(reducer);
const totalFruits = fruits.reduce(reducer)
const ourReduce = reduce(reducer,undefined, fruits);
console.log(totalFruits)
console.log(totalDefFruit);

"Hello".toUpperCase()