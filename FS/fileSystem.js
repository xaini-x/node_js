//require for importing
const fs = require('fs');

//write
fs.writeFileSync("test.txt","done");

// 0ld+new write
fs.appendFileSync("test.txt","done1");

// read default = buffer
const t =fs.readFileSync("test.txt");
console.log(t)

// buffer to string
const t2 =t.toString();
console.log(t2)
//async write
fs.writeFile("test1.txt","done__",(err) => {
    console.log("tested")
});

//async  0ld+new write
fs.appendFile("test1.txt","done1__",(err) =>{
    console.log("tested")
});

//async read default = buffer
const t3 =fs.readFile("test.txt","UTF-8",(err , data) =>{
    console.log(data)
});

console.log(t3)

