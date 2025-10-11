// bir array'deki sayıları toplayan programı yazınız.
// toplamı ekrana yazdıralım

// myArray[0] -> 11
// myArray[1] -> 2
// myArray.length -> 6

let myArray = [11, 2, 3, 4, 9, 13, 58, 100];

let toplam = 0;

for (let sayac = 0; sayac < myArray.length; sayac++) {
  toplam = toplam + myArray[sayac];
}

console.log(toplam);

// sayac    -> 0  1  2  3
// toplam   -> 0 11 13 16
