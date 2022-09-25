let lista = document.querySelector(".contenedor__der__lista");
let pregunta = document.querySelectorAll(".contenedor__der__pregunta__titulo");
let icono = document.querySelectorAll(".contenedor__der__pregunta__icono");
let parrafo = document.querySelectorAll(".contenedor__der__pregunta__respuesta");

console.log(typeof parrafo);
lista.addEventListener("click", (e)=>{

    

  //---------------------REMOVER CLASES DE TODO LOS ELEMENTOS------------------------------//
    for(i of parrafo){
        i.classList.remove("contenedor__der__pregunta__respuesta--ver");
        
    }

    for(i of icono){
        i.classList.remove("contenedor__der__pregunta__icono--rotate");
        
    }

    for(i of pregunta){
        i.classList.remove("contenedor__der__pregunta__titulo--color");
        
    }

    if(e.target.tagName === "LI" || e.target.tagName === "IMG" || e.target.tagName === "H3" ){

       console.log(e.target);
   

       switch(e.target){
                    //------------------------Clickear en el PREGUNTA (H3)----------------------------//
        case pregunta[0]: { parrafo[0].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[0].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[0].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case pregunta[1]: { parrafo[1].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[1].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[1].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case pregunta[2]: { parrafo[2].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[2].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[2].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case pregunta[3]: {parrafo[3].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[3].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[3].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case pregunta[4]: { parrafo[4].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[4].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[4].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        
                    //------------------------Clickear en el ICONO (IMG)----------------------------//

        case icono[0]: {    parrafo[0].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[0].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[0].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case icono[1]: {    parrafo[1].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[1].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[1].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case icono[2]: {    parrafo[2].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[2].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[2].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case icono[3]: {    parrafo[3].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[3].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[3].classList.toggle("contenedor__der__pregunta__titulo--color")}break;
        case icono[4]: {    parrafo[4].classList.toggle("contenedor__der__pregunta__respuesta--ver")
                            icono[4].classList.toggle("contenedor__der__pregunta__icono--rotate")
                            pregunta[4].classList.toggle("contenedor__der__pregunta__titulo--color")}break;  

       }
          


              
    }
  
   
})