var fs = require("fs");
var fsWin = null;
var os = require("os").platform();
var semver = require("semver");

var extractedPath = "./vendor";
var path = extractedPath;



// Best to be synchronous for module.exports
fs.readdirSync(path).every( function(file)
{
	if ( semver.satisfies(process.versions.node, file) )
	{
		path += "/" + file;
		
		switch (os)
		{
			case "win32": path+="/x86"; break;
			case "win64": path+="/x64"; break;
			default: path=null;
		}
		
		return false;
	}
	
	return true;
});


if (path && path!=extractedPath)
{
	fsWin = require(path+"/fswin.node");
}



module.exports = fsWin;
