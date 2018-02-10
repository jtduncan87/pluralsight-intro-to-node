var fs = require("fs");

if(fs.existsSync("temp")){
 console.log("Dir exists, removing...");
 if(fs.existsSync("temp/new.txt")){
  fs.unlinkSync("temp/new.txt");   
 }
 fs.rmdirSync("temp");
}


//christmas tree problem example
fs.mkdir("temp", function(err){
 fs.exists("temp", function(exists){
  if(exists){
   process.chdir("temp");
   fs.writeFile("test.txt", "hammer down LEGION FC", function(err){
    fs.rename("test.txt", "new.txt", function(err){
     fs.stat("new.txt", function(err, stats){
          console.log("file has size: " + stats.size + " bytes");
          fs.readFile("new.txt", function(err,data){
           console.log("File contents: " + data.toString());
          });
      });
    });
   });
  }
 });
});