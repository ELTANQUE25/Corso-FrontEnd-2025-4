//Esercizio 1 — Stampa tutti i colori con for
let colori = ["bianco", "rosso", "verde"];
for (let i = 0; i < colori.length; i++) {
console.log(colori[i]);
}

//Esercizio 2 — Aggiungi due colori e rimuovi l’ultimo
let colori = ["rosso", "verde", "blu"];
colori.push ("bianco" , "viola");
colori.pop ();
console.log (colori);


//Esercizio 3 — Verifica se "verde" è presente e stampa indice
let colori = ["rosso", "verde", "blu"];
if (colori.includes("verde")) {
console.log("Indice di verde: " + colori.indexOf("verde"));
} else {
console.log("Verde non trovato");
}

let colori = ["rosso", "giallo", "blu"];
if (colori.includes("verde")) {
console.log("Indice di verde: " + colori.indexOf("verde"));
} else {
console.log("Verde non trovato");
}


//Esercizio 4 — Cambia il colore in seconda posizione
let colori = ["rosso", "verde", "blu"];
colori[1] = "azzurro";
console.log(colori);

let colori = ["rosso", "verde", "blu"];
colori[2] = "nero";
console.log(colori);


//Esercizio 5 — Rimuovi il primo elemento e stampa l’array aggiornato
let colori = ["rosso", "verde", "blu"];
colori.shift(); //shift() rimuove il primo elemento dell'array (quello in posizione 0)
console.log(colori);