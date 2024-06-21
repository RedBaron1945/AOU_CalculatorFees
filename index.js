const subjects = document.getElementById("subjects");
const VATbox = document.getElementById("VATbox");
const TheFirstLabel = document.getElementById("The first label");
const Thetotal = document.getElementById("TheTotal");
const TheSecondLabel = document.getElementById("The second label");
const CalculatingTotal = document.getElementById("CalculatingTotal");
//===========================================================================


let EL097=2600 + 281, EL098=2600 + 281,EL099 =2600 + 281;
let TU170=687+281 , MT101 = 936+150, EL111= 687+300;
let ExtraFees= 1145;


CalculatingTotal.onclick = function() {
    let sum = ExtraFees;
let inputString = subjects.value.trim();
if (inputString == ""){
    Thetotal.textContent = `You didn't give us any subject to calculate!!!`;
return;
}
inputString= inputString.toUpperCase();
const arrado = inputString.split('-').map(code=>code.trim());

for (let i =0; i< arrado.length; i++) {
    if (arrado[i]=="EL097"){
        sum = sum + EL097;
    }
    else if (arrado[i]=="EL098"){
        sum = sum + EL098;
    }
    else if (arrado[i]=="EL099"){
        sum = sum + EL099;
    }
    else if (arrado[i]=="TU170"){
        sum = sum + TU170;
    }
    else if (arrado[i]=="MT101"){
        sum = sum + MT101;
    }
    else if (arrado[i]=="EL111"){
        sum = sum + EL111;
    }


    else {
        Thetotal.textContent = `Make sure that you entred a valid subject code or maybe that ${arrado[i]} isn't in our records!`;
        return;

    }
}

if(VATbox.checked){
    sum = sum *0.15 + sum;
}




Thetotal.textContent = `The total fees for the given subjects is ${sum}`;

}