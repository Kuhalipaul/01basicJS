// function addTwoNumber(number1,number2){
//     console.log(number1,number2);
// }

// function addTwoNumbers(number1,number2){
//     // let result=number1+number2
//     // return result;
//     return number1+number2
// }
// const result=addTwoNumbers(3,5);
// console.log("Result:",result);

// function loginUserMessage(username="kuhu"){
//     if(!username){
//         console.log("please enter the username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("kuhali"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500,600));

const user={
    username:"kuhali",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username:"sam",
    price:3999
})
const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));