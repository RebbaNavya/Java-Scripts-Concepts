//In Javascript Everything is object (methods,fucntions,arrays ,string are all objects by defult in javascript)
//let,const are block scoping its accessed within the function scope only
// var lexical scoping where we can access globally


var name={
    bike:"hero",
    
}


const value={
    name:"navya"
}

//console.log(name);//const are block scoping its accessed within the function scope only

let number={
    num:"12"
}

//console.log(value);//let are block scoping its accessed within the function scope only

console.log(name.bike);