var fs = require('fs');
var file = 'myOutput.txt';
var wstream = fs.createWriteStream(file, function(error, data){
if(error){
console.log("Error Thrown");
 throw error
}
if(!file){
 console.log("Sorry file file with name:"+ file +"is found.");
}
console.log("writing to a file");
wstream.write('Hello World!\n');
wstream.write('Another line\n');
wstream.end();
});
