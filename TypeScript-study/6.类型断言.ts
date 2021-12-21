function getAssert (name:string|number) {
    return (<string>name).length;
}


//In jsx, we must use this method:
function getAssert1 (name:string|number) {
    return (name as string).length;
}