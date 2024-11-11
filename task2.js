let num1 = Number(prompt("Бірінші санды енгізіңіз:"));
let num2 = Number(prompt("Екінші санды енгізіңіз:"));
let num3 = Number(prompt("Үшінші санды енгізіңіз:"));

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
let airmasy = '';
airmasy = max - min;
alert("Ең үлкен және ең кішкентай санның айырмасы: " + airmasy )
