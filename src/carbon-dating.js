const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity === undefined || typeof sampleActivity !== "string"){
    return false;
  }
  
  let activity = parseInt(sampleActivity, 10);
  if(isNaN(activity) || activity > MODERN_ACTIVITY || activity <= 0){
    return false;
  }

  let activitiesRatio = MODERN_ACTIVITY/activity;
  let activitiesLn = Math.log(activitiesRatio);
  let k = 0.693/HALF_LIFE_PERIOD;
  let time = activitiesLn/k;
  return Math.round(time);
  
};
