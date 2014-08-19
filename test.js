var expect = require("chai").expect;
var fsWin  = require("./");

var windows = process.platform.indexOf("win") == 0;

var describe_unixOnly    = eval( !windows ? "describe" : "describe.skip" );
var describe_windowsOnly = eval(  windows ? "describe" : "describe.skip" );



describe_unixOnly("Unix", function()
{
	it("should not load", function(done)
	{
		expect(fsWin).to.be.null;
		done();
	});
});



describe_windowsOnly("Windows", function()
{
	it("should load", function(done)
	{
		expect(fsWin).to.be.not.null;
		expect(fsWin.setAttributes).to.be.a("function");	// randomly chosen function
		done();
	});
});
