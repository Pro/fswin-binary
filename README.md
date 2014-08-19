# fswin-binary [![NPM Version](http://badge.fury.io/js/fswin-binary.svg)](http://badge.fury.io/js/fswin-binary) [![Build Status](https://secure.travis-ci.org/stevenvachon/fswin-binary.svg)](http://travis-ci.org/stevenvachon/fswin-binary) [![Build status](https://ci.appveyor.com/api/projects/status/x8k9dsmkwjahan45)](https://ci.appveyor.com/project/stevenvachon/fswin-binary) [![Dependency Status](https://david-dm.org/stevenvachon/fswin-binary.svg)](https://david-dm.org/stevenvachon/fswin-binary)

> Use [fswin](https://npmjs.org/package/fswin) without Visual C++ (Node.js)

## Getting Started

[Node.js](http://nodejs.org/) `~0.10` is required. To install, type this at the command line:
```
npm install fswin-binary --save-dev
```

### Usage
```js
var fsWin = require("fswin-binary");

if (process.platform.indexOf("win") == 0) {
	fsWin.setAttributes(pathToFileOrDir, attributes, function(success) {
		console.log(success);
	});
} else {
	console.log(fsWin);	//=> null
}
```
