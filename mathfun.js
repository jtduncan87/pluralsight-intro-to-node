var maxTime = 1000;
var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(v%2){
        setTimeout(function(){
            callback(new Error("Odd input"));
        }, waitTime);
    }else {
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

var eventDoublerSync = function(v){
    if(v%2){
        throw (new Error("Odd input"));
    }else{
        return(v*2);
    }
}

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = eventDoublerSync;
module.exports.foo = "bar";