// bir dizideki tek sayıların ve çift sayıların ayrı ayrı toplamlarını ekrana yazdıran program

var sayiDizisi = [1, 3, 4, 4];

var ciftSayilarToplami = 0;
var tekSayilarToplami = 0;

for (var sayac = 0; sayac < sayiDizisi.length; sayac++) {
  if (sayiDizisi[sayac] % 2 == 0) {
    ciftSayilarToplami += sayiDizisi[sayac];
  } else {
    tekSayilarToplami += sayiDizisi[sayac];
  }
}

console.log("Çift sayılar toplamı: ", ciftSayilarToplami);
console.log("Tek sayılar toplamı: ", tekSayilarToplami);
