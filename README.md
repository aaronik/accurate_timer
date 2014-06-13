# An accurate, multienvironment timer
##### accurate_timer uses requestAnimationFrame() and performance.now(), defaulting to setInterval if it's used in a non-browser environment.

## Supported environments
* Node.js (All major versions)
* Chrome*
* Firefox*
* IE*

```no-highlight
 * Must have requestAnimationFrame supported.  Vendor prefixed is OK.
```

Based on my own (unscientific) measurements, the timer in a node.js environment tends to be accurate to about 3/1000ths of a second.  In a browser environment it's a little less than 1/1000ths of a second.
