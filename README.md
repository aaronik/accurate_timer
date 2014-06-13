# An accurate, multienvironment timer
##### accurate_timer uses requestAnimationFrame() and performance.now(), defaulting to setInterval if it's used in a non-browser or older environment.

Based on my own (unscientific) measurements, the timer in a node.js environment tends to be accurate to about 3/1000ths of a second.  In a browser environment it's a little less than 1/1000ths of a second.

## Usage
* Create a timer object:
	```js
	var timer = new Timer(<callback>, <interval>);
	```

	The callback will be called every `interval` milliseconds.

* start / stop the timer:
	```js
	timer.start();
	timer.stop();
	```

All done!  I hope you enjoy :blush: