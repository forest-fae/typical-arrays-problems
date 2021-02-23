
exports.min = function min (array) {
  if(array === undefined) {
    return 0;
  } else if(array.length === 0) {
    return 0;
  };
let res = array.sort((a, b) => a - b);
  return res[0];
  };

exports.max = function max (array) {
  if(array === undefined) {
    return 0;
  } else if(array.length === 0) {
    return 0;
  };
  let sortedArr = array.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1];
  };

exports.avg = function avg (array) {
  if(array === undefined) {
    return 0;
  } else if(array.length === 0) {
    return 0;
  };
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  let averageMean = sum / array.length;
  return averageMean;
  };

