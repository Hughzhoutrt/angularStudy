class Person {
    private name = "john";
    age = 30;
    saysth() {
        console.log('Hi!');
    }
}

var p = new Person();
p.saysth();

class Child extends Person {
    callParent(){
        super.saysth();
    }
}