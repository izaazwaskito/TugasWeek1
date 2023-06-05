const mtk = 80
const bahasaIndonesia = "90"
const bahasaInggris = 89
const ipa =  69
const nilai = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
 
    cekGrade = nilai >= 90 && nilai <=100 ? "Grade = A" :
    nilai >= 80 && nilai<=89 ? "Grade = B" :
    nilai >= 70 && nilai<=79 ? "Grade = C" :
    nilai >= 60 && nilai<=69 ? "Grade = D" :
    nilai >= 00 && nilai<=59 ? "Grade = E" :
    "Nilai kurang dari 0 atau lebih dari 100";

    cekVariabel = typeof mtk === "number" && typeof bahasaIndonesia === "number" && typeof bahasaInggris === "number" && typeof ipa === "number" ? console.log(`Rata-Rata = ${nilai} 
    ${cekGrade}`) : "tipe data ada yang tidak sesuai";
    console.log(cekVariabel);
    
