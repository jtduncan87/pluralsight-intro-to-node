process.stdin.resume(); // starts paused, so must call resume
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
   process.stdout.write('Data -> ' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n'); // triggered by ctl-d
});