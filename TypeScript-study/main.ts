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