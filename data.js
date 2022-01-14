let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//Soal 1

const newData = {...data, name:"Jumelisah",
email : "jumelisa09@gmail.com",
hobbies:["menonton film", "membaca", "traveling"]}
console.log(newData)

//Soal 2
const{street, city} = data.address

console.log(`Address ${street}, ${city}`)
    