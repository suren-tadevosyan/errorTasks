let word = "hello";
let word2 = "hello2";
let num = 1234;
function reverseString(str) {
  const hasNumber = /\d/;
  try {
    reversedStr = str.split("").reverse().join("");
    if (hasNumber.test(str)) {
      throw new Error("Wrong input");
    }
  } catch (e) {
    reversedStr = str;
    console.log(e.message);
  }

  return reversedStr || str;
}

console.log(reverseString(word));
console.log(reverseString(word2));
console.log(reverseString(num));
