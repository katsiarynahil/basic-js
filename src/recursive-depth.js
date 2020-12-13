
module.exports = class DepthCalculator {  
  
  calculateDepth(arr) {

    let depth = 1
    let depthArray = []

    let onlyArrays = arr.filter(element => Array.isArray(element));

    for(let innerArr of onlyArrays){
      let innerDepth = this.calculateDepth(innerArr);
      depthArray.push(innerDepth);
    }
    return depthArray.length === 0 ? depth : Math.max(...depthArray) + depth;
  }
};