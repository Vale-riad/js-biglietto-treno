// 1.chiedo al passeggero quanti Km vuole percorrere
const km = Number(prompt("quanti Km vuoi percorrere?"));
// 2. chiedo al passeggero quanti anni ha
const age = Number(prompt("quanti anni hai?"));
// 3. calcolare il prezzo del biglietto in base ai Km percorsi
let price =(0.21 * km);
console.log(price);
// 4. applicare uno sconto del 20% se il passeggero è minorenne
if (age<18) {
    price = price-(price * 0.2);
}
// 5. applicare uno sconto del 40% se il passeggero è un over 65
else if(age>=65) {
    price = price-(price * 0.4);
}
console.log(age,price);
// 6. stampare in pagina il prezzo finale del biglietto con massimo due decimali