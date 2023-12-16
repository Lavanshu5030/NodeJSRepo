const fs = require('fs');

// how to delete file asynchronously
fs.unlink("./deleteData.text",()=>{
    console.log("file deleted successfully!!!")
});

// How to create directory asynchronously
fs.mkdir("directoryOne",()=>{
    console.log("directory created successfully!!!");
})
// Create file inside directoryOne
fs.writeFile("./directoryOne/file1.text", "Hello I am Lavanshu Deshmukh",()=>{
    console.log("File Created successfully");
});

// fs.mkdir("NewDir",()=>{
//     console.log("directory created successfully!!!");
// })

// How to remove directory
fs.rmdir("NewDir",()=>{
    console.log("Directory Deleted successfully!!!");
})

// How to remove directory containing file
fs.unlink("./NewDirTwo",()=>{
    console.log("directory and file deleted successfully");
});



