const zin = ["Dit is mijn eerste zin", "Dit is mijn tweede zin", "Dit is mijn derde zin", "Dit is mijn vierde zin"];

zin.forEach((zinnen) =>{
    console.log(zinnen);
});

alert("De lengte van de zin is " + zin.length);

for (let i = 0; i < zin.length; i++){
    if (zin[i] === "Dit is mijn tweede zin"){
        zin.splice(i,2);
    }
}
console.log(zin);

