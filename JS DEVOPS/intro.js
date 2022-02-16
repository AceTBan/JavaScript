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




// const monTitre = document.querySelector("h1");
// let timer = 3;
// monTitre.addEventListener("click", function(){
//     const countDown = setInterval(function() {
//         // setInterval(function() {

//         if(timer > 0) {
//             monTitre.innerHTML = timer;
//         }
//         else{
//             monTitre.textContent = "GO GO GO";
//             clearInterval(countDown);
//         }
//         console.log(timer);
//         timer--;
//     },1000);
// })




// ** preventDefault - addEventListener - "submit" - form.reset()
// Setup HTML : 1 page avec 1 form qui contient 1 input type text et button type submit
// TODO 1: récupérer le formulaire dans une variable monForm
// TODO 2-1: sur monForm on place un addEventListener qui écoute "submit" et qui exécute une fonction qui a event en paramètre
// TODO 2-2: Dans cette fonction, sur event on utilise la fonction preventDefault()
// TODO 3-2: Puis on console log event
// TODO 3-3 : sur monForm on utilise la fonction .reset() (modifié)






// const monForm = document.querySelector('from');
// monForm.addEventListener("submit", function(event)){
//     event.preventDefault();
//     monForm.reset();
// }




// ** addEventListener - load
// Setup Html : 1 page qui contient une 10aine d'images (assez grandes)
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une v ariable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en console




// let lesImages = document.body.querySelectorAll("img");
// let tabImg = Array.from(lesImages);
// tabImg.map(function(uneImage,i){
//     uneImage.addEventListener("load",function(){
//         console.log(i);
//     });
// });




// ** addEventListener - capter un évènement "click" - coord x - coord y
// Setup Html : On a une page avec le body vide (on garde juste le script js)

// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Tjrs dans la Fonction, dans une variable monImg, créer une img html
// TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
// TODO 6: sur monImg, modifier dans style, la position en "absolute"
// TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
// TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
// TODO 9: placer monImg dans la page (modifié)





// document.addEventListener("click", function(unEvent) {
//     console.log(unEvent);
//     console.log("Coord X",unEvent.x, "-", "Coord Y:", unEvent.y);
//     const monImg = document.createElement("img");
//     const taille = 90;
//     monImg.setAttribute
//         ("src",`https://www.loremflickr.com/${taille}/${taille}/`);
//             monImg.style.position = "absolute";
//             monImg.style.left = unEvent.x - taille /2 + "px";
//             monImg.style.top = unEvent.y - taille /2 + "px";
//             document.body.appendChild(monImg);
// });




// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innnerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%" 




// const laBar = document.querySelector(".bar");

// addEventListener("scroll", function(event) {
//     console.log(event);
// const scrollMax = document.body.scrollHeight - innerHeight;
// const onEstOu = scrollY / scrollMax * 100;
// laBar.style.width = onEstOu + "%";
//     console.log(`
//     Hauteur page : ${document.body.scrollHeight}
//     Hauteur affichage : ${innerHeight}
//     Scroll Position : ${scrollY}
//     pourcentage de scroll :${onEstOu} %`);
// });




// ** addEventListener - capter un evènement clavier - "keypress" - array.includes()
// TODO 1: Dans une variable leTexte, récupérer l'input
// TODO 2: Une variable txtTab initialisée avec un tableau vide
// TODO 3: Une variable voyelles, un tableau contenant toutes les voyelles aeiouy
// TODO 4: sur leText placer un addEventListener qui écoute "keypress" et execute une fonction qui a unEvent en paramètre
// TODO 5-1: Dans cette fonction, on stock dans une variable uneTouche ce que tape l'utilisateur au clavier
// TODO 5-2: Ensuite, un if vérifier l'inverse de : voyelles qui inclut uneTouche
// TODO 5-3: Si cette condition est remplie alors ajouter uneTouche au tablau txt
// TODO 6-1: Hors du If et toujours dans le addEventListener, console log de txt sur quoi on utilise la fonction .join()
// TODO 6-2: En paramètre de join() on passe "--"




