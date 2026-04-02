/*console.log("hello baccho");
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

 
//attributes


//get Attribute
let div1=document.querySelector("#div");

let id=div1.getAttribute("id");
let id1=div1.getAttribute("name");
console.log(id);
console.log(id1);

//set attributes
console.log(div1.setAttribute("id","New"));
console.log(id);

//insertation of elements
let but=document.createElement("button");
but.innerText="CLick me here";
div1.append(but);

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Sunder Gandhi</i>";
document.querySelector("div").prepend(newheading);

//event handling

let events=document.querySelector("#events");
events.onmouseover=()=>{
    console.log("You are there");

}
*/

let bet=document.querySelector("#button");
let currMode="Light";
let body=document.querySelector("body");
bet.addEventListener("click", ()=>{
    if( currMode=="Light"){
        currMode="Dark";
        document.querySelector("body").style.background="Black";
        body.classList.add("dark")
    }
    else {
        currMode="Light";
        document.querySelector("body").style.background="white";
        body.classList.add("light")
    }
    
    console.log(currMode);

});
