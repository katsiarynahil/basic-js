
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let speedInSeconds = turnsSpeed/3600;
  let seconds = Math.floor(turns/speedInSeconds);
  return { turns: turns, seconds: seconds }
};
