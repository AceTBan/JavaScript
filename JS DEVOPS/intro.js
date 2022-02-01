// let message = "SALUT !!!!!";
// let num = 21;
// let chiffre = 12;
// console.log(message);
// console.log(chiffre+num);
// num = 98
// console.log(chiffre+num);

// let num = 0;
// num++;              // num+=1;              // num = num+1;           //(ajoute 1)
// console.log(num)


// let slt = "coucou j'aime les chocolatine"
// console.log(slt)


// let nom = "Jean-Jacques";
// let age = 57;
// let bienvenue = "Bonjour "+nom+" tu as "+age+"ans aujourd'hui, c'est la fiesta!";
// console.log(bienvenue);

// console.log(bienvenue[bienvenue.length-12]);

// let myTab = [11,"ace",12,"zvr",21];
// console.log(myTab)        // console.log(myTab[1])

// ——————————————————————————————————————————————————————————————————————
// EXO practice tableaux 

// 1 variable nom (au choix)
// 1 variable age (au choix)
// 1 variable passions (un tableau qui contient 2 chaines de caractères)
// 1 variable myTablo (un tableau qui contient nom, age et passions)

// Dans un console log on veut afficher depuis myTablo, uniquement le tableau des passions
// Dans un 2nd console log on veut afficher depuis myTablo, uniquement la 2e passions 


// let nom = "Jean-Jacques";
// let age = 57;
// let passions = ["le ciel bleu","les nuage blanc"];
// let myTablo = [nom,age,passions];

// console.log(myTablo[2]);
// console.log(myTablo[2][1]);

// // myTablo.push("ajouter qqchose");        ajoute un ou plusieur element au tableau
// // myTablo.pop();                          supprime le derniere element du tableau

// ——————————————————————————————————————————————————————————————————————
// Exo Récap Tabs

// let prenom = "Jean-Jacques";
// let nom = "Jichelin";
// let initials = prenom[0]+nom[0]

// let phrase = []

// phrase.push(prenom,nom,initials)

// console.log(phrase)

// ———————————————déclaration d'une fonction———————————————

// function maFonction(num = 11){
//     console.log("hello world");
//     console.log(22+num);
// }

// maFonction(44);


// ——————————————————————————————————————————————————————————————————————
let noteA = 12;
let noteB = 14;
let moyenne = calcul(noteA,noteB);

function calcul(A,B){
    return (A+B)/2;
}
console.log(moyenne)
