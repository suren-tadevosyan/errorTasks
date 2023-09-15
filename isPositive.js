function isPositive(num) {
  try {
    if (num === 0) {
      throw new Error("Zero error!");
    }

    if (num < 0) {
      throw new Error("Negative error!");
    }

    return "YES";
  } catch (err) {
    return err.message;
  }
}

console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-5));
