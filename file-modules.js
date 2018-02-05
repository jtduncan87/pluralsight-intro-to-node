var mathFun = require('./mathfun')

var processResults = function(err, results, time){
    if(err){
        console.log("ERROR:" + err.message);
    }else{
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

for(var i =0; i<10; i++){
    console.log("Calling evenDoubler for value: " + i);
    mathFun.evenDoubler(i, processResults);
}

console.log("---------");

console.log("foo from mathFun: " + mathFun.foo);
