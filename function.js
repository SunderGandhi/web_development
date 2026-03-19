function names(){
    console.log("Sunder");
    console.log("Hello world");
}
names();
function sum(num1,num2){
    let d=num1-num2;
    console.log(num1+num2);
    return d

}

let val=sum(56,78);
console.log(val);

//arrow functions
const sum1=(a,b)=>{
    console.log(a+b);
}
sum1(4,5);
const mul=(a,b)=>{
    console.log(a*b);
}
mul(4,5);
const div=(a,b)=>{
    return a/b;
};
let c=div(20,4);
console.log(c);
/*
function vowCount(word){
    let count=0;
    for(const i of word){
        if(i=="a"|| i=="e"|| i=="o"||i=="i"||i=="u"){
            count=count+1;
        }
        
        
    }
    console.log(count);
}

const vowCountArrow=(word)=>{
    let count=0;
    for(const i of word){
        if(i=="a"|| i=="e"|| i=="o"||i=="i"||i=="u"){
            count=count+1;
        }
        
        
    }
    console.log(count);
}
let word=prompt("Enter the word");
vowCount(word);
vowCountArrow(word);
*/

//for each
let arr=[2,4,6,7,8];
arr.forEach((val)=>{console.log(val);});
arr.forEach((val)=>{console.log(val*val);});

//map
let nums=[1,2,3,4,5,6,7,8,9,10];
let newArr=nums.map((val)=>{console.log(val*val);});


//filter
let newArr1=nums.filter((val)=>{
    return val%2==0;
});
console.log(newArr1);

//reduce
let number=[1,2,4,5];
let comd=number.reduce((res,curr)=>{
    return res+curr;
});
console.log(comd);

//to find thr largest number using reduce
const out=number.reduce((res,cur)=>{
    return res>cur?res:cur;
});
console.log(out);

//Problems
let marks=[54,67,90,91,67,46,98];
let grade_A=marks.filter((vals)=>{
    return vals>=90;
});
console.log(grade_A);


//problem-2
let n=prompt("Enter the size of array");
let array=[];
for(i=1;i<=n;i++){
    array[i-1]=i;
}

console.log(array);

let addition=array.reduce((res,cur)=>{
    return res+cur;
});
let product=array.reduce((res,cur)=>{
    return res*cur;
});

console.log(`The addition is ${addition}\n`);

console.log(`The product is ${product}\n`);




