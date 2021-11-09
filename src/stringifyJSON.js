// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';
  // Base case
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'string') {
    result += obj;
  }

  if (obj === null || obj === undefined || Number.isNaN(obj) === true || typeof obj === 'function') {
    result += null;
  }

  // If obj is an Array, iterate through Array with forEach loop
  if (Array.isArray(obj)) {
    let resultArray = []


    result += resultArray.join();
  }

  // If obj is an Object, iterate through Object with for in loop

  return result;
};
