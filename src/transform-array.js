module.exports = function transform(arr) {
  
  if(!Array.isArray(arr)){
    throw new Error();
  }

  let medium = Array.from(arr);
  let transformedArray = [];

  for(let i = 0; i < medium.length; i++){
    let element = medium[i];

    switch(element){
      case '--discard-next':
        discardNextElement(medium, i);
        break;
      case '--discard-prev':
        discardPreviousElement(transformedArray, medium, i);
        break;
      case '--double-next':
        doubleNextElement(medium, i);
        break;
      case '--double-prev': 
        doublePreviousElement(transformedArray, medium, i);
        break;
      default:
        transformedArray.push(element);
    }
  }
  return transformedArray;
};


function discardNextElement(medium, i){
  if(medium.length > i + 1){
    medium.splice(i + 1, 1);
  }
}

function discardPreviousElement(transformedArray, medium, i){
  let badPreviousElements = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if(!badPreviousElements.includes(medium[i - 1])){
    transformedArray.pop()
  }
}

function doubleNextElement(medium, i){
  if(i + 1 < medium.length){
    medium.splice(i+1, 0, medium[i + 1]);
  }
}

function doublePreviousElement(transformedArray, medium, i){
  let badPreviousElements = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if(i - 1 >= 0 && i - 1 < medium.length){
    if(!badPreviousElements.includes(medium[i - 1])){
      transformedArray.push(medium[i - 1]);
    }
  }
}