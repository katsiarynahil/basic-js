module.exports = function repeater(str, options) {
  let stringToRepeat = typeof str === "string" ? str : String(str);
  let addition = typeof options.addition === "string" ? options.addition 
                : typeof options.addition === "undefined" ? '' : String(options.addition);
  let separator = (typeof options.separator === 'undefined') ? '+' : options.separator;
  let additionSeparator = (typeof options.additionSeparator  === 'undefined') ? '|' : options.additionSeparator;
  let repeatTimes = (typeof options.repeatTimes  === 'undefined') ? 1 : options.repeatTimes;
  let additionRepeatTimes = (typeof options.additionRepeatTimes  === 'undefined') ? 1 : options.additionRepeatTimes;

  let result = '';
  for(let i = 0; i < repeatTimes; i++){
    result += stringToRepeat;
    for(let j = 0; j < additionRepeatTimes; j++){
      result += addition;
      if(j < additionRepeatTimes - 1){
        result += additionSeparator;
      }
    }
    if(i < repeatTimes - 1){
      result += separator;
    }
  }

  return result;
};
  