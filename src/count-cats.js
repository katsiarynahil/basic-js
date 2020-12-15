module.exports = function countCats(arr) {

  let matrix = [].concat(...arr);

  return matrix.filter(str => str == '^^').length;
};
