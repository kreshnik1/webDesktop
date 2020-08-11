'use strict'

/**
 * the constructor
 * @param element - the element in which we ll print / write
 * @constructor
 */
function Calculator(element, resultDOM) {
  this.element = element;
  this.clickFunc = this.click.bind(this);
  // this is a reference to the viewer div of the
  // instance in which we display the calculations
  this.viewResult = resultDOM;
  this.previousNr = 0;
  this.currentNr  = 0;
  this.result = 0;
  this.operator   = null;
  this.addEvents();
};

/**
 * Function to add the events needed
 */
Calculator.prototype.addEvents = function() {
  this.element.addEventListener('click', this.clickFunc);
};

/**
 * Function to remove the events
 */
Calculator.prototype.removeEvents = function() {
  this.element.removeEventListener('click', this.clickFunc);
};

/**
 * Function to handle the clicks
 * @param event - the click-event
 */
Calculator.prototype.click = function(event) {
  if (event.target.tagName === 'BUTTON') {
    // a button was clicked: the click is valid
    this.calculatorClicked(event.target);
  }
};

Calculator.prototype.calculatorClicked = function(element) {
  var btnClicked = element.value;
  if (!isNaN(parseFloat(btnClicked))) {
	  // a number is clicked
	  if (parseFloat(this.currentNr) === 0) {
		  this.currentNr = btnClicked;
	  }
	  else {
		  this.currentNr = parseFloat(this.currentNr.toString() + btnClicked.toString());
	  }
	  
	  
	  this.viewResult.innerHTML = this.currentNr;
  }
  else {
	  // a symbol is clicked we have to figure out what we should do with 
	  // the values
	  switch(btnClicked) {
		  case '+':
			if (this.previousNr !== 0) {
				// the previous nr already holds a value
				this.previousNr += this.currentNr;
			}
			else {
				this.previousNr = this.currentNr;  
			}
			this.currentNr = 0;
			this.operator = '+';
			break;
		  case '-':
			if (this.previousNr !== 0) {
				this.previousNr -= this.currentNr;
			}
			else {
				this.previousNr = this.currentNr;  
			}
			
			this.currentNr = 0;
			this.operator = '-';
			break;
		  case '*':
			if (this.previousNr !== 0) {
				this.previousNr *= this.currentNr;
			}
			else {
				this.previousNr = this.currentNr;  
			}
			this.currentNr = 0;
			this.operator = '*';
			break;
		  case '/':
			if (this.previousNr !== 0) {
				this.previousNr /= this.currentNr;
			}
			else {
				this.previousNr = this.currentNr;  
			}
			this.currentNr = 0;
			this.operator = '/';
			break;
		  case '=':
			// when equal sign is clicked we have to calculate
			// the values in the currentNr and previousNr
			if (this.operator === '+') {
				this.result = parseFloat(this.previousNr) + parseFloat(this.currentNr);
			}
			else if (this.operator === '-') {
				this.result = parseFloat(this.previousNr) - parseFloat(this.currentNr);
			}
			else if (this.operator === '*') {
				this.result = parseFloat(this.previousNr) * parseFloat(this.currentNr);
			}
			else if (this.operator === '/') {
				this.result = parseFloat(this.previousNr) / parseFloat(this.currentNr);
			}
			
			this.viewResult.innerHTML = this.result;
			this.currentNr = this.result;
			this.previousNr = 0;
			break;
		   case 'C':
		    // we reset all the values
			this.viewResult.innerHTML = 0;
			this.currentNr = 0;
			this.previousNr = 0;
			this.result = 0;
			this.operator = null;
	  }
  }
}


module.exports = Calculator;
