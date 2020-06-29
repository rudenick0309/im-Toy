/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  console.log(arr);
  let arrToObject = arr.reduce((a, c) => {
    if (a[c]) {
      a[c]++;
      return a;
    } else {
      a[c] = 1;
      return a;
    }
  }, {});
  console.log("객체", arrToObject);

  for (let key in arrToObject) {
    if (arrToObject[key] % 2 === 0) {
      console.log(typeof key);
      if (typeof Number(key)) {
        return key;
      } else {
        return Number(key);
      }
    }
  }
};