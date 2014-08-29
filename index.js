var fs = require("fs");
var fsWin = null;
var os = require("os").arch();
var semver = require("semver");
var path = require("path");

var extractedPath = path.resolve(__dirname, "vendor");
var vendorPath = extractedPath;



if (process.platform.indexOf("win") == 0)
{
	// Best to be synchronous for module.exports
	fs.readdirSync(vendorPath).every( function(file)
	{
		if ( semver.satisfies(process.versions.node, file) )
		{
			vendorPath = path.join(vendorPath,file);
			console.log("MY Os IS: " + require("os").arch());
			console.log("MY Platform IS: " + require("os").platform());
			switch (os)
			{
				case "x86": vendorPath=path.join(vendorPath,"x86"); break;
				case "x64": vendorPath=path.join(vendorPath,"x64"); break;
				default: vendorPath=null;
			}
			
			return false;
		}
		
		return true;
	});


	if (vendorPath && vendorPath!=extractedPath)
	{
		fsWin = require(path.join(vendorPath,"fswin.node"));
	}
}



module.exports = fsWin;
