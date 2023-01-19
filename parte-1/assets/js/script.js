let circulo = document.getElementById("element");

function pintar(elemento,color){
   if (color===undefined){color="green";}
  return elemento.style.backgroundColor = color; 
}
circulo.addEventListener("click",function(){pintar(circulo,"yellow")});