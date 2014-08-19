var fsWin = null;
var os = require("os").platform();



if (os == "win64")
{
	fsWin = require("./vendor/x64/fswin.node");
}
else if (os == "win32")
{
	fsWin = require("./vendor/x86/fswin.node");
}



module.exports = fsWin;
