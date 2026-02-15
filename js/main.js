"use strict";

let displayValue = '';
const display = document.getElementById('display');

const appendToDisplay = (value) => {
    displayValue += value;
    display.value = displayValue;
}
