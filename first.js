/*const student={
    fullName:"Sunder Gandhi N",
    age:21,
    cgpa:8.2,
    isPass:true,


};

student["age"]=student["age"] +1;


console.log(student);
console.log(student["fullName"]);

console.log(student["age"]);
 */

/*Arthimetic operators
let a=10;
let b=5;
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
console.log("The sum of a and b is ",c);
console.log("The difference of a and b is ",d);
console.log("The product of a and b is ",e);
console.log("The quotient of a and b is ",f);
//modulus operator
let g=a%b;
console.log("The modulus of a and b is ",g);
//exponentiation operator
let h=a**b;
console.log("The exponentiation of a and b is ",h);*/
/*multiple of 5

let num=prompt("Enter a number");
if(num%5==0){
    console.log(num,"is a multiple of 5");
}else{
    console.log(num,"is not a multiple of 5");
}
*/

/*Marks card


let marks=prompt("Enter your marks");
if(marks>=80){
    console.log("Grade A");
}else if(marks>=70 && marks<80){ 
    console.log("Grade B");
}
else if(marks>=60 && marks<70){

    console.log("Grade C");
}
else if(marks>=50 && marks<60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
*/

/*for-pf loop
let str="sunder";
let length=0;
for(let i of str){
    console.log(i);
    length++;
}

console.log("the length of the string is ",length);*/

/*for -in loop
let student={
    fullName:"Sunder Gandhi N",
    age:21,
    cgpa:8.2,
    isPass:true,
};
for(let key in student){
    console.log(key);
    console.log(student[key]);
}    */

//practice questions

/*even numbers from 1 to 100
let count=0;
let n=100;
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
        count++;
    }
};
console.log("The number of even numbers from 1 to 100 is ",count);*/

/*gueessing game
let rand=20;
let count=0;
let guess=prompt("Guess a number ");
while(guess!=rand){
    console.log("Wrong guess, try again");
    guess=prompt("Guess again its wrong number");
    count++;
}
console.log("Congratulations! You guessed the number in ",count," attempts");*/

/*Strings
let str="Sunder Gandhi Ningappa";
let m=str.length;
console.log("The length of the string is ",m);
console.log(str[3],str[4],str[1]);
console.log("revered string is ");
for(let i=str.length-1;i>=0;i--){
    console.log(str[i]);
}
console.log(str.length);*/

/*template literals
let obj={
    item:"pen",
    price:10,
};
let output=`the price of ${obj.item} is ${obj.price}`;
console.log(output);
let s=`sum of first 4 digits is ${1+2+3+4}`;
console.log(s);
*/

/*String operations
let t="Sunder Gandhi";
console.log(t.toUpperCase());

console.log(t.toLowerCase());
let k="            Sunder Gandhi          ";
console.log(k);
console.log("After using trim()");
console.log(k.trim());
console.log(k.length);


let s="Rajesh";
console.log(s.slice(0,2));

//concatination
console.log(t+s);
console.log(t.concat(s));

//replacement
let p="Hellow";
console.log(p.replace("H","Y"));
console.log(p.replace("Hello","Shamasdhar"));

let i="India is my country";
console.log(i.charAt(9));*/

let f=prompt("Enter your name");
let k=f.length;
console.log("@"+f+f.length);