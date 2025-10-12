// Herhangi bir stringi tersten yazdıran program
/*
 Yorum satırı
*/

let isim = "bedirhan";

let strSonHali = "";

for (let i = isim.length - 1; i >= 0; i--) {
  strSonHali += isim[i];
}

console.log(strSonHali);
