"use strict";

/* 
  for...in
  for in은 객체의 반복을 위해 만들어졌지만, 배열의 반복을 위해서는 추천되지 않는다.
  배열의 경우 forEach(), map(), for...of가 이미 존재한다.

  for in의 경우 객체의 key를 확인할 수 있기 때문에 실질적으로는 디버깅을 위해서 사용할 수 있다.
  객체에 어떤 특정key가 있는지 확인하려고 사용 할 수 있다.
*/

const object = {
  a: 1,
  b: 2,
  c: 3,
};

const array = [10, 20, 30, 40];

for (const property in object) {
  // 첫번째 property는 key가 나오고 object[property]는 value가 나온다.
  console.log(property, object[property]);
  console.log(`key= ${property} value= ${object[property]}`);
}

console.log(`-----------------------`);

/*
  for...of
  for of의 경우 배열의 값을 반복한다.
  for in에 object가 아닌 array를 넣을 경우 index넘버를 구할 수 있다.
*/

// array의 경우 for..of에는 값이 나온다.
// array의 경우 for..in에는 인덱스넘버가 나온다.
for (const property of array) {
  console.log(property);
}

console.log(`------------Object 메서드-----------`);

/* Object 메서드 */

const jasper = {
  name: "yeonghoon Park",
  age: 35,
  birth: 1988,
  gender: "male",
  hand: "ambidextrous",
  residence: "incheon",
  sight: 1.0,
};

// 1. Object.keys(객체), 객체의 키를 배열로 반환
console.log(
  "jasper's keys: ",
  Object.keys({ name: "yeonghoon Park", gender: "male", age: 35 }),
);

// 2. Object.values(객체), 객체의 밸류를 배열로 반환
console.log("jasper's values: ", Object.values({ age: 35, gender: "male" }));

// 3. Object.entries(객체), 객체의 키와 값을 배열로 변환
console.log(
  Object.entries({ age: 35, hand: "ambidextrous", residence: "incheon" }),
);

console.log(`------------Array 메서드-----------`);

/* Array 메서드 */

const fruits = ["apple", 1, "banana", 5, "mango", 11, "grape", 55, "pineApple"];

// 1. forEach(), 배열의 length만큼 반복하여 콜백함수를 호출한다.
fruits.forEach((item) => console.log(item));

// 2. map(), 각 콜백함수에서 return하는 값들로 새로운 배열을 만들어 반환한다.
const mappingFruits = fruits.map((item) => item + "!!");
console.log(mappingFruits);

// 3. filter(), 각 콜백함수에서 return하는 값이 true일 때, value 값들로 새로운 배열을 만들어 반환한다.
const filterFruits = fruits.filter((item) => typeof item === "number");
console.log(filterFruits);

// 4. reduce((accumulator, currentValue, index[optional], array[optional])=>{}, initialValue)
// accumulator(누적값)는 callback함수의 반환값을 누적한다, 누적값은 초기값으로 시작한다.
// currentValue(현재값)는 배열의 현재 요소
// index는 배열의 현재 인덱스
// array는 호출한 배열
// 두번째 아규먼트는 initialValue(초기값), initialValue(초기값)은 설정해주지 않으면 자동으로 0으로 배정된다.
const reduceArray = [1, 2, 3, 4];
const reduceResult = reduceArray.reduce((pv, cv, idx, arr) => {
  return pv + cv;
}, 100);
// 110이 된다, 100(초기값) + 1 + 2 + 3 + 4 = 110
console.log(reduceResult);

console.log(`------------------------------------------`);

const testArray = [1, 2, 3, 4, 5];
const testResult = testArray.reduce((누적값, 현재값, index, array) => {
  console.log("누적값: ", 누적값, "현재값: ", 현재값);
  return 누적값 + 현재값;
}, 0);
console.log(testResult);

console.log(`------------------------------------------`);

// reduce를 활용한 map, 초기값으로 빈 배열을 준다.
const testArray2 = [1, 2, 3, 4, 5];
const testResult2 = testArray2.reduce((누적값, 현재값) => {
  누적값.push(현재값 % 2 ? "홀수" : "짝수");
  return 누적값;
}, []);
console.log("reduce map: ", testResult2);

// reduce를 활용한 filter, 초기값으로 빈 배열을 준다.
const testArray3 = [1, 2, 3, 4, 5];
const testResult3 = testArray3.reduce((accumulator, currentValue) => {
  if (currentValue % 2) accumulator.push("홀수");
  return accumulator;
}, []);
console.log("reduce filter: ", testResult3);

console.log(`------------------------------------------`);
/* for문의 break */
for (let index = 0; index < fruits.length; index++) {
  if (index === 5) break;
  console.log(index);
}

console.log(`------------------------------------------`);

/* for문의 continue */
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) continue; // i가 짝수라면, 다음 반복으로 넘어감 => 홀수만 출력됨
  console.log(index);
}
