const printSegitiga = 9

if(typeof(printSegitiga)== "number"){
    let cetak=''
    for(let i = printSegitiga; i>0; i--){
        for(let j=1;j<=i;j++){
            cetak+= j + ' '
        }
        console.log(cetak) // Mencetak baris ke-j
        cetak=''
    }
}else{
    console.log("Data harus Number")
}