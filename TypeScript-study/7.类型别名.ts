var str:string|number = 10;

type strType = string|number|boolean;
var str1:strType = '10';
str1 = 10;
str1 = true;


interface muchType1 {
    name:string;
}

interface muchType2 {
    age:number;
}

type muchType = muchType1|muchType2;
var obj:muchType = {name:'john'};
var obj:muchType = {age:111};

type name = "john"|"bob"|"herry";
function getName (n:name):string {
    return n;
}