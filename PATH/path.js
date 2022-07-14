//require for importing
const path = require('path');
const fs = require('path');

//dirpath
let dir = path.dirname("D:/NODEJS/PATH/path.js");
console.log(dir)

//filepath
let file = path.extname("D:/NODEJS/PATH/path.js");
console.log(file)

//dirpath
let base = path.basename("D:/NODEJS/PATH/path.js");
console.log(dir)

//parse any path
let all = path.parse("D:/NODEJS/PATH/path.js");
console.log(all.dir)