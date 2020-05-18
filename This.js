//this reference to the current object

const person={
    name:"navya",
    fullname:function(){
        console.log(this.name+"Rebba");
        
    }
}
person.fullname();//navyaRebba(if we call dot method on object it will give result)

const personfullname=person.fullname// we getting  the reference of person object this to add to personfullname and calling globally
console.log(personfullname)//reference of a function print function
personfullname();//Global Object(IN Nodejs) UndefinedRebba(if strict mode enabled)

//Using bind we get the na
const personfullname2=person.fullname.bind(person)//when we call standalone function outside of an object by defult return to the global
//in node global winfow in object to slove this we use bind
personfullname2();//navyarebba


const personmother={
    name:"vijaya"
}
personmother.fullName=person.fullname;//this copy the greet function in personmother
personmother.fullName()

const newperson={
    name:"ravi",
   surename:()=>{
       console.log(this.name+"rebba")
   }

}
newperson.surename();//undefined rebba bcz if we using arrow fuction its take globally in node window in object


const Detailes={
    name:"navya",
    detailes:function(){
        console.log(this.name+"Rebba");
        
    }
}



//bind,call,apply
const detailesfull=Detailes.detailes.bind({name:"kavya"})
personfullname()//we have call method when we use bind
Detailes.detailes.call({name:"djfh"})//if we use call it directley call we dont call any method
Detailes.detailes.apply({name:"djfhh"})//its also same like call