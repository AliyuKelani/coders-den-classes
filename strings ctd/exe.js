const love =
  "LoVe is the best thing in this world. Some found their love and some are still looking for their love.";

// case sensitive
const res = love.match(/love/g).length;

// case insensitive
const res2 = love.match(/love/gi).length;


console.log(res);

// const sen =
//   "You cannot end a sentence with because because because is a conjunction";
// const b = "because"
// console.log(sen.match(/because/g).length)

const third =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// const re = /[%$#@;&!]/g
// const re = /[^a-zA-Z ,.?]/g
const re = /([^\w\s.,?])/g


// console.log(third.replace(re, "").match(/\w+/g))

// function roundNum() {
//   let min = Math.ceil(50)
//   let max = Math.floor(100)
//   return Math.floor(Math.random()*(max - min + 1)+ min)
// }

// console.log(roundNum())
// 23 - 45
// 20 - 25
// 20 21 22 23 24 25
// 50 100
//0 0.9999999999
console.log(Math.round((Math.random() * 50)) + 50)
console.log(Math.ceil(Math.random()*50) + 50)
console.log(Math.floor(Math.random()*50) + 51)
const sent2 =
  "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const pat = /\d+/g
const res3 = sent2.match(pat);
console.log(res3)
const ts = parseInt(res3[0]) * 12
const ab = Number(res3[1]) * 1
const oc = res3[2] * 12
console.log(typeof (ts + ab + oc ))
// const tAI = (res3[0] * 12) + (+res3[1]) + (res3[2] * 12)
console.log(tAI)
// console.log(eval("1 + 1"));
  // 1 1.2 1.4 4 98 123 123.9 floor
// 1 1.2 2 1.4 2 4 4 98 123 123.9 celi
//4 4.99999 4.09
// 4.000000000009 5 celi
// 100.234
// 205.00009
// 607
// 607 = 607.00000000
// 1.5 3 7.8