// const leTexte = document.querySelector("input");
// const txt = [];
// const voyelles = ["a","e","i","o","u","y"];
// leTexte.addEventListener("keypress",function(unEvent){
//     const uneTouche = unEvent.key;
//     if (!voyelles.includes(uneTouche)){
//         txt.push(uneTouche);
//     }
//     console.log(txt.join("-"));
// });




// Mino Exo (échange de cartes): 
// On a une variable maCarte dans laquelle on stock le nom d'un pokémon 

// On a une variable taCarte dans laquelle on stock le nom d'un autre pokémon

// Faire en sorte d'échanger  le contenu des 2 variables




// let maCarte = "Phyllali" ;
// let taCarte = "Lockpin" ;
// [maCarte, taCarte] = [taCarte, maCarte];
// console.log("ta carte est " + taCarte);
// console.log("ma carte est " + maCarte);




// (JS) CLASS - IMC
// °Enoncé
// Créer un programme pour Calculer l'IMC (indice de masse corporelle)
// °TODO
// - créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille. Dans cette classe on doit aussi avoir une donnée Imc à laquelle on assigne la fonction calculImc();
// - Créer la fonction de calcul de l'Imc, qui retourne le résultat du calcul à 2 nombres après la virgule 
// - Créer la fonction d'affichache display, elle a pour rôle d'afficher en console, le nom de la personne, son poids, sa taille et son Imc dans une phrase.
// - Créer un tableau nommé list
// - Dans cette list créer plusieur instances de la classe Imc en injectant des données dans le constructeur comme ceci : new Imc ("Sébastien Chabal",135,1,89);
// - Trouver un moyen de parcourir tous les éléments dans list, sur chaque élément on utilisera la fonction display()




// class Imc {

//     constructor(nom, poids, taille){

//         this.nom = nom;
//         this.poids = poids;
//         this.taille = taille;
//         this.imc = this.calculImc(); 
//     }
//     calculImc(){
//         return (this.poids/(this.taille ** 2)).toFixed(2);
//     }
//     display(){
//         console.log
//         (this.nom + " (" + this.poids + " kg, " + this.taille + " M) a un IMC de: " + this.imc);    }
// }

// let list = [
// new Imc("Sébastien Chabal",135,1.89),
// new Imc("Escaladeuse Ultra svelte",45,1.54)
// ];

// list.forEach(uneCase => uneCase.display());




// (JS) POO - Ma petite Entreprise
// ° Enoncé
// Gérer une PME
// °CDC
// Un salarié = nom, prénom, age, salaire mensuel
// Il est payé sur N mois.
// en plus il y a XXX de charge
// Une pme = nom, une équipe de salariés
// Elle a des revenus dus a ses ventes R
// mais aussi:
// - des frais fixes FF (impôts, ...)
// - des frais d'achat de matériel FA
// °TODO
// - créer une classe Pme & une classe Employee
// - Utiliser des fonctions
// - Faire le billan annuel de l'entreprise et l'afficher en console
// °Détails
// - 3 salariés qui gagnent par mois: 2000, 3000, 4000
// - R = 300000
// - FF = 20000
// - FA = 50000
// - N = 12
// - XXX = 90%




// class Employee {
//     constructor(nom, prenom, age, salaireMensuel) {
//     this._nom = nom;    
//     this._prenom = prenom;
//     this._age = age;
//     this._salaireMensuel = salaireMensuel;
//     this._cout = this.calculCout();
// }

// // me servira à passer le cout d 1 employé dans la classe PME
// getCout() {
//     return this._cout;
// }

// calculCout() {    
//     const NB_MOIS_SAL = 12; 
//     const LA_TAXE = 0.9;     
//     return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE);
// }
// }

// class Pme {
// constructor(nom, equipe, ventes, coutsFixes, achats) {
//     this._nom = nom;
//     this._equipe = equipe;
//     this._cout = coutsFixes + achats;
//     this._ventes = ventes;
//     this._bilan = 0;    
// }

// bilanCalculed () {        
//     let cumulEquipe = 0;
//     console.log(`${this._nom} : Cout Initial : ${this._cout}`);

//     for (let unSalarie of this._equipe){ 
//         cumulEquipe += unSalarie.getCout();
//         }

//     console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
//     this._cout += cumulEquipe;
//     console.log(`${this._nom} : VENTES : ${this._ventes}`);
//     this._bilan = this._ventes - this._cout;
//     console.log(`${this._nom} : BILAN : ${this._bilan}`);
// }
// }


