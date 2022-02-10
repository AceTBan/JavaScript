let message = "SALUT !!!!!";
let num = 1;
let chiffre = 2;
console.log(chiffre + num);
chiffre = 99;
console.log(chiffre + num);

// simple ou double quote
// Si besoin anti slash pour échapper un caractère
let slt = 'Coucou J\'aime les choco!!!';
let msg = "Salut \"MR jojo\"";
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
let myTablo = [12, "LOL", nom, age];
myTablo.pop();
myTablo.push("COOOOOL");
console.log(myTablo);




// Exemple fonction 
maSuperFonction();

// D'abord on déclare notre fonction
function maSuperFonction() {
  console.log('Hello World');
  console.log(22 + 55);
}
// On exec au moins 1 fois notre fonction
maSuperFonction();
maSuperFonction();




// Exo function
let noteA = 10;
let noteB = 20;
let resultMoy = calcul(noteA, noteB);

function calcul(a, b) {
  return (a + b) / 2;
}
console.log(resultMoy);




// exemple opérateur ternaire (un if simple) simplifié
let age = 22;
let majorité = 18;
console.log(age > majorité ? "OK" : "NON");




let voiture = {
  "vitesse": 500,
  "nbChevaux": 500,
  "pilotes": ["JAKO", "JANINE"]
}

//tableau associatif
console.log(voiture["pilotes"]);
//Object classique
console.log(voiture.vitesse);




let titre = document.body.getElementsByTagName("h1")[0];
console.log(titre);

titre.style.color = "red";




//Exemple de selection d'elements html via les ƒ° getElement(s)By ....

//Ici on stocke TOUS les titres H1 de la page
let mesTitres = document.body.getElementsByTagName("h1");
console.log(mesTitres);

//HTMLCollection est un tableau donc on peut utiliser le système d'index
//Pour récupérer 1 Titre en particulier
let monTitre = document.body.getElementsByTagName("h1")[0];
console.log(monTitre);
//Là on récupère le <p> par son id 
let paragraphe = document.getElementById("lol");
console.log(paragraphe);
//Now on stock TOUS les elements qui ont la classe "super"
let lesImg = document.body.getElementsByClassName("super");
console.log(lesImg);
//Quand on récupère TOUS les elements avec la classe super , on veut le 1er
let monImg = document.body.getElementsByClassName("super")[0];
console.log(monImg);

//On stock le 1er titre h1 sur lequel il tombe
let leTitre = document.body.querySelector("h1");
console.log("querySelector", leTitre);

//On stock le 1er element html avec la classe "super" sur lequel il tombe
let uneImage = document.body.querySelector(".super");
console.log("querySelector", uneImage);


//On stock tous les paragraphe <p> de la page dans une NODELISTE
let tousLesParag = document.body.querySelectorAll("p");
console.log("querySelectorAll", tousLesParag);

//NodeList a aussi un système d'indice, on peut s'en servir
// pour select un élément précis même avec querySelectorAll
let leParagraphe1 = document.body.querySelectorAll("p")[0];
console.log("querySelectorAll", leParagraphe1);

//On récup TOUS les éléments qui ont la classe "super"
let trucClassSuper = document.body.querySelectorAll(".super")
console.log(trucClassSuper)



let title1 = document.body.querySelector("h1");
let para = document.body.querySelector("p");
// document.body.insertBefore(para, title1);
//Avec Append pou rplacer à la fin du body ici
document.body.append(title1);
//RemoveChild pour Suppr un élement
document.body.removeChild(title1);
//Step 1 : Créer un nouveau TextNode
let newTxt = document.createTextNode("WALLLLCOMMME");
//Step 2 : Penser à placer le newTxt
document.body.appendChild(newTxt);
//Pour remplacer un element par un autre
document.body.replaceChild(newTxt, title1);

//CREATION DE n'importe quel élément HTML
//Step 1 créer l'element
let newH1 = document.createElement("h1");
//Step 2 Remplir element
newH1.innerText = "SUPER G CRée un truc";
//Step 3 PLACER l'element
document.body.append(newH1);



// EXO Function + createElement

function ajoutTexte(pseudo, duTexte) {
  const nouveauTxt = document.createElement('p');
  // <p><strong></strong></p>
  // console.log(nouveauTxt.innerHTML);

  //on rempli le texte entre <p></p>
  // nouveauTxt.innerText = pseudo + " " + duTexte;
  nouveauTxt.innerHTML = `<strong>${pseudo}</strong> : ${duTexte}`;
  //pas oublier de placer ce nouveau <p> rempli dans la page
  document.body.appendChild(nouveauTxt);
}

ajoutTexte("JOSé", 'Garcia');
ajoutTexte("bobo", 'Le Hobbit');
ajoutTexte("Janine", 'deLaVega');
ajoutTexte("coco", 'Lastico');




