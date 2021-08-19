
 /*
function playsound1(){
  let boton_sound =document.getElementById("sonido_bombo");
  
  boton_sound.play();
}

function playsound2(){
    let boton_sound =document.getElementById("sonido_crash");
    
    boton_sound.play();
  }

  function playsound3(){
    let boton_sound =document.getElementById("sonido_hit-hat");
    
    boton_sound.play();
  }
  
  function playsound4(){
    let boton_sound =document.getElementById("sonido_redoblante");
    
    boton_sound.play();
  }

  function playsound5(){
    let boton_sound =document.getElementById("sonido_tom1");
    
    boton_sound.play();
  }
  function playsound6(){
    let boton_sound =document.getElementById("sonido_tom2");
    
    boton_sound.play();
  }
  function playsound7(){
    let boton_sound =document.getElementById("sonido_tom3");
    
    boton_sound.play();
  }    
function playsound8(){
    let boton_sound =document.getElementById("sonido_tom4");
    
    boton_sound.play();
  }



let audio= document.getElementsByClassName("tono");
  console.log(audio);

  audio.play();
*/



document.addEventListener("click", function(event) {
  let boton = event.target.dataset.boton;
  console.log(boton + " (paso por IF y te cuento) ")

  if(boton == undefined){
    alert("Sigue probandon, no le has dado donde toca");

  }else{
    
    let toPLay = document.getElementById(boton);
    console.log("bien hecho, está sonando: "+ boton);
    toPLay.play();
  }
  
})


