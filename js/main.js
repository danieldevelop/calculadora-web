"use strict";

import { clearDisplay } from './utils.js';

let displayValue = '';
const display = document.getElementById('display');

const appendToDisplay = (value) => {
    displayValue += value;
    display.value = displayValue;
}

const clearDisplay = () => {
    displayValue = '';
    display.value = displayValue;
}

const calculate = () => {
    try {
        displayValue = eval(displayValue);
        display.value = displayValue;
    } catch (error) {
        display.value = 'Error';
    }
}
