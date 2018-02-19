window.addEventListener("load", init())

function init() {
  var elements = document.querySelectorAll(".case");
  elements.forEach(function (elem) {
    elem.addEventListener('click', select, false);
  });
}

function select() {

  if (!this.classList.contains("vide")) {

    var posX = this.style.left
    var posY = this.style.top

    var found = false

    posX = posX.substring(0, posX.length - 2)
    posY = posY.substring(0, posY.length - 2)

    posX = parseInt(posX)
    posY = parseInt(posY)

    var elements = document.querySelectorAll(".case");
    elements.forEach(function (elem) {

      var posXT = elem.style.left
      var posYT = elem.style.top

      posXT = posXT.substring(0, posXT.length - 2)
      posYT = posYT.substring(0, posYT.length - 2)

      posXT = parseInt(posXT)
      posYT = parseInt(posYT)

      // Cas en haut
      if (posXT == posX && posYT == posY - 102 && elem.classList.contains("vide"))
        found = true

      // Cas à droite
      if (posXT == posX + 102 && posYT == posY && elem.classList.contains("vide"))
        found = true

      // Cas en bas
      if (posXT == posX && posYT == posY + 102 && elem.classList.contains("vide"))
        found = true

      // Cas à gauche
      if (posXT == posX - 102 && posYT == posY && elem.classList.contains("vide"))
        found = true

      console.log(elem.classList);

    });

    if (found) {
      var casevide = document.body.querySelector(".case.vide");
      var tmp = this.innerHTML;

      this.classList.add("case", "vide");
      casevide.classList.remove("vide");

      this.innerHTML = casevide.innerHTML;
      casevide.innerHTML = tmp;
    }
  }
}
