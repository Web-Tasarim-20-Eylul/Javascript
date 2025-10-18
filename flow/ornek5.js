let agaclar = ["çam", "çınar", "meşe", "sedir", "çınar", "kavak", "zeytin"];

let silinecekEleman = "çınar";
let dongununTekrarSayisi = 0;

for (let i = 0; i < agaclar.length; i++) {
  dongununTekrarSayisi++;
  let idx = agaclar.indexOf(silinecekEleman);
  if (idx === -1) {
    break;
  }

  agaclar.splice(idx, 1);
}

console.log("Döngü Tekrar Sayısı: ", dongununTekrarSayisi);
console.log(agaclar);
