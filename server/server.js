// for requireing http
const http = require("http");
// start a server 
//req for getting value
//res for status
const server = http.createServer((req ,res) =>{
    console.log(req.url);
    if (req.url== "/"){
        res.end("server start /n at home");
    }

    else if(req.url == "/about"){
        res.end("at about");
    }
    // for exisiting page detail
    else if(req.url == "/contact"){
        res.end("at contact us");
    }
    else{
        // for nonexisting page
        // for changing content type
        //error for client 
        res.writeHead(404 ,{"Content-type" : "text/html"});
        res.end("<h1>not exist</h1>");
    }
});
// server address 
server.listen(8080,"127.0.0.1" ,()=> {
    console.log("listing on http://127.0.0.1:8080/ ")
});