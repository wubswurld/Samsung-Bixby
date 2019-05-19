// RollDice
// Rolls a dice given a number of sides and a number of dice

// Main entry point
  var win = 0;
module.exports.function = function rollDice(numDice, numSides) {

  var sum = 0;
  var result = [];

  for (var i = 0; i < numDice; i++) {
    var roll = Math.ceil(Math.random() * numSides);
    result.push(roll);
    sum += roll;
  }
  if (sum === 1 || sum === 3 || sum === 5 || sum === 6 || sum === 8 || sum === 9 || sum === 10) {
      win += 1;
  }
  // RollResult
 return {
    sum: sum,// required Sum
    roll: result, // required list Roll
    win: win,
  }
}
