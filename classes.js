const student={
    fullName:"Sunder",
    marks :95,
    printName : function(){
        console.log("Name : ",this.fullName);
    },

};
console.log(student);



//classess and objects
const toyota={
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop");
    },
}

let fortuner= new toyota();
let lexsus = new toyota();
