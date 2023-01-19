
let color;
let colorElegido;
let element = document.getElementById("div1");
let element2 = document.getElementById("div2");
let element3 = document.getElementById("div3");
let element4 = document.getElementById("div4");
color = function(event){
            if(event.key==="a"){
            colorElegido= "white";
            }
            else if(event.key==="s"){
            colorElegido= "aqua";
            }
            else if(event.key==="d"){
            colorElegido= "brown";
            }   
            else if(event.key==="f"){
            colorElegido= "blue";   
            }
};

document.addEventListener("keydown",color);

function cambiarFondo(div,color){
div.style.backgroundColor = color;
}

element.addEventListener("click",function(){cambiarFondo(element,colorElegido)})
element2.addEventListener("click",function(){cambiarFondo(element2,colorElegido)})
element3.addEventListener("click",function(){cambiarFondo(element3,colorElegido)})
element4.addEventListener("click",function(){cambiarFondo(element4,colorElegido)})