// Exemple Utilisation de get et set Attribute
let premierParag = document.body.getElementsByTagName("p")[0];
//GetAttribute pour savoir si sur tel élément on a tel attribut 
console.log(premierParag.getAttribute("href"));

let newImg = document.createElement("img");
// Set Attribute pour rajouter un attribut (si l'attribut existe deja il est MAJ)
newImg.setAttribute("src", "https://media.giphy.com/media/ToMjGpyHCsjmGbYU2bK/giphy-downsized-large.gif")
document.body.append(newImg);




// Exemple de modification de style
let leTitre = document.querySelector("h1");

leTitre.style.backgroundColor = "aqua";
leTitre.style.fontFamily = "Impact";
leTitre.style.boxShadow = "2px 2px 40px green";
leTitre.style.height = "400px";




// let leTitre = document.querySelector("h1");

console.log(leTitre.classList)
leTitre.classList.add('maClasse');
// leTitre.classList.remove('maClasse');




// element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
/// Version COMPACTE
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});




let leTitre = document.querySelector("h1");

leTitre.addEventListener("click", function() {
  console.log('OK CA réagit');
  leTitre.innerText = "CLICKED";
});

// EXO : addEventListener + classList



const leTitre = document.querySelector("h1");
const lesLiens = document.querySelectorAll("a");

lesLiens[0].addEventListener("click", function() {
  leTitre.classList.add("maCouleur")
});

lesLiens[1].addEventListener("click", function() {
  leTitre.classList.remove("maCouleur")
});
lesLiens[2].addEventListener("click", function() {
  leTitre.classList.toggle("maCouleur")
});


// EXO Dom addEventListener + mouseout


const monTitre = document.querySelector("h1");

document.addEventListener("mouseout", function() {
  monTitre.style.display = "block";
});




// ** addEventListener - focus - blur
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent

let leInput = document.querySelector("input");

leInput.addEventListener("focus", function() {
  leInput.style.backgroundColor = "royalBlue";
});
leInput.addEventListener("blur", function() {
  leInput.style.backgroundColor = "red";
});




// Exemple de RemoveEventListener
let leLien = document.querySelector("a");

function monClic() {
  console.log("SALUT C COOL");
  leLien.removeEventListener("click", monClic)
}
leLien.addEventListener("click", monClic);




// EXEMPLE syntaxe fonction flechées
let leTitre = document.body.querySelector("h1");
//AddEventListener + syntaxe de function classique
leTitre.addEventListener("click", function() {
  console.log("Super la F =>")
});
//AddEventListener + syntaxe de function fléchées
// avant la => on trouve les paramètre
// après lla fleche : ce que doit faire / retourner la fonction
leTitre.addEventListener("click", () => {
  console.log("Super la F =>")
});




//   exemple dans AddEventListener on rajoute un param à la fonction , pour le console log et voir ce qu'il y a dans cet event 
let leTitre = document.body.querySelector("h1");
//AddEventListener + syntaxe de function classique
leTitre.addEventListener("click", function(event) {
  console.log(event)
});




// Event Keypress
const leTitre = document.querySelector('h1');
const monInput = document.querySelector('input');
monInput.addEventListener("keypress", function(event) {
  console.log(event.key);
  // console.log(event.key);
  leTitre.innerText += event.key;
});




// Exemple pour accèder à la value d'un input ou texteArea
const monInput = document.querySelector('input');
monInput.value = "JEAN JACK";


// Set UP exo desactiver button 

let txt = document.body.querySelector("textarea");
console.log(txt.innerText);
let btn = document.body.querySelector("button");
console.log(btn);

txt.addEventListener("keyup", function(){
  if(txt.value.length >= 5){
    console.log(txt.innerText);

    btn.disabled = true;
  }
  else{
    btn.disabled = false}
})

// version compacte 

let txt = document.body.querySelector("textarea");
console.log(txt.innerText);
let btn = document.body.querySelector("button");
console.log(btn);

txt.addEventListener("keyup", function(){
  btn.disabled = txt.value.length >= 5 ? true : false;
})




// EXemple d'utilisation de localStorage
//On sauvegarde la key monChat avec la valeur TOm dans localStorage
localStorage.setItem('monChat', 'Tom');

//On récupère dans une variable ce qui est stocké en localStorage avec la key monChat
let cat = localStorage.getItem('monChat');
console.log(cat);




// ** Sauvegarder dans localStorage - getItem() - setItem() - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: à la valeur contenue dans monTxt on assigne localStorage
// TODO 3-2: sur localStorage on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de rendu, localStorage sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur localStorage on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de rendu la valeur contenue dans monTxt




let monTxt = document.querySelector("textarea");
let rendu = document.querySelector("div");
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
monTxt.value = localStorage.getItem("monSuperTexte");
//Si monTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if (monTxt.value) {
    rendu.innerText = localStorage.getItem("monSuperTexte");
}
//On détecte ce que tape l'utilisateur dans le textarea
monTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
    localStorage.setItem("monSuperTexte", monTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
    rendu.innerHTML = marked(monTxt.value);
});


