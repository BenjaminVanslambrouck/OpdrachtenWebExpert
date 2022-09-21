function ElementAanmaken() {
    let nieuweHoofding = document.createElement("h2");
    let nieuweHoofdingInfo = document.createTextNode("Populaire elektrische fietsen");

    nieuweHoofding.appendChild(nieuweHoofdingInfo);

    document.getElementById("main").appendChild(nieuweHoofding);



    let nieuweKnop = document.createElement("button");
    let nieuweKnopTekst = document.createTextNode("Gemiddelde prijs");

    nieuweKnop.appendChild(nieuweKnopTekst);

    document.getElementById("main").appendChild(nieuweKnop);



    let tweedeNieuweKnop = document.createElement("button");
    let tweedeNieuweKnopTekst = document.createTextNode("Top 3");

    tweedeNieuweKnop.appendChild(tweedeNieuweKnopTekst);

    document.getElementById("main").appendChild(tweedeNieuweKnop);


    let legeDiv = document.createElement('div');
    legeDiv.setAttribute("id", "Content")

    document.getElementById("main").appendChild(legeDiv);

}
ElementAanmaken();


let fiets = [
    {
        merk:"Kalkhoff",
        model:"Endeavour 3.B Move",
        prijs:2499,
        score:8.7
    },
    {
        merk: "Maranzo",
        model: "Botarelli 24 kk",
        prijs: 1799,
        score: 7.5
    }
] ;
console.log(fiets);




