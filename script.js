document.body.innerHTML += "<p><b>ukol 1:</p>"

const jmeno = prompt("Uvedte Vase jmeno a prijmeni", "Květoslav Voňavý");
const vek = Number(prompt("Uvedte Vas vek", "67"));

document.body.innerHTML += "<p>" + jmeno + ", vek: " + vek + "</p>"


/*
cyklus ukládání na gitHub:
git add .
git commit -m "text"
git push
*/


// ukol 2a
document.body.innerHTML += "<p><b>ukol 2a:</p>"

const hodinovka = Number(prompt("Zadejte hodinovou sazbu"))
const pocetHodinDenne = Number(prompt("Zadejte pocet hodin, ktere denne pracujete"))
const pocetDnuMesic = Number(prompt("ZAdejte, kolik hodin v mesici pracujete"))

document.body.innerHTML = "<p>Hruba mzda: " + hodinovka * pocetHodinDenne * pocetDnuMesic + "</p>"
