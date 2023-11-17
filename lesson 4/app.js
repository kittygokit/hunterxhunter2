const music = document.querySelector("audio")
const btn = document.querySelector("button")
btn.innerHTML="play"

btn.onclick=() =>{
    if (music.paused){
        music.play()
        btn.style.background ="black"
        btn.innerHTML="stop"
    }else{
        music.pause()
        btn.style.background="cadetblue"
        btn.innerHTML="continue"
    }
}

