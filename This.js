const person={
    name:"navya",
    fullname:function(){
        console.log(this.name+"Rebba");
        
    }
}
person.fullname();//navyaRebba(if we call dot method on object it will give result)

const personfullname=person.fullname// we get the reference of person object this to add to personfullname and calling globally
personfullname();//Global Object(IN Nodejs) UndefinedRebba


const personmother={
    name:"vijaya"
}
personmother.fullName=person.fullname;
personmother.fullName()