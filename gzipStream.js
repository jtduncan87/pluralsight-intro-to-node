var request = require("request");
var fs = require("fs");
var zlib = require("zlib"); // both readable and writable

request("https://www.nhc.noaa.gov/cyclones/")
    .pipe(zlib.createGzip()).pipe(
    fs.createWriteStream('weather.zip'));
