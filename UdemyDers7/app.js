let kursAdi = "KOMPLE UYGULAMALI WEB GELİŞTİRME EĞİTİMİ..."

let sonuc

sonuc = kursAdi.toLowerCase() 
sonuc = kursAdi.toUpperCase()
sonuc = kursAdi.length
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0,6)
sonuc = kursAdi.slice(6)
sonuc = kursAdi.slice(-10,-6)

sonuc = kursAdi.substring(0,6)
sonuc = kursAdi.substring(10)

sonuc = kursAdi.replace("EĞİTİMİ", "KURSU")



console.log(sonuc)