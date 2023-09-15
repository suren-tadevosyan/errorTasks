let studentLabs2 = [
  {
    student: "Blake",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num + num;
    },
  },
];

function gradeLabs(labs, num, expected) {
  try {
    for (const lab of labs) {
      let result = lab.runLab(num);
      if (result !== expected) {
        return "Failure!";
      }
    }
    return "Success! Lab passed ";
  } catch (err) {
    return "Error thrown";
  }
}

console.log(gradeLabs(studentLabs2, 2, 5));
