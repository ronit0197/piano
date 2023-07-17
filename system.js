let keys = document.querySelectorAll(".key");
let volumeControl = document.querySelector(".volume-control input");
let volumeIndicator = document.querySelector(".volume-indicator");

let audio = new Audio();
// Function to play the note
const  playNote = (n) => {
    audio.src = `notes/${n}.wav`;
    audio.play();
    audio.volume = volumeControl.value;
    // console.log(n)
}
// Function to control the volume
volumeControl.addEventListener("input",()=>{
    audio.volume = volumeControl.value;
    if(volumeControl.value == 0){

        volumeIndicator.classList.remove("fa-volume-high");
        volumeIndicator.classList.add("fa-volume-xmark");

    }else{

        volumeIndicator.classList.add("fa-volume-high");
        volumeIndicator.classList.remove("fa-volume-xmark");
    }

});

keys.forEach( e =>{
    e.addEventListener("click", ()=>{
        let key = e.dataset.key;
        playNote(key) //Play the tune according to the note;
    });
});