let ai = prompt("Қазіргі айдың санын енгізіңіз: ");
if (ai == "3" || ai == "4" || ai == "5") {
    alert("Қазір көктем айы");
}
else if (ai == "6" || ai == "7" || ai == "8") {
    alert("Қазір жаз айы")
}
else if (ai == "9" || ai == "10" || ai == "11") {
    alert("Қазір күз айы");
}
else if (ai == "12" || ai == "1" || ai == "2") {
    alert("Қазір қыс айы");
}
else {
    alert("Бір жыл 12 айдан тұрады 1-ден 12-ге дейін сан енгізіңіз");
}