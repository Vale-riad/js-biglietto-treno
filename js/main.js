// 1.chiedo al passeggero quanti Km vuole percorrere
const km = Number(prompt("quanti Km vuoi percorrere?"));
// 2. chiedo al passeggero quanti anni ha
const age = Number(prompt("quanti anni hai?"));
// 3. calcolare il prezzo del biglietto in base ai Km percorsi
let price =(km*0.31);
console.log(km);
// 4. applicare uno sconto del 20% se il passeggero è minorenne
// 5. applicare uno sconto del 40% se il passeggero è un over 65
// 6. stampare in pagina il prezzo finale del biglietto con massimo due decimali