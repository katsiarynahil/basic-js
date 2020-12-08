module.exports = function transform(arr) {
  
  if(!Array.isArray(arr)){
    throw new Error();
  }

  let medium = [...arr];
  let transformedArray = [];
  let resultingIndex = 0;

  for(let i = 0; i < medium.length; i++){
    let element = medium[i];

    switch(element){
      case '--discard-next':
        if(i + 1 < medium.length){
          medium.splice(i + 1);
        }
        transformedArray.push(element);
        break;
      case '--discard-prev':
          transformedArray.pop();
        break;
        transformedArray.push(element);
      case '--double-next':
        if(i+1 < medium.length){
          let elementToDouble = medium[i+1];
          medium.splice(i+1, 0, elementToDouble);
        }
        transformedArray.push(element);
        break;
      case '--double-prev': 
        if(i-1 >= 0){
          let elementToDouble = transformedArray[transformedArray.length-1];
          transformedArray.push(elementToDouble);
        }  
        transformedArray.push(element);     
        break;
      default:
        transformedArray.push(element);
    }
  }
  let result = transformedArray.filter(element => element != '--discard-next' && element != '--discard-prev' && element != '--double-next' && element != '--double-prev');
  return result;
};