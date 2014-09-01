var file  = require("fs");
console.log("Starting....");

file .readFile("csv.txt", function(error,data){
	if(error) throw error;
	console.log("Contents" + data);

});
console.log("Keep Going");
