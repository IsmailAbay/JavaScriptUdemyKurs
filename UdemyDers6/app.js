let ad = "İsmail"
let soyad = "Abay"
let yas = 13
let sehir = "istanbul"

let mesaj = "benim adım " + ad +` ve soyadım ` + soyad + `.` +sehir + `\`da yaşıyorum. ` + "emekliliğe " + (65 - yas) + ` yılım kaldı. `


// backtick 
mesaj = `benim adım  ${ad}  ve soyadım ${soyad}. ${sehir} da yaşıyorum. emekliliğe  ${65 - yas} yılım kaldı`


let emeklilik = (65 - yas > 0) ? "emekliliğe " + (65 - yas) + " yıl kaldı " : "zaten emekli oldunuz."
mesaj = `benim adım  ${ad}  ve soyadım ${soyad}. ${sehir} da yaşıyorum. ${emeklilik}`


console.log(mesaj)