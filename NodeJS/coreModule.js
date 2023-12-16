const fs = require('fs');   // fs Module
const path = require('path')  // Path module
const os = require('os');// OS module

console.log(__dirname);
console.log(__filename);  //It return file path
console.log(path.extname(__filename)); // It will return file extension
console.log(path.isAbsolute(__filename));// It will return true if the path is absolute
console.log(path.isAbsolute("../"+__filename));// It will return false if the path is relative
// It join the two different path
console.log(path.join("../"+__filename));
console.log("===========");
console.log(os.arch());
console.log(`Totol Memory: ${os.totalmem()}`);
console.log(`Free Memory:${os.freemem()}`);
console.log(`Home Dire:${os.homedir()}`);
console.log(`Host Name:${os.hostname()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Version: ${os.version()}`);
console.log(`OS Machine: ${os.machine}`);




