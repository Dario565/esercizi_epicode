

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50


let sommaCarrello = 0
for (let i = 0; i < prices.length; i++) {
  const prezzo = prices[i]
  sommaCarrello += prezzo
}
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  sommaCarrello = (sommaCarrello * 30) / 100
}
if (sommaCarrello <= 100) {
  sommaCarrello += shippingCost
}

const tuttiUtenti = []
tuttiUtenti.push(marco, paul, amy)
console.log(tuttiUtenti)
for (let i = 0; i < tuttiUtenti.length; i++) {
  const utente = tuttiUtenti[i]
  let utenteCheEffettuaLAcquisto = `${utente.name} ${utente.lastName} `
  if (!utente.isAmbassador) {
    utenteCheEffettuaLAcquisto += "NON "
  }
  utenteCheEffettuaLAcquisto += "e' un ambassador"
  console.log(utenteCheEffettuaLAcquisto)
}

let soloAmbassador = []
for (let i = 0; i < tuttiUtenti.length; i++) {
    const utente = tuttiUtenti[i];
    if(utente.isAmbassador) {
        soloAmbassador.push(utente)
    }
}
console.log(soloAmbassador);