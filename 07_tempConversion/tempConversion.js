const ftoc = function(temperature) {
  var fToCel = (temperature - 32) * 5/9;
  var fToCelRounded = Math.round(fToCel * 10) / 10;
  return fToCelRounded;
};

const ctof = function(temperature) {
  var cToFahr = (temperature * 9/5) + 32;
  var cToFahrRounded = Math.round(cToFahr * 10) / 10;
  return cToFahrRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
