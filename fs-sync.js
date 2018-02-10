var fs = require("fs");

if(fs.existsSync("temp")){
 console.log("Dir exists, removing...");
 if(fs.existsSync("temp/new.txt")){
  fs.unlinkSync("temp/new.txt");   
 }
 fs.rmdirSync("temp");
}

fs.mkdirSync("temp");
if(fs.existsSync("temp")){
    process.chdir("temp");
    fs.writeFileSync("text.txt", "rolltide","utf8");
    fs.renameSync("text.txt", "new.txt");
    console.log("file has size: " + fs.statSync("new.txt").size + " bytes");
    console.log("file has contents: " + fs.readFileSync("new.txt").toString());
}