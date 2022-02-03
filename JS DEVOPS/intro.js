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




// const titre = document.querySelector("h1");
// const lien = document.querySelectorAll("a");

// lien[0].addEventListener("click", function(){
//     titre.classList.add("maCouleur")
// });    

// lien[1].addEventListener("click", function(){
//     titre.classList.remove("maCouleur")
// });
// lien[2].addEventListener("click", function(){
//     titre.classList.toggle("maCouleur")
// });




// EXO Dom addEventListener + mouseout
// ** addEventListener - "mouseout" - display
// EN CSS le titre H1 à un display à none
// TODO 1: Dans une variable monTitre, récupérer tous le titre h1
// TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
// TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"




// const monTitre = document.querySelector("h1");

// document.addEventListener("mouseout", function() { 
//     monTitre.style.display = "block";
// });




// EXO Event Keypress
// ** addEventListener - capter un evènement clavier - "keypress"
// TODO 1: Dans une variable leTitre, récupérer tous le titre h1
// TODO 2: Sur document, placer un addEventListener qui écoute "keypress" et qui execute une fonction qui a event en paramètre
// TODO 3: dans cette fonction, faire un console log de event
// TODO 4: Explorez la console du navigateur pour trouver la propriété dans laquelle est stocké ce que l'on écrit dans l'input
// TODO 5: dans le innerHtml de leTire on cumule les lettres tapé dans l'input





//   const leTitre = document.querySelector("h2");
// const monInput = document.querySelector('input');
// monInput.addEventListener("keypress", function(event) {
//     console.log(event.key);
//     // console.log(event.key);
//     leTitre.innerText += event.key;
// });




// Set UP exo desactiver button 
// 1 page html avec 1 textArea, et un bouton
// ** addEventListener - "keyup" - disabled - value - length
// TODO 1: récupérer le textarea dans une variable txt
// TODO 2: récupérer le button dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input dépasse 5 caractères alors on désactive le button


// let area = document.querySelector("textarea");
// let button = document.querySelector("button");
// area.addEventListener("keyup",function () {
//   if (area.value.length >= 5) {
//     button.disabled = true; 
//   } else {
//     button.disabled = false;
//   }
// })




// ** setTimeout() - innerHtml - opacity - backgroundColor
// TODO 1: Dans une variable monTitre, récupérer le titre h1
// TODO 2: on execute le fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
// TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
// TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
// TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre




// const monTitre = document.querySelector("h1");

// setTimeout(function() {
//     monTitre.textContent = "SALUT C'EST COOL";
//     // monTitre.innerHTML = "SALUT C'EST COOL";
//     monTitre.style.opacity = 1;
//     document.body.style.background = "royalblue";
// }, 2000)




// ** Executer 1 script ttes les X sec - addEventListener - click - innerHTML
// TODO 1: récupérer le titre dans une variable monTitre
// TODO 2: créer une variable timer initialisée à 3
// TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
// TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
// TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 200 ms
// TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
// TODO 4-2: SINON, on assigne au innerHTML de monTitre, "GO GO GO"
// TODO 5: Après ces conditions, on décrémente timer




