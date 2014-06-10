(function(root){

	var Timer = root.Timer = function(callback, interval){
		if (window) {
			this.type = 'requestAnimationFrame';
			this.raf = 		window.requestAnimationFrame 
								|| 	window.mozRequestAnimationFrame
								|| 	window.webkitRequestAnimationFrame
								|| 	window.msRequestAnimationFrame;
		} else {
			this.type = 'setInterval';
		}

		this.timer = null;
		this.callback = callback;
		this.interval = interval;
	}

	Timer.prototype.start = function(){
		var that = this;

		switch (this.type) {
			case 'requestAnimationFrame':
				that._startRAF();
				break;
			case 'setInterval':
				that._startSI();
				break;
		}
	}

	Timer.prototype.stop = function(){
		if (this.animationFrame) {
			window.cancelAnimationFrame(this.animationFrame);
			delete this.animationFrame;
		} else if (this.intervalTimer) {
			clearInterval(this.intervalTimer);
			delete this.intervalTimer;
		}
	}

	Timer.prototype._startRAF = function(){
		if (!this.raf) throw(new Error('Trying to use non-existent requestAnimationFrame'));

		this._lastTimestamp = performance.now()
		this.raf.call(window, this._stepRAF.bind(this))
	}

	Timer.prototype._stepRAF = function(timestamp){
		var elapsedTime = performance.now() - this._lastTimestamp

		if (elapsedTime >= this.interval){
			this._lastTimestamp = this._lastTimestamp + this.interval;
			this.callback(performance.now());
		}

		this.animationFrame = this.raf.call(window, this._stepRAF.bind(this));
	}

	Timer.prototype._startSI = function(){
		this._lastTimestamp = (new Date).getTime()
		var that = this;

		this.intervalTimer = setInterval(function(){
			var elapsedTime = (new Date).getTime() - that._lastTimestamp;

			if (elapsedTime >= that.interval) {
				that._lastTimestamp = that._lastTimestamp + that.interval;
				that.callback((new Date).getTime());
			}
		}, 1)
	}

	return Timer

})(this);

window.t = new this.Timer(function(time){console.log(time)}, 1000)