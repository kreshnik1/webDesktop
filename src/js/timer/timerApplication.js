var BasicWindow = require('../BasicWindow');
var timerMain = require('./timerMain');

function timerApplication(options) {
    BasicWindow.call(this, options);
	this.application = undefined;
}

timerApplication.prototype = Object.create(BasicWindow.prototype);
timerApplication.prototype.constructor = timerApplication;
//init 
timerApplication.prototype.init = function() {
	this.print();
	this.application = new timerMain(this.element.querySelector('.window-content'),this.element.querySelector('h1'));
}

timerApplication.prototype.print = function() {
	BasicWindow.prototype.print.call(this);
    this.element.classList.add("timer-app");
	var template = document.querySelector('#template-timer-application').content.cloneNode(true);
	this.element.querySelector('.window-content').appendChild(template);
}

module.exports = timerApplication;
