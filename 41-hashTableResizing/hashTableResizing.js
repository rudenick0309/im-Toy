/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  result.insert = function(v, storageLimit
){
    // TODO: implement `insert`
    if (storage.length + 1 >= (storageLimit * 0.75)) {
      result.resize(storageLimit * 2);
    }

    let hash = getIndexBelowMaxForKey(v, storageLimit);

    if (result[hash]) {
      result[hash].push(v);
    } else {
      result[hash] = [v];
    }
    return v;
  };

  result.retrieve = function(/*...*/ 
){
    // TODO: implement `retrieve`
  };

  result.remove = function(/*...*/ 
){
    // TODO: implement `remove`
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
