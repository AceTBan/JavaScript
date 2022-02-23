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
// °créer une fonction readUserData ✓
// °dans cette fonction on va stocker notre user-list dans 1 variable userListUI  ✓

// ° sur notre variable userRef on va utiliser la fonction on() ✓
// ° on() elle aura 1 premier param la string "value" et une variable temporaire snap (param fonction=>)  ✓

// ° comme ça   :     on("value", snap =>{})  ✓

// °Dans la fonction on() on va vider le innerHTML de userListUI  ✓
// ° sur snap on utilise la fonction forEach qui a dans ses param, une fonction fléchées qui elle a un param : une variable childSnap ✓

// °Dans la fonction => du forEach, ✓
// dans une variable key on lui assigne childSnap.key ✓
// dans une variable value on lui assigne childSnap.val() ✓
// Puis, dans 1 variable $li,on crée un élément "li"  ✓
// dans le innerHTML de $li on lui assigne value.name ✓
// on modifie l'attribut "user-key" de $li pour lui passer key ✓

// On place $li dans la userListUI. ✓
//----------------------------------------------------------------EXO FB 1 READ : ----------------------------------------------------------------

//****************************************************************************************************//
  readUserData();

  // function readUserData(){
  //   const userListUI = document.getElementById("user-list");

  //   usersRef.on("value",snap =>{
  //     snap.forEach(childSnap =>{
  //       let key = childSnap.key;
  //       let value = childSnap.val();
  //       let $li = document.createElement("li");
  //       $li.innerHTML=value.name;
  //       $li.setAttribute("user-key",key);
  //       userListUI.append($li);
  //     })
  //   })
  // }
//****************************************************************************************************//

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

// °Récupérer le bouton avec l’id add-user-btn  ✓

// ° sur ce bouton placer un addEventlistener au click et qui lance la fonction addBtnClicked ✓

// °Créer la fonction addBtnClicked ✓

// °Récupérer la référence à notre BDD directement sur le noeud users ✓

// °Récupérer dans 1 variable addUserInputsUI (les input pour rajouter un user qui ont la classe user-input)  ✓

// ° créer une variable newUser (un objet vide) ✓

// ° faire une boucle pour parcourir les input dans addUserInputsUI ✓

// ​    -Pour chaque éléments parcourus on récupère 
// Dans 1 variable key = addUserInputsUI[i].getAttribute('data-key');

// et 1 variable value = addUserInputsUI[I].value

// - Pour chaque clé (âge, name, email) on l’associe à notre nouvel utilisateur newUser[key] = value

// °après le parcours des inputs, on va faire un push dans la référence à users dans notre bdd

// °on console log un msg type nouvel utilisateur enregistré

// °On console log le nom et l’âge du nouvel utilisateur

// °On ré initialise le formulaire avec l’id leFormulaireAjout
//----------------------------------------------------------------EXO FB 3 Ajouter un USER----------------------------------------------------------------

//****************************************************************************************************//
// const addUserBtnUI = document.getElementById("add-user-btn");
// addUserBtnUI.addEventListener("click", addUserBtnClicked);

// function addUserBtnClicked() {
//   const userListUI = document.querySelectorAll("user-list");
//   let newUser = "";
//   // Boucle for (classique ) pour parcourir les addUserInputsUi
//   for(let i = 0; i < addUserInputsUI.length; i++){
//     //on recup les key les value
//     }


// }
//****************************************************************************************************//




//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||
// --------------------------
// CREATE
// --------------------------
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked() {
    //une reférence à notre table users
    // const usersRef = dbRef.child('users');
    // Récup des 3 inputs
    // const addUserInputsUI = document.getElementsByClassName("user-input");
    const addUserInputsUI = document.querySelectorAll(".user-input");

    console.log(addUserInputsUI);
     // Cet objet va stocker les infos du nouvel utilisateur
    let newUser = {};
    // On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
    for(let i = 0; i < addUserInputsUI.length; i++){
    // Ci dessous on récupère les key et value
        let key = addUserInputsUI[i].getAttribute('data-key');
    // Valeur qu'on récup dans les inputs.    
        let value = addUserInputsUI[i].value;
    // Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
        newUser[key] = value;
    }
    // on ajoute notre nouvel utilisateur dans la BDD
    usersRef.push(newUser);
    console.log("New User SAVED");
    console.log(`${newUser.name} il a ${newUser.age} ans`);
    document.getElementById('leFormulaireAjout').reset();
}
//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||



//----------------------------------------------------------------La fonction READ + l'icone delete ----------------------------------------------------------------

