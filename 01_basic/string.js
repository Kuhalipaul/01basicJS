const name ="hitesh"
const repoCount=50;

// console.log(name+repoCount+"Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('KUHALI')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('H'));

const newString=gameName.substring(0,4)
console.log(newString);

const anothername=gameName.slice(0,4);

const newStringOne=" kuhali ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhury"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
