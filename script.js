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


// ukol 2
document.body.innerHTML += "<p><b>ukol 2a:</p>"

const hodinovka = Number(prompt("Zadejte hodinovou sazbu"))
const pocetHodinDenne = Number(prompt("Zadejte pocet hodin, ktere denne pracujete", "8"))
const pocetDnuMesic = Number(prompt("Zadejte, kolik hodin v mesici pracujete", "21"))

document.body.innerHTML = "<p>Hruba mzda: " + hodinovka * pocetHodinDenne * pocetDnuMesic + "</p>"

// OBJEKTY
//ukol 1: Realitka

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

document.body.innerHTML = "<p>Dispozice bytu: " + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Cisty najem bez poplatku: " + apartment.price.rent + " Kc</p>"
document.body.innerHTML += "<p>Vymera bytu: " + apartment.area.floorage + " " + apartment.area.units + "</p>"

const mesto = apartment.city
const mestskaCast = apartment.district

document.body.innerHTML += "<p>Mesto: " + mesto + ", Mestska cast: " + mestskaCast + "</p>"

apartment.status = "taken"

document.body.innerHTML += "<p>Status bytu: " + apartment.status + "</p>"

