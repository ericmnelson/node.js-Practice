var os = require("os");
var message = "Here is some infor about your system";

var sysarray = new Array("Type: " + os.type(),
	"Node Version: " + process.version,
	"Hostname" + os.hostname(),
	"Total Memory: " + os.totalmem(),
	"Free Memory: " + os.freemem(),
	"uptime: " + os.uptime());

console.log(message);

var arrlen = sysarray.length;

for(i in sysarray){
	console.log(sysarray[i])
}