// // Scénario
// const pme = new Pme (
//     //Le nom entreprise
//         "Ma Petite Entreprise - ", 
//         //L'equipe de salariés
//         [new Employee ("Duval", "Paul", 30, 2000),
//         new Employee ("Durand", "Alain", 40, 3000),
//         new Employee ("Dois", "Sylvia", 50, 4000),],
//         //le revenu , frais fixe, frais d'achat
//         300000,
//         20000,
//         50000);
        
//     pme.bilanCalculed();





// ** contacter une api - fetch() - async - await
// TODO 1: récupérer le titre h2 dans une variable counter
// TODO 2-1: créer une variable majCounter à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 3-1: Tjrs dans la F =>,créer une variable count à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de counter, assigner la value de count
// TODO 4-2: remmettre le filter de counter en "blur(0)"
// TODO 5: on éxecute notre fonction majCounter 
// TODO 6-1: avant les () de la F => on rajoute le mot clé async
// TODO 6-2: avant le fetch() on rajoute le mot clé await
// TODO 6-3: avant le data.json() on rajoute le mot clé await





// const counter = document.getElementById("counter");
// const majCounter = async () =>{
//     const data = await fetch("https://api.countapi.xyz/hit/azertyui/visites")
//     const count = await data.json();
//     counter.innerHTML = count.value;
//     counter.style.filter = "blur(0)";
//     }
// majCounter();



// Exo API 2 le retour : 
// En gardant la base de l'exo précédent, essayer de contacter et afficher les données des ≠ API


// // TEST pour récuperer 1 data
// const leParag = document.getElementById('ici');

// async function  afficherUser (){
// const lesData = await fetch('https://adrardev.fr/task/api/task.php?user');
// console.log(lesData);
// const lesDataTransformed = await lesData.json();
// //Console log pour voir les data et les propriétés
// console.log(lesDataTransformed);
// //Dans le innerHTML du <p> j'affiche l'id et le name du permier elements de ce que me renvoi l'api
// leParag.innerText = lesDataTransformed[0].id_user + " "+ lesDataTransformed[0].name_user;


// // BOUCLE parcourrir le tablo et créer des parapgraphe pour chaque data 
// for(const uneCase of lesDataTransformed){
//     let unParagraphe = document.createElement('p');
//     unParagraphe.innerText = uneCase.id_user + ':' +uneCase.name_user;
//     document.body.append(unParagraphe)
// }

// }

// afficherUser()




// EXO POO CLASSE : Les comptes bancaire 

// ## Exception+POO 

// ## Enoncé gérer des comptes en banques 

// ## Consignes
//  - créer une classe CompteBancaire avec les méthodes de crédit, de retrait et de visualisation de l'état du compte
// on doit pouvoir également faire un virement d'un membre à un autre 
// - générer une exception sur le prélèvement / retrait interdit (qui dépasse le solde)

//  ## Détails 

// Faire un scénario avec gestion de 3 comptes crédités à 1000 chacun (Alex, Clovis, Marco), puis Alex retire 100, puis Marco fait un virement de 300 à Clovis... Enfin Alex tente un retrait de 1200. Afficher tous les soldes finaux. Ces comptes sont placés dans un tableau associatif de clients. les sorties sont dans la console

// Set up de l'objet lesComptes pour ensuite faire le scénario


// ——————————————————————————————————————————————————————————————————————

// class CompteBancaire {
//     constructor(titulaire){
//         this.titulaire = titulaire; 
//         this.solde = 0 
//     }
  
//     crediter(montant){
//         this.solde += montant;
//         console.log(`Ajout de ${montant} pour le compte de ${this.titulaire}`)
//     }
  
//     retirer(montant){
//         try{
//             if(this.solde < montant){
//                 throw this.titulaire + "retrait de : " + montant + " REFUSED avec un solde de" + this.solde;
//             }
//             this.solde -= montant;
//             console.log("retrait de " + montant + 'pour' + this.titulaire )
//         }
//         catch(error){
//             console.log("Mon error custom ---> "+error)
//         }
//     }
  
