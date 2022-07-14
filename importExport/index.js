//single function import

// const add =require("./opr");
// const sub =require("./opr");
// const mul =require("./opr");

// console.log(add(51,15));

// console.log(sub(51,15));
// console.log(mul(5,5));
//-------------------------------------
//    single  import
// const opr =require("./opr");
// console.log(opr);
// calling by object name
// console.log(opr.add(51,15));
// console.log(opr.sub(51,15));
// console.log(opr.mul(5,5));
//--------------------------------------
// import all

const { add, sub, mul, name } = require('./opr')

console.log(add(51, 15))

console.log(sub(51, 15))
console.log(mul(5, 5))
console.log(name)
