/*
숫자가 주어졌을때, threeFiveMultiples(num) 함수는 해당 숫자보다 작은 3 혹은 5의 배수들의 총합을 반환합니다.

예시: 만약 10이 주어졌다면, 10 보다 작은 3과 5의 배수들은 3, 5, 6, 9 가 있으며
      해당 숫자들을 모두 더하면 23 이 나오므로 여러분이 작성하진 함수는 23 을 반환해야 합니다. 
 */

function threeFiveMultiples(num) {
  // 여기에 코드를 작성하세요

  let temp = new Array(num - 1);
  // num의 길이만큼 배열을 1부터 만든다.
  for (let i = 0; i < num - 1; i++) {
    temp[i] = i + 1;
  }

  // 필터 메소드를 사용해서 조건을, 3으로 나누어 떨어지는 경우와 '혹은' 5로 나누어 떨어지는 경우를 설정한다.
  let filttered = temp.filter((v) => {
    return v % 3 === 0 || v % 5 === 0
  })

  // 리듀스를 사용한다.
  let reduced = filttered.reduce((a,c) => {
    return a + c;
  })

  // 아니면 처음부터 리듀스를 사용해서, 그 안에서 조건을 건다.
  return reduced;
}