let a = Number(prompt("a санын енгізіңіз: "));
let b = Number(prompt("b санын енгізіңіз: "));

if (a > b) {
    alert("a саны b санынан үлкен");
}
else if (a < b) {
    alert("b саны a санынан үлкен");
}
else if (a = b) {
    alert("a саны b санымен тең");
}

alert("Және екеуінің ортақ саны: " + ((a + b) / 2))