function calculateZvE() {
    let zvE1=document.getElementById("zvE1").value;
    let zvE2=document.getElementById("zvE2").value;
    let einzel=document.getElementById("einzel");
    let ergibnissPlatz=document.getElementById("erginiss");
    let jahr=document.getElementById("jahr").value 

    /* um die Seit nicht nach jeder Berechnung neu zu laden */
    event.preventDefault()
    /* Die Variabeln  */
    const y1 = (zvE1 - 9408)/10000;
    const z1 = (zvE1- 14532)/10000;
    const y2 = (zvE1 - 9168)/10000;
    const z2 = (zvE1- 14254)/10000;
    const y3 = (zvE1 - 9000)/10000;
    const z3 = (zvE1- 13996)/10000;

    let zvE;
    /* Das Letzte Ergibniss */
    let ESt;

    /* zwei oder ein */
   if (einzel.checked) {
	zvE = zvE1
} else {
	zvE = (parseInt(zvE1) + parseInt(zvE2)) / 2
}

switch (jahr) {
    case "2020":
        if (zvE <= 9408) {
        ESt=0;
        }
        else if (zvE <= 14532){
        ESt= (972.87 * y1 + 1400) * y1;
        }
        else if (zvE <= 57051){
        ESt= (212.02 * z1 + 2397) * z1 + 972.79;
        }
        else if (zvE <= 270500){
        ESt=0.42 * zvE - 8963.74;
        }  
        else{
        ESt=0.45 * zvE - 17078.74;
        }    
        break;
        
    case"2019":
        if (zvE <= 9168) {
        ESt=0;
        }
        else if (zvE <= 14254) {
        ESt=(980.14 * y2 + 1400) * y2;
        }
        else if (zvE <= 55960) {
        ESt=(216.16 * z2 + 2397) * z2 + 965.58;
        }
        else if (zvE <= 265326) {
        ESt= 0.42 * zvE - 8780.90;
        }
        else{
            ESt=0.45 * zvE - 16740.68;
        }
        break;
        
        case"2018":
        if (zvE <= 9000) {
        ESt=0;
        }
        else if (zvE <= 13996) {
        ESt=(997.80 * y3 + 1400) * y3;
        }
        else if (zvE <= 54949) {
        ESt=(220.13 * z3 + 2397) * z3 + 948.49;
        }
        else if (zvE <= 260532) {
        ESt= 0.42 * zvE - 8621.75;
        }
        else{
        ESt= 0.45 * zvE - 16437.70;
        }
        break;
    }
    return ergibnissPlatz.innerText=ESt.toFixed(2);

}

/* zvE 2 SHOW/HIDEN */
let zvE1d=document.getElementById("zvE1");
let zvE2d=document.getElementById("zvE2");
let euro2=document.getElementById("euro2");
let euro1=document.getElementById("euro1");
function zusammenZeigen() {
zvE2d.style.display=("block")
zvE2d.style.marginTop=("0.5vw")
euro2.style.display=("block")
}
function zusammenHiden() {
zvE2d.style.display=("none")
euro2.style.display=("none")
}
