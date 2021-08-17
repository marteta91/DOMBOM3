document.addEventListener( "click", function(event){

    let boton =  event.target.dataset.boton;
    let audio = document.querySelector("audio[data-boton ="+ boton +"]");
    audio.currenTime=0;
    audio.play();
    console.log("esta sonando el " + boton);
})

consolo log ("olaquetal");
