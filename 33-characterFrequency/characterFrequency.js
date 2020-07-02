/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let result;

  let array = string.split("");
  let test = array.reduce((a, c) => {
    if (a[c]) {
      a[c]++;
      return a;
    } else {
      a[c] = 1;
      return a;
    }
  }, {});
  // console.log(test);

  //객체에서 값(숫자) 오름차순으로 만들기
  let numUp = Object.values(test);
  numUp.sort((a, b) => {
    return b - a;
  });
  // console.log(numUp);

  //객체에서 키(문자) 내림차순으로 만들기
  let strDown = Object.keys(test);
  // console.log(strDown);
  strDown.sort((a, b) => {
    return a.localeCompare(b);
  });

  //배열 집 만들기
  let resultArray = new Array(numUp.length);
  // console.log(resultArray);

  //배열 호실 만들기 + for문 돌면서 값 채워넣기 + 채운 값들을 집에다가 호실 넣기
  for (let i = 0; i < numUp.length; i++) {
    let roomArray = new Array(2);
    roomArray[1] = numUp[i];
    //여기서 시작 하면 됨. 객체에서 키 뽑아서 numUp이랑 비교해서 같은 게 나오면 바로
    //roomArray에 넣으면 됨.
    resultArray[i] = roomArray;

  }
  console.log("리절트", resultArray);



  return result;
};