//     affichage(){
//         return 'titulaire : ' + this.titulaire + 'solde : ' + this.solde;
//     }
  
//     virer(montant, personne){
//         personne.crediter(montant);
//         this.retirer(montant);
//     }
//   }
//   const lesComptes = {
//     "Alex" : new CompteBancaire("Alex"),
//     "Clovis" : new CompteBancaire("Clovis"),
//     "Marco" : new CompteBancaire("Marco"),
//   }  
//   for(let element in lesComptes){
//     lesComptes[element].crediter(1000)
//   }
//   lesComptes['Alex'].retirer(100);
  
//   lesComptes['Marco'].virer(300, lesComptes['Clovis']);
  
//   lesComptes['Alex'].retirer(1200);
  
//   for(let unTruc in lesComptes){
//     lesComptes[unTruc].affichage()
//   }

// ——————————————————————————————————————————————————————————————————————

// EXO REGEX pt1
// Test du Mail 

// Définir une regex pour le mail  : 
// avant le @ : 
// on accepte tous les caractères de a à  z, de 0 à 9 ainsi que le . , 
// le   (underscore)
// le - (tiret du 6)

// après le @ : 
// on accepte tous les caractères de a à  z, de 0 à 9 ainsi que le . , 
// le   (underscore)
// le - (tiret du 6)

// après le . (.fr, .com etc...)
// on accepte tous les caractères de a à z 
// on accepte entre 2 et 6 caractères

// On peut utiliser la ƒ° test()

// mettre en place un programme JS qui va tester si notre adresse mail est valide 
// on va surveiller l'evenement keyup
// Si l'adresse mail est OK alors on change le BGColor de l'input en VERT

// Sinon 
// on change le BGColor de l'input en VERT




const login = document.querySelector("#login");
const password = document.querySelector("#password");
const resultatPassword = document.querySelector("#resultatPassword");

login.addEventListener("keyup", function(){

    
    let maRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    
    if(!maRegex.test(login.value)){
        console.log(login.value);
        login.style.backgroundColor = "red";
    }
    else{
        login.style.backgroundColor = "green";
    }
});




// EXO Regex Part 2 : test du MPD

// On va mettre en place un addEventListener qui surveille le clavier de l'utilisateur, pour le password 
// On va utiliser la ƒ° match()
// L'idée sera de cumuler des msg d'erreur au sein de la div avec l'id resultatPassword, les message d'erreur dans une liste 

// Si la longueur de la valeur de l'input est inférieur à 6 
// alors on indique dans la div que le mdp est trop court 

// Si la longueur de la valeur de l'input est inférieur à 8 
// alors on indique dans la div que le mdp est trop long 

// Si le password ne contient pas de caractères spéciaux 
// alors on indique dans la div que le mdp doit contenir des caractères spéciaux

// Si le password ne contient pas de caractères décimaux 
// alors on indique dans la div que le mdp doit contenir au - un chiffre

// Si le password n'est pas valide 
// la div resultatPassword doit avoir des border en rouge 

// Si le password est valide 
// la div resultatPassword doit avoir des border en vert




password.addEventListener("keyup", function(){

    
    let laRegex = /^[\w!#$%&?*"]{6,8}$/;
    let carDecimal = /\d/;
    let carSpeciaux = /[!#$%&?*"]/;
    let erreur = "";

    if(!password.value.match(laRegex)){
        console.log(password.value);
        password.style.backgroundColor = "red";
    }
    else{
        password.style.backgroundColor = "green";
    }

    if(password.value.length < 6){
        resultatPassword.innerHTML = "MDP : <ul>" + "mdp trop court" + "</ul>";
    }
    else if(password.value.length > 8){
        resultatPassword.innerHTML = "MDP : <ul>" + "erreur mdp trop long" + "</ul>";
    }
    else{
        resultatPassword.innerHTML = "MDP : <ul>" + "mdp ok" + "</ul>";
    }

    if(!password.value.match(carSpeciaux)){
        resultatPassword.innerHTML = "MDP : <ul>" + "le mdp doit contenir un caracteres special " + "</ul>";
    }
    else if(!password.value.match(carDecimal)){
        resultatPassword.innerHTML = "MDP : <ul>" + "error le mdp doit avoir 1 chiffre" + "</ul>";
    }
});
