# M4103 - TD n° 2


La page HTML de l'exercice est disponible [ici](index.html)
Le script JS de l'exercice est disponible [ici](scripts.js)


------------


## 4) Exercice 1

### 4.1/ Sélection d'un objet

1.  Comment avez-vous ajouté l’écouteur d’évènement et sur quel objet ?

   	Nous avons utilisé la méthode addEventListener et nous l'avons appliquée sur tous les éléments de document.childNodes
    
    
    
2.  Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?

    Les élémets placés dans la liste ne fonctionnent pas.
		
		
### 4.2/ Insertion d'objets

1. 	Comment avez-vous ajouté l'élément ?
		
    Nous avons ajouté l'élément en créant une node avec les méthodes createTextNode et createElement de document, puis nous avons utilisé document.insertBefore pour la placer avant l'élément sélectionné.
		
2.	Comment avez-vous fait pour que la fonction selection2() ignore les éléments de la div donnée ci-dessus ?

    Nous avons tout simplement rajouté une condition qui regarde si l'objet cliqué ne possédait pas l'id "frameInsert" grâce à un target.