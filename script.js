function cambiarColor() {
document.body.style.backgroundColor =
document.body.style.backgroundColor === "lightblue"
? "#f4f4f4"
: "lightblue";
}

function saludar(){
let nombre=document.getElementById("nombre").value;
document.getElementById("mensaje").innerHTML="Hola "+nombre;
}
