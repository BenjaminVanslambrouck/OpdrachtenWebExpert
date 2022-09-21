let prijs = parseFloat(prompt("geliever een inkoopprijs te geven!"));
let btw = parseInt(prompt("gelieve een btw-tarief te geven!"));
let btwgetal = prijs / 100 * btw;
let uitkomst = prijs + btwgetal;

if (uitkomst === NaN){
    alert("Geen cijfer");
}else {
    alert(uitkomst);
}


/*if (btw === 0){

}
else if(btw === 6){

}
else if (btw === 12){

}
else if(btw === 21){

}
else {
    alert('er is geen juiste btw gegeven!');
}*/
