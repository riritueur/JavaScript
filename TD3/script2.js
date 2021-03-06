class MaCase{
			 constructor(valeur,nouvelle){
				 this.valeur = valeur;
				 this.nouvelle = nouvelle;
			 }
		 }
		 
		 class Coordonnees{
			 constructor(abs,ord){
				 this.abs = abs;
				 this.ord = ord;
			 }
		 }
		 
		var grille = new Array(Array(MaCase));
		var lastMoved = undefined;
		var hasMoved = false;
		var hasFusionned = false;
		 
    function init(){
      
			for(var i = 0; i < 4; i++){
				var ligne = Array();
				for(var j = 0; j < 4; j++){
					ligne[j] = new MaCase("",false);
				}
				grille[i] = ligne;
			}
			
			window.addEventListener("keydown",actionClavier,false);
			
			insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
			insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
			
			afficherGrille();
			
    }
		 
		 function insertionValeur(valeur, coordonnee){
			 
			 if(lastMoved != undefined)
				 lastMoved.nouvelle = false;
			 grille[coordonnee.abs][coordonnee.ord].valeur = valeur;
			 lastMoved = grille[coordonnee.abs][coordonnee.ord];
			 lastMoved.nouvelle = true;
		 }
		 
		 function obtenirNouvelleValeur(){
			 var rand = Math.floor(Math.random()*10);
			 if(rand == 0)
				 return 4;
			 else return 2;
		 }
		 
		 function obtenirCaseVide(){
			 if(existsCaseVide(grille)){
				 var found = false;
				 while(!found){
					 var i = Math.floor(Math.random()*4);
					 var j = Math.floor(Math.random()*4);
					 if(grille[i][j].valeur == ""){
						 found = true;
						 return new Coordonnees(i,j);
					 }
				 }
			 }
		 }
		 
		 function existsCaseVide(){
			 var res = false;
			 grille.forEach(function(elem){
				 elem.forEach(function(elem2){
					 if(elem2.valeur == ""){
						 res = true;
					 }
				 });
			 });
			 return res;
		 }
		 
		 function actionClavier(e){
			 console.log("key pressed");
			 if(e.keyCode == 38)
				 deplacementVersHaut();
			 if(e.keyCode == 37)
				 deplacementVersGauche();
			 if(e.keyCode == 39)
				 deplacementVersDroite();
			 if(e.keyCode == 40)
				 deplacementVersBas();
		 }
		 
		 function deplacementVersHaut(){
			 console.log("pressed up");
			 for(var i = 0; i < 4; i++){
					if(!estLigneVide(grille[i])){
						tasserVersHaut(i);
						fusionnerVersHaut();
						tasserVersHaut(i);
					}
				}
			 if(hasMoved || hasFusionned){
				 	insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
					afficherGrille();
				  hasMoved = false;
				 	hasFusionned = false;
			 }
		 }
		 
		 function deplacementVersGauche(){
			 console.log("pressed left");
			 for(var i = 0; i < 4; i++){
					if(!estColonneVide(i)){
						tasserVersGauche(i);
						fusionnerVersGauche();
						tasserVersGauche(i);
					}
				}
			 if(hasMoved || hasFusionned){
				 	insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
					afficherGrille();
				  hasMoved = false;
				 	hasFusionned = false;
			 }
		 }
		 
		 function deplacementVersBas(){
			 console.log("pressed down");
			 for(var i = 3; i >= 0; i--){
					if(!estLigneVide(grille[i])){
						tasserVersBas(i);
						fusionnerVersBas();
						tasserVersBas(i);
					}
				}
			 if(hasMoved || hasFusionned){
				 	insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
					afficherGrille();
				  hasMoved = false;
				 	hasFusionned = false;
			 }
		 }
		 
		 function deplacementVersDroite(){
			 console.log("pressed right");
			 for(var i = 3; i >= 0; i--){
					if(!estColonneVide(i)){
						tasserVersDroite(i);
						fusionnerVersDroite();
						tasserVersDroite(i);
					}
				}
			 if(hasMoved || hasFusionned){
				 	insertionValeur(obtenirNouvelleValeur(), obtenirCaseVide());
					afficherGrille();
				  hasMoved = false;
				 	hasFusionned = false;
			 }
		 }
		 
		 function estLigneVide(ligne){
			 var res = true;
			 ligne.forEach(function(caseee){
				 if(caseee.valeur != "")
					 res = false;
			 });
			 return res;
		 }
		 
		 function estColonneVide(colonne){
			 var res = true;
			 for(var i = 0; i < 4; i++){
				 if(grille[i][colonne].valeur != "")
					 res = false;
			 }
			 return res;
		 }
		 
		 function tasserVersHaut(i){
			 for(var j = 0; j < 4; j++){
				 var done = false;
				 var currentPos = i;
				 if(i != 0){
					 while(!done){
						 if(grille[currentPos-1][j].valeur == "" && grille[currentPos][j].valeur != ""){
							 grille[currentPos-1][j].valeur = grille[currentPos][j].valeur;
							 grille[currentPos][j].valeur = "";
							 console.log("moving value " + currentPos + ";" + j + " to " + (currentPos-1) + ";" + j);
							 hasMoved = true;
						 }
						 else{
							 done = true;
							 console.log("encountered filled case");
						 }
						 if(currentPos-1 <= 0){
							 done = true;
							 console.log("end of board");
						 }
						 currentPos--;
					 }
				 }
			 }
			 afficherGrille();
		 }
		 
		 function tasserVersGauche(i){
			 for(var row = 0; row < 4; row++){
				 var done = false;
				 var currentPos = i;
				 if(i != 0){
					 while(!done){
						 if(grille[row][currentPos-1].valeur == "" && grille[row][currentPos].valeur != ""){
							 grille[row][currentPos-1].valeur = grille[row][currentPos].valeur;
							 grille[row][currentPos].valeur = "";
							 console.log("moving value " + row + ";" + currentPos + " to " + row + ";" + (currentPos-1));
							 hasMoved = true;
						 }
						 else{
							 done = true;
							 console.log("encountered filled case");
						 }
						 if(currentPos-1 <= 0){
							 done = true;
							 console.log("end of board");
						 }
						 currentPos--;
					 }
				 }
			 }
			 afficherGrille();
		 }
		 
		 function tasserVersDroite(i){
			 for(var row = 0; row < 4; row++){
				 var done = false;
				 var currentPos = i;
				 if(i != 3){
					 while(!done){
						 console.log("row : " + row + " ; currentPos : " + currentPos);	
						 if(grille[row][currentPos+1].valeur == "" && grille[row][currentPos].valeur != ""){
							 grille[row][currentPos+1].valeur = grille[row][currentPos].valeur;
							 grille[row][currentPos].valeur = "";
							 console.log("moving value " + row + ";" + currentPos + " to " + row + ";" + (currentPos+1));
							 hasMoved = true;
						 }
						 else{
							 done = true;
							 console.log("encountered filled case");
						 }
						 if(currentPos+1 >= 3){
							 done = true;
							 console.log("end of board");
						 }
						 currentPos++;
					 }
				 }
			 }
			 afficherGrille();
		 }
		 
		 function tasserVersBas(i){
			 for(var j = 0; j < 4; j++){
				 var done = false;
				 var currentPos = i;
				 if(i != 3){
					 while(!done){
						 if(grille[currentPos+1][j].valeur == "" && grille[currentPos][j].valeur != ""){
							 grille[currentPos+1][j].valeur = grille[currentPos][j].valeur;
							 grille[currentPos][j].valeur = "";
							 console.log("moving value " + currentPos + ";" + j + " to " + (currentPos+1) + ";" + j);
							 hasMoved = true;
						 }
						 else{
							 done = true;
							 console.log("encountered filled case");
						 }
						 if(currentPos+1 >= 3){
							 done = true;
							 console.log("end of board");
						 }
						 currentPos++;
					 }
				 }
			 }
			 afficherGrille();
		 }
		 
		 function fusionnerVersHaut(){
			 for(var i = 0; i < 3; i++){
				 for(var j = 0; j < 4; j++){
					 if(grille[i+1][j].valeur == grille[i][j].valeur && grille[i+1][j].valeur != ""){
						 grille[i][j].valeur *= 2;
						 grille[i+1][j].valeur = "";
						 hasFusionned = true;
					 }
				 }
			 }
		 }
		 
		 function fusionnerVersBas(){
			 for(var i = 3; i >= 1; i--){
				 for(var j = 3; j >= 0; j--){
					 if(grille[i-1][j].valeur == grille[i][j].valeur && grille[i-1][j].valeur != ""){
						 grille[i][j].valeur *= 2;
						 grille[i-1][j].valeur = "";
						 hasFusionned = true;
					 }
				 }
			 }
		 }
		 
		 function fusionnerVersGauche(){
			 for(var i = 0; i < 4; i++){
				 for(var j = 0; j < 3; j++){
					 if(grille[i][j+1].valeur == grille[i][j].valeur && grille[i][j+1].valeur != ""){
						 grille[i][j].valeur *= 2;
						 grille[i][j+1].valeur = "";
						 hasFusionned = true;
					 }
				 }
			 }
		 }
		 
		 function fusionnerVersDroite(){
			 for(var i = 3; i >= 0; i--){
				 for(var j = 3; j >= 1; j--){
					 if(grille[i][j-1].valeur == grille[i][j].valeur && grille[i][j-1].valeur != ""){
						 grille[i][j].valeur *= 2;
						 grille[i][j-1].valeur = "";
						 hasFusionned = true;
					 }
				 }
			 }
		 }
		 
		 function afficherGrille(){
			 var elements = document.body.querySelectorAll(".case");
			 for(var i = 0; i < 4; i++){
				 for(var j = 0; j < 4; j++){
					 elements[i*4+j].innerHTML = "<h1>" + grille[i][j].valeur + "</h1>";
					 if(grille[i][j].nouvelle)
						 elements[i*4+j].style.backgroundColor = "red";
					 else
						 elements[i*4+j].style.backgroundColor = "#d2d2d2";
				 }
			 }
		 }