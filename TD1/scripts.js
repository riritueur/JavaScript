


//window.addEventListener("load", defTitre1());
//window.addEventListener("load", defTitre2());
//window.addEventListener("load", defTitre3());
window.addEventListener("load", defTitre4());
window.addEventListener("load", datemodif());
window.addEventListener("load", diffdate());
window.addEventListener("load", sethorloge1());
window.addEventListener("load", majhorloge1());
/*window.addEventListener("load", majhorloge2());*/
window.addEventListener("load", setGrafH());
window.addEventListener("load", majGrafH());
window.addEventListener("load", menu1b());
window.addEventListener("load", menu2b());
window.addEventListener("load", menu3b());
window.addEventListener("load", recherche());


var page;


function recherche() {
	var mot = document.getElementById("rechercher").value;
	if (mot != "") {
		if (page == null)
			page = document.getElementsByTagName("body")[0];

		for (var i = 0; i < page.childElementCount; i++) {
			console.log(page.childNodes[i].innerHTML + "(" + i + ")")
			if (page.childNodes[i].innerText.match(/())) {
				 //alert(page.childNodes[i].innerHTML + " id = " + i)
				var splitted = page.childNodes.innerHTML.split(mot);
				splitted[0] += "<span class=\"select\">";
				splitted[1] = "</span>" + splitted[1];
				page.childNodes[i].innerHTML = splitted[0];
			}
		}
	}
}


function defTitre1() {
	document.title = document.getElementById("titre").innerHTML;
}

function defTitre2() {
	document.title = document.getElementsByTagName("h2")[0].innerHTML;
}

function defTitre3() {
	if (document.getElementsByTagName("h2").length != 0) {
		document.title = document.getElementsByTagName("h2")[document.getElementsByTagName("h2").length - 1].innerHTML;
	} else {
		document.title = "PERES Richard - RIGAUT François";
	}
}

function defTitre4() {
	if (document.getElementsByClassName("firstOrLast").length != 0) {
		if (document.getElementsByClassName("firstOrLast").length % 2 == 0) {
			document.title = document.getElementsByClassName("firstOrLast")[0].innerHTML;
		} else {
			document.title = document.getElementsByClassName("firstOrLast")[document.getElementsByClassName("firstOrLast").length - 1].innerHTML;
		}
	}
}

function inverseTexte() {
	var div1 = document.getElementsByTagName("p")[0].innerHTML;
	var div2 = document.getElementsByTagName("p")[1].innerHTML;
	document.getElementsByTagName("p")[0].innerHTML = div2;
	document.getElementsByTagName("p")[1].innerHTML = div1;

}

function validation() {
	var input = document.getElementById("input")
	console.log(input.value)
	if (input.value == "")
		input.className = "blanc";
	else {
		var val = input.value
		if (!isNaN(val))
			input.className = "vert";
		else
			input.className = "rouge";
	}
}

function datemodif() {
	var date = new Date();
	var metas = document.getElementsByTagName('meta');
	var done = false;
	for (var i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute("name") == "author" && !done) {
			var auteur = metas[i].getAttribute("content");
			//done = true; //Commenter pour avoir le dernier de la liste, décommenter pour avoir le premier
		}
	}
	document.getElementById("date_modif").innerHTML = "Dernière modification le " + jour(date.getDate()) + "/" + date.getMonth() + 1 + "/" + date.getFullYear() + " par " + auteur;
}

function jour(j) {
	switch (j) {
		case 1:
			return "Lundi";
			break;
		case 2:
			return "Mardi";
			break;
		case 3:
			return "Mercredi";
			break;
		case 4:
			return "Jeudi";
			break;
		case 5:
			return "Vendredi";
			break;
		case 6:
			return "Samedi";
			break;
		case 0:
			return "Dimanche";
			break;
		default:
			return "le jour n'existe pas";
	}
}

function diffdate() {
	d1 = new Date();
	d2 = new Date(2018, 06, 19);
	var nbjoursmilli = d2.getTime() - d1.getTime();
	var nbjours = Math.ceil(nbjoursmilli / (1000 * 60 * 60 * 24));
	if (nbjours == 1 || nbjours == 0) {
		var stringjour = "jour";
	} else {
		var stringjour = "jours";
	}
	document.getElementById("nbjours").innerHTML = "Il reste " + nbjours + " " + stringjour + " avant le 19 juillet 2018.";
}


function sethorloge1() {
	var d = new Date();
	document.getElementById("horloge").innerHTML = format(d.getHours()) + ":" + format(d.getMinutes()) + ":" + format(d.getSeconds());
}

function sethorloge2() {
	var d = new Date();
	document.getElementById("horloge").innerHTML = format(d.getHours()) + ":" + format(d.getMinutes()) + ":" + format(d.getSeconds());
	majhorloge2();
}

function majhorloge1() {
	window.setInterval(sethorloge1, 1000);
}

function majhorloge2() {
	window.setTimeout(sethorloge2, 1000);
}

function format(doushite) {
	if (doushite < 10)
		doushite = "0" + doushite;
	return doushite;
}

function setGrafH() {
	var d = new Date();
	var heure = d.getHours();
	var heureimg1 = Math.floor(heure / 10);
	var heureimg2 = heure - heureimg1 * 10;
	var minute = d.getMinutes();
	var minuteimg1 = Math.floor(minute / 10);
	var minuteimg2 = minute - minuteimg1 * 10;
	var secondes = d.getSeconds();
	var secondesimg1 = Math.floor(secondes / 10);
	var secondesimg2 = secondes - secondesimg1 * 10;

	document.getElementById("grafHorloge").innerHTML = "<img src=\"images/" + heureimg1 + ".gif\" />" + "<img src=\"images/" + heureimg2 + ".gif\" />:" + "<img src=\"images/" + minuteimg1 + ".gif\" />" + "<img src=\"images/" + minuteimg2 + ".gif\" />:" + "<img src=\"images/" + secondesimg1 + ".gif\" />" + "<img src=\"images/" + secondesimg2 + ".gif\" />";
}

function majGrafH() {
	window.setInterval(setGrafH, 1000);
}


function menu1a() {
	var item = document.getElementById("it1");
	item.innerHTML = "<img src=\"images/plus.gif\"/>" + "  Item 1";
}

function menu1b() {
	var item = document.getElementById("it1");
	item.innerHTML = "<img src=\"images/minus.gif\"/>" + "  Item 1";
}


function menu2a() {
	var item = document.getElementById("it2");
	item.innerHTML = "<img src=\"images/plus.gif\"/>" + "  Item 2";
}

function menu2b() {
	var item = document.getElementById("it2");
	item.innerHTML = "<img src=\"images/minus.gif\"/>" + "  Item 2";
}


function menu3a() {
	var item = document.getElementById("it3");
	item.innerHTML = "<img src=\"images/plus.gif\"/>" + "  Item 3";
}

function menu3b() {
	var item = document.getElementById("it3");
	item.innerHTML = "<img src=\"images/minus.gif\"/>" + "  Item 3";
}
