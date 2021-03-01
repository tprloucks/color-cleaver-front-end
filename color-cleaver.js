const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const color1 = getInput(1);
const color2 = getInput(2);

if (color1 === undefined && color2 === undefined ){
    console.log('no colors provided. Error.')
}

else if (color1 !== undefined && color2 === undefined ){
    const isColorqValid = isValidSecondary(color1);
    if (isColorValid){
        const deconstruction = colorDeconstruction
    }else{
        console.log('Color 1 is not a valid secondary color')
    }
    else{
        const isColor1Valid = isValidPrimary (color1)
        const isColorValid = isValidPrimary(color2)
;
if (isColorV1Valid && isColor2Valid){
    const combination = colorCombinator(color1, color2)
}else {
    console.log('At least on color is not a valid Color')

}
    }
}