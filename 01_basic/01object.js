// 1->literals
//  2->constracter[singleton]

//singleton
// Object.create

// Object literals
const mySym=Symbol("key1");


const JsUser={
    name:"Kuhali",
    age:18,
    [mySym]:"myKey1",
    location:"Kolkata",
    email:"paulkuhali99@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);
// myArray=["k","U","I"]

// JsUser.email="khusgh@gmail.com"
// Object.freeze(JsUser)
// JsUser.email="khug@gmail.com"
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());