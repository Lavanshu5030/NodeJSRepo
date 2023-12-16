// We will import core module in this way only
const http = require('http');
const fs = require('fs');
// We have imported .env file
require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;
const user = process.env.USER;

const server = http.createServer((req,res)=>{
    if(req.url == "/nodemon"){
        // res.write("<html><body><h1>This is my Home page</h1></body></html");
        // res.end();
        //createReadStream() method only reads the existing file
        let data = fs.createReadStream("./index.html", "utf8");
        data.pipe(res);
    }
    else if(req.url=="/about"){
        res.write("<html><body><h1>This is my about page</h1><br><h2>NODEMON</h2></body></html");
        res.end();
    }
    else if(req.url=="/service"){
        res.write("<html><body><h1>This is my service page</h1></body></html");
        res.end();
    }
    else if(req.url=="/contact"){
        res.write("<html><body><h1>This is my contact page<h1></body></html");
       res.end();

    }
    // To check on browser that server is created 
    // res.write("Server Created successfully");
    // res.end();
});
// server.listen(9999,()=>{
//     console.log("Server get started");
// })

// When we are using .env file
server.listen(port,()=>{
    console.log(`Login user is ${user}`);
    console.log(`Server get started on ${host}:${port}`);
})