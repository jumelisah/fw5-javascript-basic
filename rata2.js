const nilai = [80,90,89,69]
const [matematika, bahasaIndonesia, bahasaInggris, ipa] = nilai;
let ave
let total = 0
let j = nilai.length
let i = 0
while(i<j){
    if(nilai[i]!==null && nilai[i]!==undefined){
        if(nilai[i]<=100 && nilai[i]>=0){
            total+= nilai[i]
            i++
        }else{
            console.log("Nilai harus diantara 0-100")
            total = null
            i = j
        }
    }else{
        console.log("Nilai tidak boleh kosong!")
        total = null
        i = j
    }
}

if(total){
    ave = total/j
    if(ave>=90){
        grade = "A"
    }else if(ave>=80){
        grade = "B"
    }else if(ave>=70){
        grade = "C"
    }else if(ave>=60){
        grade = "D"
    }else{
        grade = "E"
    }
    console.log(`Nilai Rata-Rata : ${ave}`)
    console.log(`Grade : ${grade}`)
}

