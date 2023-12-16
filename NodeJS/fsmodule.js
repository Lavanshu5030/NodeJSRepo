const fs = require('fs');

//Writting file synchronously and creating file
fs.writeFileSync("writeFile.text","Hello My Dear Friend, where are you");

// read file sysnchronously
let data = fs.readFileSync("./writeFile.text","utf-8");
//console.log(data);

// Append data 
fs.appendFileSync("./writeFile.text"," I am in pune maharastra");

//fs.writeFileSync("writeTwoFile.text","I am a cdac student");

// Reading file data asynchronously
fs.readFile("./writeFile.text", "utf-8",(err,data)=>{
    console.log(data);
    // Write file aysnchronously
    fs.writeFile("writeFileAsyn.text", data,()=>{
        console.log("data written successfully");
    })
});

// Creating file inside 


