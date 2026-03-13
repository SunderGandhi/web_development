let marks=[56,89,54,98,99];
console.log(marks);
console.log(marks.length);
let heros=['Ironman','Thor','Hulk'];
console.log(heros);
console.log(marks[3]);
marks[1]=50;
console.log(marks);

//for loop
/*for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}*/
//for of loop
let sum=0;
for(let hero of heros){
    console.log(hero);
}
for(let n=0;n<marks.length; n++){
    sum=sum+marks[n];
}
let avg= sum/marks.length;
console.log("average marks of class\n");
console.log(avg);

let items=[250,645,300,900,50];
let discount;
for(let i=0;i<items.length;i++){
    console.log(`The price of items ${i}=\t${items[i]}`);
    dis=items[i]/10;
    items[i]=items[i]-dis;
    console.log(`The prices after 10% discount=\t${items[i]}`);
    
}

console.log(marks.length);
//methods push,pop,
marks.push(45);
console.log(marks.length);
console.log(marks);
console.log(marks.pop());
marks.pop();
//toString
console.log(marks.toString());
console.log(marks);


//concatationss

let marvelHeros=['IronMan','Thor','Hulk'];
let girlFriends=['Jenny','Donna','Racheal'];
let herosRelationship=marvelHeros.concat(girlFriends);
console.log(herosRelationship);
console.log(marvelHeros.length);

//unshift----push in start
marvelHeros.unshift("spiderMan");
console.log(marvelHeros.length);
console.log(marvelHeros);

//shift ---pop in first
marvelHeros.shift();
console.log(marvelHeros);

//splice
console.log(marks.slice(1,3));
marks.splice(2,0,90);
let num=[23,5,46,757,878,979,98,986,8];
num.splice(num.length-3,3,1,2,3);
console.log(num );
console.log(marks);