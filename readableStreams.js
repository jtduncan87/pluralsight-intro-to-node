var request = require("request");
var s = request("https://www.nhc.noaa.gov/cyclones/");
s.on('data', function(chunk){
   console.log(">>>Data>>>" + chunk); 
});

s.on("end", function(){
    console.log(">>done>>");
    process.exit();
});