// SetTimeOut

const monTitre = document.querySelector("h1");

setTimeout(function() {
    monTitre.textContent = "SALUT C'EST COOL";
    // monTitre.innerHTML = "SALUT C'EST COOL";
    monTitre.style.opacity = 1;
    document.body.style.background = "royalblue";
}, 2000)




// SetInterval




const monTitre = document.querySelector("h1");
let timer = 3;
monTitre.addEventListener("click", function(){
    const countDown = setInterval(function() {
        // setInterval(function() {

        if(timer > 0) {
            monTitre.innerHTML = timer;
        }
        else{
            monTitre.textContent = "GO GO GO";
            clearInterval(countDown);
        }
        console.log(timer);
        timer--;
    },1000);
})


// EXEMPLE d'utilisation de map sur les tableaux


let monTab = [1,2,3,4,5];
console.log(monTab);

//Map va prendre une fonction (avec ou sans param),
//pour parcourir le tableau automatiquement
//Lors du parcours map va stocker temporairement chaque 
//case dans la variable uneCase
let plus = monTab.map((uneCase) => uneCase *2);

//Ici on fait juste que remplacer donc pas besoin de stocker temporairement
//chaque case dans une variable
let remplace = monTab.map(() => 5);
console.log(remplace);
console.log(plus);




// preventDefault - addEventListener - 
const monForm = document.querySelector("form");

monForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
    console.log(event)
    monForm.reset();
});




//On récupère TOUS les <p>
const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);
// On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);
//On utilise une variable temporaire uneCase pour que map stock chaque <P> dans
//Cette variable uneCase, on peut s'en servir pour modifier le innerHtml
textesTab.map(uneCase => uneCase.innerHTML = "LOL JE SUIS HACKERMAN" );

// textesTab.map((x) => x.style.color = "red");


textesTab.map(function(x,i){
    x.style.color = "red";
    console.log(i)
});

console.log(textesTab);
//Bonus : utilisation de map pour placer un addEventListener sur chaque <p>
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));




// ** addEventListener - load




let lesImages = document.querySelectorAll(`img`);
let tabImg = Array.from(lesImages);
tabImg.map(function (uneImage, index) {
    uneImage.addEventListener('load', function () {
        // console.log('Image number : ' + index + 'Finished image loading.');
        console.log(`Image number : ${index} – Finished image loading.`);
    });
});




// addEventListener  capter un évènement click coord x coord y 




//Dans toute la page on reagit au click, on veut capter cet event.
document.addEventListener("click", function(unEvent) {
  //On concole log l'event que l'on capte pour voir si des propriétés 
  //peuvent nous interresser
  console.log(unEvent);
  //on console log les propriétés X et Y du click (clientX, clientY)
  console.log("Coord X",unEvent.x, "-", "Coord Y:", unEvent.y);
  //Ensuite on va créer une image 
  const monImg = document.createElement("img");
  const taille = 90;
  //Puis on va modifier l'attribut SRC de l'image, pour lui asisgner 
  //L'url d'une image de notre choix
  monImg.setAttribute
  //Optimisation : avec la variable taille dans l'url
      ("src",`https://www.placecage.com/${taille}/${taille}/`);
          //Puis on change le type de position (absolute ca se place ou on veut dans la page)
          monImg.style.position = "absolute";
          //pour opti le centrage, on soustrait la moitié de la taille de l"img
          monImg.style.left = unEvent.x - taille /2 + "px";
          monImg.style.top = unEvent.y - taille /2 + "px";
          //On oubli pas de placer l'image dns la page
          document.body.appendChild(monImg);
});




// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY




//On stock la div de laBar
const laBar = document.querySelector(".bar");

//On va réagir quand le user scroll dans la page
addEventListener("scroll", function(event) {
    console.log(event);
    //Le scrollMax = hauteur de la page - hauteur de affichage
const scrollMax = document.body.scrollHeight - innerHeight;
// On fait un pourcentage du scroll de l'utilisateur
const onEstOu = scrollY / scrollMax * 100;
//Enfin on assigne ce pourcentage de scroll
//à la width(%) du style de la bar.
laBar.style.width = onEstOu + "%";
    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}
    pourcentage de scroll :${onEstOu} %`);
});




// ** addEventListener - capter un evènement clavier - "keypress" - array.includes()





const leTexte = document.querySelector("input");
//Dans ce tab on rangera les lettres tapée (sans les voyelles)
const txt = [];
const voyelles = ["a","e","i","o","u","y"];

leTexte.addEventListener("keypress", function(unEvent){
    // console.log(unEvent)
    const uneTouche = unEvent.key;
    //Si uneTouche n'est pas incluse dans le tab des voyelle
    //Alors on range uneTouche dans le tab txt via push
    if(!voyelles.includes(uneTouche)) {
        txt.push(uneTouche);
    }
    console.log(txt.join("-"));
});




