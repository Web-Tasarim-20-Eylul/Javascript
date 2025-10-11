// FAKTORİYEL => 5 -> 5 * 4 * 3 * 2 * 1

let x = 0;

let S = 1;

while (x >= 1) {
  S = S * x;
  x = x - 1;
}

if (x < 0) {
  console.log("Hatalı bir sayı girildi");
} else {
  console.log(S);
}
