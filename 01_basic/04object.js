// const tinderUser=new Object();//singleton object
const tinderUser={}//non singleton object

tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);
const regulerUser={
    email:"ahdrsd@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kuhali",
            lastname:"Paul",
        }
    }
}
// console.log(regulerUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}
// const obj3={obj1,obj2};
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const users=[
    {
        id:1,
        email:"hi@gmail.com"
    },
    {
        id:2,
        email:"hello@gmail.com"
    },
    {
        id:3,
        email:"hiiii@gmail.com"
    },
]
// console.log(users[1].email)
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));