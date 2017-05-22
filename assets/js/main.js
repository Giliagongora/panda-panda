/*
var imagenes = getElementsByClassName("imagenes");
document.createElement("imagenes");

var botonera = getElementsByClassName("elementItems");
document.createElement("botonera");
*/

document.getElementById("pandasFotos").addEventListener("click",
	function eraser(){
		var node1 = document.getElementById("pandasFotos");
		node1.removeChild(node1.childNodes[0]);
	});

document.getElementById("origen").addEventListener("click",
	function eraser(){
		var node1 = document.getElementById("parrafo1");
		node1.removeChild(node1.childNodes[0]);
	});

document.getElementById("extincion").addEventListener("click",
	function eraser(){
		var node1 = document.getElementById("parrafo2");
		node1.removeChild(node1.childNodes[0]);
	});

/*


document.getElementById("demo").addEventListener("click", 
	function botoncillo(){
	alert("Hola Mundillo");
	});

	document.getElementById("sumar").addEventListener("click",

function sumar(){
*/