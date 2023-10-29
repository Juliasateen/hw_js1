"use strict"

let a1 = '5%' + 3;
console.log(a1, typeof a1);

let a2 = '3%' + 5;
console.log(a2, typeof a2);

let a3 = 5 + '3';
console.log(a3, typeof a3);

let a4 = '5' - 3;
console.log(a4, typeof a4);

let a5 = 75 + 'кг';
console.log(a5, typeof a5);

let a6 = 785 * 653;
console.log(a6);

let a7 = 100 / 5;
console.log(a7, typeof a7);

let a8 = 0 * 0;
console.log(a8, typeof a8);

let a9 = 0 / 2;
console.log(a9, typeof a9);

let a10 = 89 / 0;
console.log(a10, typeof a10);

let a11 = 98 + 2;
console.log(a11, typeof a11);

let a12 = 5 - 98;
console.log(a12, typeof a12);

let a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13);

let a14 = (9 - 12) * 7 / (5 + 2);
console.log(a14, typeof a14);

let a15 = +'123';
console.log(a15, typeof a15);

let a16 = 1 || 0;
console.log(a16, typeof a16);

let a17 = false || true;
console.log(a17, typeof a17);

let a18 = true > 0;
console.log(a18, typeof a18);

let width = '10см';
let height = '23см';
let SPryam = parseInt(width) * parseInt(height);
console.log(SPryam);

let heightCylinder = '20м';
let d = a7;
const p = 3.14;
let VCilindra = parseInt(heightCylinder) * p * (d ** 2) / 4;
console.log(VCilindra);

let radius = '5см';
let SKruga = p * (parseInt(radius) ** 2);
console.log(SKruga);

let a = '5см';
let b = '7см';
let h = '10см';
let STrap = (parseInt(a) + parseInt(b)) * parseInt(h) / 2;
console.log(STrap);

let s = '2 млн.руб.';
let rate = '10%';
let years = 5;
let Pereplata = parseInt(s) * parseInt(rate) / 100 * years;
console.log(Pereplata);






