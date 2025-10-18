let meyveler = ["elma", "armut", "muz"];
let agaclar = ["söğüt", "çam", "çınar", "meşe", "zeytin"];
let sayilar = [14, 27, 35, 49, 51];

// ARRAY METOTLARI (DÖGÜLER İLE)

// FOR EACH

// sayilar.forEach((sayi) => console.log(sayi * sayi));

// MAP

// agaclar.map((item) => console.log(item + " ağacı"));

sayilar.map((meyve, idx) => {
  console.log("Meyvem: ", meyve);
  console.log("Anlık İndex: ", idx);
});
