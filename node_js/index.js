

const path= require('path');
//readFlie


const fs=require('fs');
fs.readFile('./start.txt',(err,data)=>{
   if (err) throw err;
    console.log(data.toString());
})

//writeFile

fs.writeFile(path.join(__dirname,'./write.txt'),
'This is the textfile created using node js',
(err)=>{
    if(err) throw err;
    console.log("Writing done...textfile has been created");
})
//appending the file

fs.appendFile(path.join(__dirname,'./testing_append.txt'),
'This file is created using append method',
(err)=>{
    if(err) throw err;
    console.log("This file is created using append method");

})


fs.appendFile(path.join(__dirname,'./testing_append.txt'),
'\n this is the next line added',
(err)=>{
    if(err) throw err;
   

})