//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||
function readUserData(){
  //récupération de la liste (vide pour le moment)
const userListUI = document.getElementById("user-list");
//Sur usersRef on va surveiller les changement de valeur sur la """table""" users
// snap = photo de la BDD à ce moment là
  usersRef.on("value", snap =>{
   userListUI.innerHTML = "";
//On va parcourir snap (table users)
//childSnap va représenté chaque users 
    snap.forEach(childSnap =>{
        //On stock les key pour chaque user
        let key = childSnap.key;
        //On stock les valeur correspondantes (email, name, age)
        let value = childSnap.val();
        //creation de la <li></li>
        let $li = document.createElement('li');

        // Icon DELETE 
        let deleIconUi = document.createElement("span");
        deleIconUi.class = "delete-user";
        deleIconUi.innerText = "    X";
        deleIconUi.setAttribute("userid",key);
        deleIconUi.addEventListener("click", deleteButtonClicked);

        //remplissage de la <li></li>
        $li.innerHTML = value.name;
        //On place un attribut user-key sur chaque <li></li> (l'id de l'utilisateur)
        $li.setAttribute('user-key', key);
        //on place dans la liste <ul></ul> les <li> </li> créees

        // //On place l'icone dans la <li> de chaque utilisateur</li>
        $li.append(deleIconUi);

        userListUI.append($li)
    })
  })
}

// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(event){
  console.log(event);
  let userID = event.target.getAttribute("userid");
  console.log(userID);
  const userRef = dbRef.child('users/' + userID)
  console.log(userRef);
  console.log(`ADIOS ${event.path[1].innerText}`);
  userRef.remove();
}

//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||



//----------------------------------------------------------------fonction userClicked----------------------------------------------------------------

// fonction userClicked ✓

// °Cette fonction prend une variable event en paramètre ✓

// °Dans cette fonction userClicked : ✓

//    - Dans 1 variable userID, on va récupérer userID via event.target.getAttribute("user-key");  ✓

// ​    -1 variable userRef va faire référence à 1 utilisateur en particulier,sur dbRef on utilise la fonction child() pour viser le noeud “users/“ concaténé avec userID ✓

//     -1 variable userDetailUI récupère ma div avec l'ID user-detail ✓

//      -Ensuite sur userRef on utilise la fonction ✓

// on(« value », snap =>{ })  ✓

// Dans la fonction => , on va vider l’innerHTML de userDetailUI ✓

// Ensuite sur snap on va utiliser un forEach pour parcourir le cliché (snap) de notre BDD.
// snap.forEach(childSnap =>{ })  ✓

// Dans la =>du forEach, ✓
// -1 variable $p créée un élément <p>  ✓
// -On rempli le innerHTML de $p avec childSnap.key et childSnap.val()
// -On rajoute $p dans notre userDetailUI ✓

//----------------------------------------------------------------fonction userClicked----------------------------------------------------------------


//****************************************************************************************************//

function userClicked(event){
  let userID = event.target.getAttribute("user-key");
  const userRef = dbRef.child("users/" + userID)
  let userDetailUI = document.getElementById("user-detail");
  userRef.on("value",snap =>{
    userDetailUI.innerHTML="";
    snap.forEach(childSnap =>{
      let $p = document.createElement("p");
      $p.innerHTML = childSnap.key + '   :   ' + childSnap.val();
      userDetailUI.append($p)
    })
  })

}

//****************************************************************************************************//


//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||
// // --------------------------
// // USER DETAILS
// // --------------------------
// function userClicked(event){
//   console.log(event)
//     // Pour identifier sur quel utilisateur on a cliqué
//     // récuperer l'id des USERS via getAttribute
//   let userId = event.target.getAttribute("user-key");
//   console.log(userId);
//       // on vise 1 utilisateur précis dans la BDD via son id
//   const userRef = dbRef.child('users/' + userId)

//       // On récup la DIV avec l'id user-detail
//   const userDetailUi = document.getElementById('user-detail');
// //Avec on on va surveiller les changement de valeur sur cet user (1 user en particulier)
// // snap = photo de la BDD (de ce user) à ce moment là
//   userRef.on("value",snap =>{
//     //On vide le innerHTML de userDetailUI
//     userDetailUi.innerHTML = "";
//     //on va faire une boucle pour afficher  à côté du nom utilisateur 
//     //Les paires clé valeur (la boucle affiche autant de paragraphe qu'il ya des key-value)
//     snap.forEach(childSnap =>{
//       //on crée un <p></p>
//       let $p = document.createElement('p');
//       //on rempli le innerHTML de ce <p> avec les key  et value (concaténation)
//       $p.innerHTML = childSnap.key + '   :   ' + childSnap.val();
//       //on va placer ce <p></p> dans la userDetailUI
//       userDetailUi.append($p);
//     })
//   })
// }
//||||||||||||||||||||||||||||||||||CORRECTION||||||||||||||||||||||||||||||||||||||||||
