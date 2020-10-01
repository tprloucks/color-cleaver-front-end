/******************
 * YOUR CODE HERE *
 ******************/


function isValidSecondary(color) {
  return color === 'orange' || color === 'green' || color === 'purple';
}




// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
