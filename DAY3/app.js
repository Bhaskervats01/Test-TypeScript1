"use strict";
// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhar?:number        // Optional Keyword:
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const obj:Person = {
//     name:"Bhasker",
//     age:20,
//     gender:"Male",
// }
// // Latest Example:
// interface customer{
//     name:string,
//     age:number,
//     balance:number
// }
// // Type of Objects:[Partial,Required,ReadOnly]
// // 1. Using Keyword Partial:All property becomes optional.
// const obj2:Partial<customer> = {
//     name:"Rohit",
//     balance:210
// }
// // 2. Using Keyword Required:All property should be filled.
// // const obj2:Required<customer> = {
// //     name:"Rohit",
// //     balance:210,
// //     age:20
// // }
// // 3. Using Keyword Readonly: The property can only be read, write option is not allowed.
// // const obj2:Readonly<customer> ={
// //     name:"Mohan"
// // }
// // Array of Objects
// interface people{name:string,age:number};
// interface manager{salary:number,id:string}
// const arr: (people | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18},{salary:20,id:"2321"}]
// // Function in TS
// function greet(a:number):number{
//     console.log(a);
//     return a+5;
// }
// console.log(greet(10));
// function meet(msg:string,val:number){
//     console.log(msg,val);
// }
// meet("Anshika Verma", 4);
// // Default Parameter:
// function neet(msg:string = "Jit"){
//     console.log(msg);
// }
// neet();
// neet("Bittu");
// // Optional Parameter
// function GATE(person?:string){
//     console.log(person||"Mohan");
// }
// GATE("Rohit");
// GATE();
// // Arrow Function:
// const sum = (a:number,b:number):number=>{
//     return a+b;
// }
// console.log(sum(3,4));
// // Callback Function
// type chill = (amount:number)=>void;
// const squareroot = (val:number)=>{
//     return val*val;
// }
// function placeOrder(order:number,Callback: chill):void{
//     const amount:number = order+10;
//     Callback(amount);
// }
// placeOrder(10,(amount)=>{
//     console.log(amount);
// })
// // Rest Parameter:
// function total(...arr:number[]){
//     let ans:number = 0;
//     arr.forEach((val:number)=>ans = ans+val);
//     console.log(ans);
// }
// total(2,3,1,4,123,1,12,10);
// // Extend Keyword
// interface human{
//     name:string,
//     age:number
// };
// interface Teacher{
//     name: string,
//     age:number
// }
// interface Teacher extends human{
//     salary:string,
//     id:number
// }
// interface BankEmployee extends human{
//     salary:string,
//     position:string
// }
// const obj3:Teacher = {
//     name:"Bhasker",
//     age:20,
//     salary:"chillar",
//     id:123
// }
//# sourceMappingURL=app.js.map