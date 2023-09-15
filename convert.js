// function reverseString(s) {
//     typeof s !== "string"
//     ? console.log("s.split is not a function")
//     : (s = s.split("").reverse().join(""));
//     console.log(s);
//     }

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
