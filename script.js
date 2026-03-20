console.log("hello baccho");
alert("kya haal hai");
console.dir(document.body);

let test=document.querySelector("#div");
let test1=document.querySelector(".Testing");
let box=document.querySelectorAll(".Box");

console.log(test);
console.log(test.children);
console.log(box);
box[0].innerText="New First test";
let i=0;
for(div of box){
   
    div.innerText=`New test of ${i}`;
    i++;


}

test.innerText="Sab hatadoo";
test.innerHTML="<h1>Ye naya bharat hai </h1>";

