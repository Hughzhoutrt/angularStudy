var muchtype:string|number = "hello";
// only can use the built-in method which works for both types
//i.g., muchtype.length is not working, we need to add toString() for muchtype then use length
muchtype = 10;

//declaire port
//Situation 1
interface Istate {
    name:string;
    age:number;
}

var obj1:Istate;
obj1 = {name:'john' , age:20};

//Situation 2
interface Istate2 {
    name:string;
    age?:number;
}

//Situation 3
var obj2:Istate2;
obj2 = {name:'john'};

interface Istate3 {
    name:string;
    age?:number;
    [property:string]:any;
}

var obj3:Istate3;
obj3 = {name:'john', gender:'male'};

//READ-ONLY
interface Istate4 {
    name:string;
    readonly age:number;
}

var obj4:Istate4;
obj4 = {name:'john', age:1};