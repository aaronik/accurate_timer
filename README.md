### An accurate, multienvironment timer

# Supported environments
* Node.js (All major versions)
* Chrome*
* Firefox*
* IE*
 * Must have requestAnimationFrame supported.  Vendor prefixed is OK.

Based on my own (unscientific) measurements, the timer in a node.js environment tends to be accurate to about 3/1000ths of a second.  In a browser environment it's a little less than 1/1000ths of a second.