var Download = require("download");
var progress = require("download-status");



function download(url, callback)
{
	return new Download()
		.get( url, "vendor", {extract:true} )
		.use( progress() )
		.run( callback );
}



function install()
{
	console.log("Latest version:");
	
	// TODO :: cache archive to avoid future downloads
	download("http://xxoo.github.com/node-fswin/fswin.zip", function(error)
	{
		if (error)
		{
			console.error("Error downloading/extracting: "+error);
			installFallback();
		}
		else
		{
			console.log("Latest version installed");
		}
	});
}



function installFallback()
{
	console.log("Archived version:");
	
	download("http://stevenvachon.github.io/fswin-binary/vendor-fallback/fswin.zip", function(error)
	{
		if (error)
		{
			console.error("Error downloading/extracting: "+error);
			process.exit(1);
		}
		else
		{
			console.warn("Archived version installed");
			console.warn("It is recommended to attempt downloading the latest version again in the future");
		}
	});
}



install();
