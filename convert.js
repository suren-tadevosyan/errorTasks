function reverseString(str) {
  try {
    str = str.split("").reverse().join("");
    return str;
  } catch (err) {
    return err.message;
  }
}

console.log(reverseString("hello"));
console.log(reverseString(123));
