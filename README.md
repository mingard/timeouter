<!-- # timeouter [![Build Status](https://secure.travis-ci.org/tkellen/node-matchdep.png?branch=master)](http://travis-ci.org/tkellen/node-matchdep) -->

> Create and manage repeating tasks

## Getting Started

```shell
[sudo] npm install timeouter --save
```

## Examples

```js

//Start a basic repeating log
var func = timeouter.add({
	func: function() {
		console.log("Repeating event")
	},
	timeout: 1000
})

//Call another method
var func = timeouter.add({
	func: yourMethod,
	timeout: 1000
})

//Call with a function declaration
var func = timeouter.add({
	func: function() {
		yourMethod("Hello World!");
	},
	timeout: 1000
})

//Stop the repeater
func.remove();

//Call the repeater method as a one-off
func.method();

//Get list of all running timers
timeouter.get();

```

## Usage

```js

var timeouter = require('timeouter');

```

---
Copyright (c) 2015 Arthur Mingard. See LICENSE for further details.
