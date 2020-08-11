'use strict'

function timerMain(element,resultDOM) {
	this.element = element;	
	this.clickFunc = this.click.bind(this);
	this.h1 = resultDOM;
    this.seconds = 0;
	this.minutes = 0;
	this.hours = 0;
    this.t;
	this.running = false; 
	this.addEvents();
}

/**
 * Function to add the events needed
 */
timerMain.prototype.addEvents = function() {
	this.element.addEventListener('click', this.clickFunc);
};
/**
 * Function to check if the button is clicked
 */
timerMain.prototype.click = function(event) {
		
	if (event.target.tagName === 'BUTTON') {
		this.buttonClicked(event.target);
	}	
}

timerMain.prototype.buttonClicked = function(elements){
	var btnClicked = elements.value;
	if(btnClicked === 'start'){
		this.start();
	}
	else if(btnClicked === 'stop'){
		this.stop();
	} 
	else {
		this.clear();
	}
};


timerMain.prototype.timer = function(){
	this.t = setTimeout(this.add.bind(this),1000);
}

timerMain.prototype.add = function() {
	this.seconds +=1;
	if (this.seconds >= 60) {
		this.seconds = 0;
		this.minutes++;
		if (this.minutes >= 60) {
			this.minutes = 0;
			this.hours++;
		}
    }
	
	//this.h1.textContent=l.toString();
    this.h1.textContent = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds);
    this.timer();

};

/*Start button*/
timerMain.prototype.start = function(){
	if (this.running === false) {
		this.running = true;
		this.add();	
	} else {
		return;
	}
	
};

/* Stop button */
timerMain.prototype.stop = function() {
	this.running = false;
	clearTimeout(this.t);
};

/* Clear button */
timerMain.prototype.clear = function() {
	this.running = false;
	this.h1.textContent = "00:00:00";
	this.seconds = 0; this.minutes = 0; this.hours = 0;
};

module.exports = timerMain;	
