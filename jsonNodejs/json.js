//require for importing
const fs = require('fs');


const detail ={
    name : "xaini",
    dev : "blockchain"
}
console.log("dev", detail.dev)
console.log(detail)
// converting objects to json format 
// JSON.stringify
let jsonData = JSON.stringify(detail);
console.log(jsonData)

let fswrite = fs.writeFile("json1.json",jsonData,(err)=> {
    console.log("done");
})

const t3 =fs.readFile("json1.json","UTF-8",(err , data) =>{
    console.log("t3", data)
});

// converting json format  to  object
// JSON.parse
let objData= JSON.parse(jsonData);
console.log("objData",objData)
// 19