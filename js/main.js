num1 = +prompt("minimum sonni kiriting");
num2 = +prompt("maximum sonni kiriting");

function myRandom(min, max) {
  let num = Math.floor(Math.random() * (max + 1 - min) + min);
  return num;
}

for (let i = 0; i < 6; i++) {
  let number1 = myRandom(num1, num2);
  let number2 = myRandom(num1, num2);
  if (i == 1) {
    let pr = +prompt(number1 + " + " + number2 + " = ?");
    let answer =
      number1 + number2 == pr
        ? "To'g'ri"
        : "Xato " + "To'gri javob " + (number1 + number2);
    console.log(answer);
  } else if (i == 2) {
    let pr = +prompt(number1 + " - " + number2 + " = ?");
    let answer =
      number1 - number2 == pr
        ? "To'g'ri"
        : "Xato " + "To'gri javob " + (number1 - number2);
    console.log(answer);
  } else if (i == 3) {
    let pr = +prompt(number1 + " * " + number2 + " = ?");
    let answer =
      number1 * number2 == pr
        ? "To'g'ri"
        : "Xato " + "To'gri javob " + number1 * number2;
    console.log(answer);
  } else if (i == 4) {
    let pr = +prompt(number1 + " / " + number2 + " = ?");
    let answer =
      number1 / number2 == pr
        ? "To'g'ri"
        : "Xato " + "To'gri javob " + number1 / number2;
    console.log(answer);
  } else if (i == 5) {
    let pr = +prompt(number1 + " % " + number2 + " = ?");
    let answer =
      number1 % number2 == pr
        ? "To'g'ri"
        : "Xato " + "To'gri javob " + number1 % number2;
    console.log(answer);
  }
}
