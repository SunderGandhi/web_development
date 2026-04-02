console.log("File directory")
console.log(__dirname)
console.log(__filename)
console.log("\n");



console.log("OS Library");

const os= require("os")

console.log(os.type())
console.log(os.version())
console.log(os.homedir())


console.log("\n");

console.log("Path Library ")

const path=require("path");

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log("\n");

console.log("My Maths module");
const math=require("./math");


console.log(math.add(4,6));
console.log(math.sub(14,6));
console.log(math.mul(4,6));

//export using to import directly the module

console.log(divide(4,2));






