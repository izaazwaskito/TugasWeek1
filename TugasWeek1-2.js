const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

if(typeof mtk === "number" && typeof bahasaIndonesia === "number" && typeof bahasaInggris === "number" && typeof ipa === "number"){
    const nilai = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4
    console.log("Rata-Rata = "+nilai)
    if(nilai >= 90 && nilai <=100){
        console.log("Grade = A");
    } else if (nilai >= 80 && nilai<=89){
        console.log("Grade = B");
    }
    else if (nilai >= 70 && nilai<=79){
        console.log("Grade = C");
    }
    else if (nilai >= 60 && nilai<=69){
        console.log("Grade = D");
    }
    else if (nilai >= 00 && nilai<=59){
        console.log("Grade = E");
    }
}else{console.log("tipe data ada yang tidak sesuai")};
