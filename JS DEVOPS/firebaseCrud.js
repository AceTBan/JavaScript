const firebaseConfig = {

    apiKey: "AIzaSyAZ3VzbeYv3m_Nn3wnBcPJnaZIR1rbn0gM",

    authDomain: "monsuperprojet-c9c30.firebaseapp.com",

    projectId: "monsuperprojet-c9c30",

    storageBucket: "monsuperprojet-c9c30.appspot.com",

    messagingSenderId: "579851699577",

    appId: "1:579851699577:web:911bfe07805760d6841ba8"

  };
  firebase.initializeApp(firebaseConfig);

  // On va créer une référence à notre BDD
  const dbRef = firebase.database().ref();
  // On va également faire une ref directement dans le noeud /""""''''table''''""""\
  const usersRef = dbRef.child("users")

//----------------------------------------------------------------EXO FB 1 READ : ----------------------------------------------------------------
// °créer une fonction readUserData
// °dans cette fonction on va stocker notre user-list dans 1 variable userListUI

// ° sur notre variable userRef on va utiliser la fonction on()
// ° on() elle aura 1 premier param la string "value" et une variable temporaire snap (param fonction=>)

// ° comme ça   :     on("value", snap =>{})

// °Dans la fonction on() on va vider le innerHTML de userListUI
// ° sur snap on utilise la fonction forEach qui a dans ses param, une fonction fléchées qui elle a un param : une variable childSnap

// °Dans la fonction => du forEach, 
// dans une variable key on lui assigne childSnap.key
// dans une variable value on lui assigne childSnap.val()
// Puis, dans 1 variable $li,on crée un élément "li"
// dans le innerHTML de $li on lui assigne value.name
// on modifie l'attribut "user-key" de $li pour lui passer key 

// On place $li dans la userListUI.

  readUserData();

  function readUserData(){
    const userListUI = document.getElementById("user-list");

    usersRef.on("value",snap =>{
      snap.forEach(childSnap =>{
        let key = childSnap.key;
        let value = childSnap.val();
        let $li = document.createElement("li");
        $li.innerHTML=value.name;
        $li.setAttribute("user-key",key);
        userListUI.append($li);
      })
    })
  }

//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||
//
//   function readUserData(){
//     //récupération de la liste (vide pour le moment)
//   const userListUI = document.getElementById("user-list");
// //Sur usersRef on va surveiller les changement de valeur sur la """table""" users
// // snap = photo de la BDD à ce moment là
//     usersRef.on("value", snap =>{
//      userListUI.innerHTML = "";
// //On va parcourir snap (table users)
// //childSnap va représenté chaque users 
//       snap.forEach(childSnap =>{
//           //On stock les key pour chaque user
//           let key = childSnap.key;
//           //On stock les valeur correspondantes (email, name, age)
//           let value = childSnap.val();
//           //creation de la <li></li>
//           let $li = document.createElement('li');
//           //remplissage de la <li></li>
//           $li.innerHTML = value.name;
//           //On place un attribut user-key sur chaque <li></li> (l'id de l'utilisateur)
//           $li.setAttribute('user-key', key);
//           //on place dans la liste <ul></ul> les <li> </li> créees
//           userListUI.append($li)
//       })
//     })
// }
//
//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||

//----------------------------------------------------------------EXO FB 3 Ajouter un USER----------------------------------------------------------------

// °Récupérer le bouton avec l’id add-user-btn

// ° sur ce bouton placer un addEventlistener au click et qui lance la fonction addBtnClicked

// °Créer la fonction addBtnClicked

// °Récupérer la référence à notre BDD directement sur le noeud users

// °Récupérer dans 1 variable addUserInputsUI (les input pour rajouter un user qui ont la classe user-input)

// ° créer une variable newUser (un objet vide)

// ° faire une boucle pour parcourir les input dans addUserInputsUI

// ​    -Pour chaque éléments parcourus on récupère 
// Dans 1 variable key = addUserInputsUI[i].getAttribute('data-key');

// et 1 variable value = addUserInputsUI[I].value

// - Pour chaque clé (âge, name, email) on l’associe à notre nouvel utilisateur newUser[key] = value

// °après le parcours des inputs, on va faire un push dans la référence à users dans notre bdd

// °on console log un msg type nouvel utilisateur enregistré

// °On console log le nom et l’âge du nouvel utilisateur

// °On ré initialise le formulaire avec l’id leFormulaireAjout

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked() {
  const userListUI = document.querySelectorAll("user-list");
  let newUser = "";
  // Boucle for (classique ) pour parcourir les addUserInputsUi
  for(let i = 0; i < addUserInputsUI.length; i++){
    //on recup les key les value
    }


}