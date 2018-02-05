# M4103 - TD n° 1


La page HTML de l'exercice est disponible [ici](index.html)


------------


## 6) Exercice 1

### 6.1/ La propriété document.title

1.  Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

    window.addEventListener("load", fonction());
    window.onload = fonction();
    `<body onload=”fonction()”>`


2.  Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise h1 ?

    document.getElementById("titre")
    document.getElementByTagName("h1")


3.  Quelle propriété de l’objet représentant votre balise h1 avez-vous utilisée pour récupérer le texte de celui-ci ?

    innerHTML
    
    
4. Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant votre balise h2 ?

    document.getElementsByTagName("h2")[0]
    
    
5.  Comment faire pour connaitre le nombre de balise h2 du document ?

    document.getElementsByTagName("h2").length


6.  Quelle méthode avez-vous utilisée pour récupérer l’objet de votre classe ?

    document.getElementsByClassName("firstOrLast")[0]


7.  Quant est-il avec Internet Explorer ?

    Il quant est que ça marche comme même


8.  Comment avez-vous déterminé si un nombre est pair ?

    Avec modulo 2
    
    

### 6.2/ Les propriétés innerHTML, innerText, outerHTML, outerText et textContent

1.  Quelles différences existe-t-il entre les 5 propriétés de cette section ?

    * innerHTML: Prend le html interne à la balise
    * innerText: Prend le texte interne à la balise
    * outerHTML: Prend le html externe à la balise 
    * outerText: Prend le texte externe à la balise 
    * textContent: Prend le contenu brut du texte
    
2.    Y a-t-il une différence avec Internet Explore, FireFox et d’autres navigateurs à votre disposition concernant ces propriétés ?

    Non
    
   
   
### 6.3/ La propriété document.lastModified

1.  Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ? Même question avec le dernier auteur de la liste.

    On doit juste commenter une ligne dans le code pour avoir le dernier élément de la liste et la décommenter pour avoir le premier (cf. code)


----------


## 7) Exercice 2 :


1.  Comment obtenez-vous le nombre de jours ?

    z


2.  Comment faites-vous la mise à jour du texte ?

    z
    
    

### 7./ setInterval et setTimeout

1.  Laquelle des deux méthodes de window avez-vous utilisé ? Pourquoi ?
    
    z
    


-----------


## 8) Exercice 3 :


### 8.1/ Champ Texte et Couleur d’arrière-plan


1.  Quel évènement avez-vous utilisé ?

    oninput()
    

2.  Comment avez-vous fait changer la couleur du champ texte ?

    `[...].className = " ... ";`
    
    
    
### 8.2/ Menu déroulant


    Aucune question demandé
    
    
----------



## 9) Exercice 4 :


    Aucune question demandé