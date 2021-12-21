var arr:number [] = [1,2,3,4,5];
var arr1:string [] = ['1','2'];

var arr2:Array<string> = ['1', '2'];


interface Istate1 {
    username1:string,
    age:number
}

interface IArray {
    [index:number]:number;
}

interface IArray2 {
    [index:number]:Istate1;
}

var array3:IArray =[1,2,3];

var array4:IArray2 = [{username1:'john', age:1}];

var array5:Array<Istate1> = [{username1:'john', age:1}];