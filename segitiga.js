let printSegitiga = 5

if(printSegitiga!==null && printSegitiga!==undefined){
    if(typeof(printSegitiga)== "number"){
        for(let i = printSegitiga; i>0; i--){
            let cetak=''
            for(let j=1;j<=i;j++){
                cetak+= j + ' '
            }
            console.log(cetak) // Mencetak baris ke-j
        }
    }else{
        console.log("Data harus Number")
    }
}else{
    console.log("Data tidak boleh kosong")
}