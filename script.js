console.log("Sitaram");

console.log(5 + 6 - 9);
// bodmas * and / & + and - have same priority but excuate who come first and if you want nit excute first use bracket()

console.log(5 + (9 - 3));

// Data Type in js

// have a 2 type 1.primitive datatype (in-built) and non primitive (user defined)

// primitive data type
// 1.Number 2.String 3.Boolean 4.Big Int 5.Undefine 6.Symbole 7.Null

// number
console.log(52);
console.log(455.54);
console.log(typeof 5416);

// string

console.log("dinesh");
console.log("mahesh prajapati");
console.log(`this is "backtick" support 
    new line `);

// type converter
console.log("type converter \n\n");
console.log(typeof "100");
// use +,- is convert string to number
// * nd / causes error
console.log(typeof +"100");
console.log(typeof -"100");

console.log(" NaN:", +"101sitaram");
console.log(typeof NaN);
// NAN type is number

// so the efficient converter is parse method they convert and remove other datatype

console.log(parseInt("100sitaram"));
// but the disadvantage of parse is they detect only prefix not middle not end

console.log(parseInt("10vbh0"));
console.log(parseInt("vbh100"));

// now convert number to string
console.log("\n\n");
console.log(typeof (100 + ""));
console.log(100 + "sitaram");
console.log("sitaram" + 500);

// Boolean

console.log(typeof true);

// undefine

let a;

console.log(typeof a);

// Null

let b = null;

console.log(typeof b);
// type of null is object story is long time ago this is mistack a bug so this is no chamgeable because many codes written and now not possiable to change because all previous codes are depend on object so consided object

// Big Int
// BigInt is the second numeric data type in JavaScript (after Number).
let n = 54465546515448465465465465465;
let big = BigInt(41413203548413212232);

console.log(n);
console.log(big);

// symbole

let sym = Symbol(9);
console.log(sym);
console.log(typeof sym);

// Non premitive datatype
//  object and array are np

// object

console.log("Non premetive \n\n");
let obj = {
  name: "jigs",
  age: 20,
  city: "Ahmedabad",
};

console.log(typeof obj);
console.log(obj);
console.log(obj.name);
console.log((obj.id = 9899));
console.log(obj);

// Array

console.log("\n\n");

let arr = new Array(10, 20, 30, 40, 50);

console.log(typeof arr);
console.log(arr);
console.log(arr[2]);
console.log((arr[5] = 60));
console.log(arr);