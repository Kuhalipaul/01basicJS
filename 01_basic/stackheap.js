// memory two type :->
// 1. stack memory(primitive(copy)) 2.heap memory(non-primitive(reference original value))

let myYoutubename="kuhalipaul"

let anothername= myYoutubename

anothername="chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne={
    email:"kuhalipaul1999@gmail.com",
    upi:"user@ybl"
}
let userTwo= userOne

userTwo.email="paulkua@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
