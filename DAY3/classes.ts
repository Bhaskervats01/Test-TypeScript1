// Classes in TS:
class Person{
    name:string;
    age:number;

    constructor(n1:string,n2:number){
        this.name = n1;
        this.age = n2;
    }


greet():void{
console.log(`hi ${this.name}`);
}

}

// Blueprint of an object

const obj1 = new Person("Rohit",20);
const obj2 = new Person("Nitin",11);
console.log(obj1);
console.log(obj2);

console.log(obj1.name)
obj1.greet();

// public private protected:

class Customer{
    // public name:string; // public we can access out of class:
    // private age:number;   // private and protected we can not access out of class:
    // protected balance:number;
    name:string;
    age:number;
    balance:number;

    constructor(name:string,age:number,balance:number){
    this.name = name;
    this.age = age;
    this.balance = balance
    }

    meet():number{
        this.age = this.age+10;
        return this.age;
    }
}

const P1 = new Customer("Deepak",20,420);
console.log(P1);
console.log(P1.name);
console.log(P1.meet());
//console.log(P1.age);
//console.log(P1.balance);

// Example2

class Employee extends Customer{
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,salary);  // super class is used call 
        this.salary = salary;
    }
}

const E1 = new Employee(420,"Rohit",20,450);
console.log(E1);

// Generics: Template

// function value(a:(number | string | number[] | boolean)):(number|string|number[]|boolean){
//     return a;
// }

function value<T>(a:T):T{
    return a;

}

console.log(value(10));
console.log(value("Rohit"));
console.log(value([10,12,13,14,15]));
console.log(value(true));
