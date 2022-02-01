let message = "SALUT !!!!!";
let num = 1;
let chiffre = 2;
console.log(chiffre + num);
chiffre = 99;
console.log(chiffre + num);

// simple ou double quote
// Si besoin anti slash pour échapper un caractère
let slt = 'Coucou J\'aime les choco!!!';
let msg =  "Salut \"MR jojo\"";
let numero = 4444;

let msg2 = `dfkjghd'''''fk""""jgh ${numero}

skdjfhsdkjhfgkjgh
`
console.log(msg2);




let name = "JOJO"
let age = 44

let phrase = `Bonjour ${name} tu as ${age} ans today `

console.log(phrase);




// Exemple De taille des strings et accès 
let nomFamille = "JOJOOIUZOIAUO IUAWWW"
let age = 44
console.log(nomFamille.length);
//Affiche auto la dernière lettre
console.log(nomFamille[nomFamille.length - 1]);




// Exemple de tablo avec push et pop ajout à la fin et suppr le dernier element
let nom = "JOJOOIUZOIAUO IUAWWW";
let age = 44;
let myTablo = [12,"LOL", nom, age];
myTablo.pop();
myTablo.push("COOOOOL");
console.log(myTablo);




// Exemple fonction 
maSuperFonction();

// D'abord on déclare notre fonction
function maSuperFonction(){
    console.log('Hello World');
    console.log(22+55);
}
// On exec au moins 1 fois notre fonction
maSuperFonction();
maSuperFonction();




// Exo function
let noteA = 10;
let noteB = 20;
let resultMoy = calcul(noteA,noteB);

function calcul(a,b){
    return (a+b)/2;
}
console.log(resultMoy);




// exemple opérateur ternaire (un if simple) simplifié
let age = 22;
let majorité = 18;
console.log(age > majorité ? "OK":"NON");