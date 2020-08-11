'use strict'
var BasicWindow = require('../BasicWindow');
var Calculator = require('./Calculator');

/**
 * Contructor function for the Calculator applicationm
 * @param options - the settings
 * @constructor
 */
function CalculatorApplication(options) {
  BasicWindow.call(this, options);

  this.application = undefined;
}

CalculatorApplication.prototype = Object.create(BasicWindow.prototype);
CalculatorApplication.prototype.constructor = CalculatorApplication;

/**
 * Function to init the basics
 */
CalculatorApplication.prototype.init = function() {
  this.print();

  // create new application and init it
  this.application = new Calculator(this.element.querySelector('.window-content'), this.element.querySelector('.viewer'));

};

/**
 * Function to print the application
 */
CalculatorApplication.prototype.print = function() {
  BasicWindow.prototype.print.call(this);
  this.element.classList.add('calculator-app');

  var template = document.querySelector('#template-calculator-application').content.cloneNode(true);
  this.element.querySelector('.window-content').appendChild(template);
};

module.exports = CalculatorApplication;
