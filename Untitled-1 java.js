function Guardar() {

 var Edad =document.getElementById("edad").value;
 if(Edad<18){
 alert("No cumple requisito de ser mayor de edad");
 return false;
}

var genero =document.getElementById("genero").value;
if(genero==1){
    alert("Debe pagar 20.000 mil pesos mcte");
}
else if(genero==2) {
    alert("Debe pagar 35.000 mil pesos mcte");
}else{alert("no tiene genero")}
}




