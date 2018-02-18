window.addEventListener("load", init())

	var elemSelected = false;
	
  function init() {

		document.body.innerHTML = '<div id="frameInsert"><input type="button" value="DIV" onclick="insertB(\'div\')" /><input type="button" value="P" onclick="insertB(\'p\')" /><input type="button" value="H2" onclick="insertB(\'h2\')" /><input type="text" id="toInsert" /></div>' + document.body.innerHTML;
		
    document.getElementById("titre").setAttribute("style", "background-color:black;color:white");

    document.getElementById("sp").setAttribute("style", "background-color:yellow");

    for (var i = 0; i < document.getElementsByTagName("h2").length; i++)
      document.getElementsByTagName("h2")[i].setAttribute("style", "background-color:lightBlue");

    for (var i = 0; i < document.getElementsByTagName("div").length; i++)
      document.getElementsByTagName("div")[i].setAttribute("style", "background-color:green");

		/*for (var i = 0; i < document.childNodes.length; i++)
      document.childNodes[i].addEventListener('click', select, false);*/
		
    for (var i = 0; i < document.childNodes.length; i++){
      document.childNodes[i].addEventListener('click', select2, false);
		}
  }
	
	/*function select(e){
		if(e.target.attributes.getNamedItem("clr") == undefined){
			var clr = document.createAttribute("clr");
			clr.value = e.target.style.backgroundColor;
			e.target.attributes.setNamedItem(clr);
			e.target.style.backgroundColor = "red";
		}
		else{
			e.target.style.backgroundColor = e.target.attributes.getNamedItem("clr").nodeValue;
			e.target.attributes.removeNamedItem("clr");
		}
	}*/
	
	function select2(e){
		//Si l'élément est déjà sélectionné
		if(e.target.attributes.getNamedItem("clr") != undefined){
			e.target.style.backgroundColor = e.target.attributes.getNamedItem("clr").nodeValue;
			e.target.attributes.removeNamedItem("clr");
			elemSelected = false;
		}
		else{
			// Si un élément est déjà sélectionné
			if(elemSelected){
				for (var i = 0; i < document.body.childNodes.length; i++){
					if(document.body.childNodes[i] != undefined){
						if(document.body.childNodes[i].attributes != undefined){
							if(document.body.childNodes[i].attributes.getNamedItem("clr") != undefined){
								document.body.childNodes[i].style.backgroundColor = document.body.childNodes[i].attributes.getNamedItem("clr").nodeValue;
								document.body.childNodes[i].attributes.removeNamedItem("clr");
								elemSelected = false;
							}
						}
					}
				}
			}


			// Sélection de l'élément
			if((!elemSelected || e.target.attributes.getNamedItem("clr") != undefined ) && e.target.parentElement.getAttribute("id") != "frameInsert" && e.target.getAttribute("id") != "frameInsert"){
				if(e.target.attributes.getNamedItem("clr") == undefined){
					var clr = document.createAttribute("clr");
					clr.value = e.target.style.backgroundColor;
					e.target.attributes.setNamedItem(clr);
					e.target.style.backgroundColor = "blue";
					elemSelected = true;
				}
			}
		}
	}
	
	function insertB(type){
		if(elemSelected){
			for (var i = 0; i < document.body.childNodes.length; i++){
				if(document.body.childNodes[i] != undefined){
					if(document.body.childNodes[i].attributes != undefined){
						if(document.body.childNodes[i].attributes.getNamedItem("clr") != undefined){
							var selectedItem = document.body.childNodes[i];
						}
					}
				}
			}
			var nodeText = document.createTextNode(document.getElementById("toInsert").value);
			var node = document.createElement(type);
			node.appendChild(nodeText);
			document.body.insertBefore(node,selectedItem);
		}
	}