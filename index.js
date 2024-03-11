//Install fs, stream and path.
//Path creates the path.
//Stream reads a huge data part by part: It will be showm in the code
const fs = require('fs')
const stream = require('stream')
const path = require('path')
// Creating a stream to read the myName.txt file.
// const readStream = fs.createReadStream(
//     path.join(__dirname, "files", "myName.txt"), //Create a path of the file. So this whole this is the path
//     {
//         encoding: 'utf-8' //Encoding of the file, this ensures the text is the text file doesnot read as a binary file

//     }
// )
// // Writing a stream, this creates a copy of the txt file.
// const writeStream = fs.createWriteStream(
//     path.join(__dirname, "files", "updated.txt"),

// );
//To read the copy of the txt file, we use (.pipe) method.
// readStream.pipe(writeStream);
//Creating a file using promises, this is an asynchronous way of creating a file.
const fsPromise = require("fs").promises
// Creating a new file using promises
const newFile = async () => {
    const newData = await fsPromise.writeFile(path.join(__dirname, "files", "newFile.txt"), "Trying out promises in File System",
        {
            encoding: 'utf8'
        } )
    console.log(newData)
}
newFile()