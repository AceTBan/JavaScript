const firebaseConfig = {
    apiKey: "AIzaSyAHPX6TrYLGa3PnZtzZgmVEWufonrca-54",
    authDomain: "monprojetsuper.firebaseapp.com",
    projectId: "monprojetsuper",
    storageBucket: "monprojetsuper.appspot.com",
    messagingSenderId: "672599838909",
    appId: "1:672599838909:web:5a13493068c406677d67d4"
  };
  firebase.initializeApp(firebaseConfig);
  //On va créer une référence à notre BDD
  const dbRef = firebase.database().ref();
  // On va également faire une ref directement dans le noeud / """"table""""" users
  const usersRef = dbRef.child('users');
  readUserData();

// --------------------------
// READ
// --------------------------
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
            //On place l'icone dans la <li> de chaque utilisateur</li>
            $li.append(deleIconUi);
            $li.addEventListener('click', userClicked);
            userListUI.append($li);
        })
      })
  }


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
    // On fait une boucle pour récupérer les clés et valeurs de chaque input dans le formulaire
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


function userClicked(event){
  
}



