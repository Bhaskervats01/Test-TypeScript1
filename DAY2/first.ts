let num:number = 10;

let x = 10;
x = 20;

let money:any;

money = 20;
money = "Rohit";
console.log(money.toUpperCase());

let val2:unknown;
val2 = 20;

if(typeof val2 ==='string')
    console.log(val2.toUpperCase());
if(typeof val2 ==='number')
    console.log(val2.toFixed(2));

val2 = "Rohit";

//  Non Primitive Data Type:

// 1.Array

let arr:number[] = [2,4,5,7,11];
let arr2 = [2,3,4,5,8];

let arr3:(string | number)[] = ["Rohit",20,11,"Sohan"];
arr3.push(10);

// 2.Tuples
let tuple:[string,number] = ["Rohit",10];

// 3. Objects
// Inline
let obj1:{name:string,age:number,gender:string} = {
    name:"Bhasker",
    age:20,
    gender:"male"
};


let person:{name:string;age:number,balance:number};
person = {
    name:"Rohit Sharma",
    age:20,
    balance:420
};

let n1:number;
n1 = 10;

// 4.Alices

type customer = {
    name:string,
    age:number,
    id:string
}

let c1 : customer = {
    name:"Bhasker",
    age:20,
    id:"abc"
}

// 5.Very Important uses of Interface:

interface admin{
    name:string,
    age:number,
    position:string
};

interface admin{
    id:number
}

let obj3:admin ={
    name:"Rohit",
    age:20,
    position:"Manager",
    id:520                 // Merging 
};