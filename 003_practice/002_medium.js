/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  const length = str.length;
  // num = ((num % length) + length) % length;
  return str.slice(-num) + str.slice(0, -num);
}

console.log(rotate("library", 1));
console.log(rotate("library", 3));
console.log(rotate("library", 3));

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  //1
  const vowels = ["a", "i", "u", "e", "o"];

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;

  //2

  // return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("library"));
console.log(removeVowels("apple"));
console.log(removeVowels("banana"));

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  //1
  const word = s1.split(s2);
  return word.length - 1;
}
console.log(countStr("abcdabeabc", "abc"));
console.log(countStr("hogehoage", "hoge"));

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  if (str === "") {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j < str.length; j--) {
      if (str[i] === str[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log(isPalindrome("work"));
console.log(isPalindrome("anna"));

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      i++;
    } else {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumWithout4andNext([1, 2, 3, 4]));
console.log(sumWithout4andNext([4, 4, 1, 2]));

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};
