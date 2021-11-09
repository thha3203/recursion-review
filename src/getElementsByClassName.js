// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // result
  var result = [];

  // innerFunction
  var innerFunction = function(element) {
    // iterate through the element
    var children = element.childNodes;
    children.forEach(function(child) {
      if (child.classList && child.classList.contains(className)) {
        result.push(child);
      }
      if (child.childNodes) {
        innerFunction(child);
      }
    });
  };

  // invoke innerFunction
  innerFunction(document);

  // return result
  console.log(result);
  return result;
};
