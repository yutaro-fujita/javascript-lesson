//Q1
let nickname = 'ゆーたろー';
let age = 78;
let text = '私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。';
console.log(text);

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
sumAge = 0;
for (i = 0; i < playerList.length; i++) {
  sumAge += playerList[i].age;
}
avrAge = sumAge / playerList.length;
console.log(avrAge);

//Q6
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
}
sayWorld();

//Q7
user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function() {
  console.log('Hello!');
};
user.sayHello();

//Q8
let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(20, 10);

calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(30, 6);

//Q9
calc.remainder = function(x, y) {
  //console.log(x % y);
  return x % y;
}
let varX = 5;
let varY = 3;
console.log(varX + 'を' + varY + 'で割った余りは' + calc.remainder(varX, varY) + 'です。');

//Q10
/*
console.log(x);
の記述箇所は変数xのスコープ外だから、というのが直接の理由です。

関数foo()の定義の内部で変数xを宣言した場合、
変数xを関数foo()の定義の外部で参照することはできません(ローカル変数)。
このような変数の有効範囲のことをスコープと呼びます。

よってこの場合の
console.log(x);
は、
let x = 1
のような宣言が無いまま、いきなり変数xを使用したのと同じ結果になります。
*/