let arr = [40, 72, 67, 59, 93, 8000];

// (40 + 72 + 67 + 59 + 93) / 5;

var toplam = 0;
var gecerliSayiMiktari = 0;

for (let sayac = 0; sayac < arr.length; sayac++) {
  if (0 <= arr[sayac] && arr[sayac] <= 100) {
    toplam += arr[sayac];
    gecerliSayiMiktari++;
  }
}

console.log(toplam / gecerliSayiMiktari);
