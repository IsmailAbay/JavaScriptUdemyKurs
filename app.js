let ogr1_Ad = "Ada"
let ogr1_Soyad = "bilgi"
let ogr1_dogumTarihi = "2012"
let ogr1_Matematik1 = 70
let ogr_1Matematik2 = 70
let ogr1_Matematik3 = 80
let ogr1_ortalama=(ogr1_Matematik1+ogr_1Matematik2+ogr1_Matematik3) /3;
console.log(parseFloat(ogr1_ortalama))
console.log(typeof ogr1_ortalama)
console.log(ogr1_ortalama >= 50)



let ogr2_Ad = "yigit"
let ogr2_Soyad = "bilgi"
let ogr2_dogumTarihi = "2010"
let ogr2_Matematik1 = 40
let ogr2_Matematik2 = 40
let ogr2_Matematik3 = 50
let ogr2_ortalama=(ogr2_Matematik1+ogr2_Matematik2+ogr2_Matematik3) /3;
console.log(parseFloat(ogr2_ortalama))
console.log(typeof ogr2_ortalama)
console.log(ogr2_ortalama >= 50)



let suankiYil=new Date().getFullYear()

let ogr1_yas=suankiYil - parseInt(ogr1_dogumTarihi)
let ogr2_yas=suankiYil - parseInt(ogr2_dogumTarihi)

console.log(ogr2_yas)
console.log(ogr1_yas)

