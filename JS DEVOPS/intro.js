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
// let noteA = 12;
// let noteB = 14;
// let moyenne = calcul(noteA,noteB);

// function calcul(A,B){
//     return (A+B)/2;
// }
// console.log(moyenne)




// // ——————————————————————————————————————————————————————————————————————

// //EXO createElement()
// // ** Créer n'importe quel element HTML - createElement - innerHTML 
// // TODO 1: récupérer le titre dans une variable monTitre
// // TODO 2: récupérer le paragraphe dans une variable lesTxt ou txt
// // TODO 3: Créer une ƒ° ajoutTexte() qui prend un pseudo et duTxt en param
// // TODO 3-1: Dans cette ƒ°, dans une variable nouveauTxt, on crée un  élément <p>
// // TODO 3-2: ensuite on va accèder à la propriété innerHTML de nouveauTxt,on lui assigne nos variables pseudo et duTxt
// // TODO 3-3: on place dans la page web nouveauTxt
// // TODO 4: En dehors de la ƒ°, on utilise au moins 1 fois la fonction


// function ajoutTexte(nom,prenom){
//     const nouveauTxt = document.createElement('p');
//     nouveauTxt.innerText = nom + " " + prenom;
//     document.body.appendChild(nouveauTxt);
// }
// ajoutTexte("jean","Michel")






// ** addEventListener - classList.add() - classList.remove() - classList.toggle()
// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)
// TODO 1: récupérer le titre dans une variable leTitre
// TODO 2: récupérer tous les liens dans une variable lesLiens
// TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
// TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
// TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre




const titre = document.querySelector("h1");
const lien = document.querySelectorAll("a");

lien[0].addEventListener("click", function(){
    titre.classList.add("maCouleur")
});    

lien[1].addEventListener("click", function(){
    titre.classList.remove("maCouleur")
});
lien[2].addEventListener("click", function(){
    titre.classList.toggle("maCouleur")
});




// EXO Dom addEventListener + mouseout
// ** addEventListener - "mouseout" - display
// EN CSS le titre H1 à un display à none
// TODO 1: Dans une variable monTitre, récupérer tous le titre h1
// TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
// TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"




const monTitre = document.querySelector("h1");

document.addEventListener("mouseout", function() { 
    monTitre.style.display = "block";
});




