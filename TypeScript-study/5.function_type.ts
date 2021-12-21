//function declaration
function functionType(name:string, age:number):number {
    return age;
}

var numberAge:number = functionType('john', 18);
//
function functionType1(name:string, age:number, gender?:string):number {
    return age;
}

var numberAge:number = functionType1('john', 18);
//
function functionType2(name:string = 'john', age:number, gender?:string):number {
    return age;
}



//function expression
var functionType4 = function(name:string, age:number){
    return age;
}

var functionType5:(name:string, age:number)=>number = function(name:string, age:number){
    return age;
}   

interface functionType6 {
    (name:string, age:number):number;
}

var newFunction6:functionType6 = function(name:string, age:number):number{
    return age;
}

function getValue(value:string):string {
    return value;
}
function getValue2(value:string|number):string|number {
    return value;
}

let aa:string = getValue('hi');

let a:number|string = getValue2(1);