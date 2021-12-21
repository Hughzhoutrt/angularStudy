function output (message) {
    console.log(message);
};

const message1 = "hello wolrd";

output(message1);

function doSomething () {
    for (var i = 0 ; i < 5; i ++ ) {
        console.log(i);
    }
    console.log('Finally' + i);
}

doSomething();

let count = 5; 
count = 'a';

let a:number ;
a = 5;
a = 'd';

enum Color {Red = 0, Yellow = 1, Blue =2};
let background = Color.Red;

let message2;
message2 = 'abc';
let endsWithC = (<string>message2).endsWith('c');
let alternativeWay = (message2 as string).endsWith('c');

interface Pointer {
    x:number,
    y:number
}

let drawPoint = (point:Pointer) => {
    //
}

drawPoint({
    x:1,
    y:2
})