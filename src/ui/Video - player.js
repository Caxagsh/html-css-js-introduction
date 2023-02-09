export class VideoPlayer{
    #player;
    constructor(parentID){
        const parentFormElement = document.getElementById(parentID);
        parentFormElement.innerHTML = `
        <video id=”video” ><video>
        `;
        this.#player = document.getElementById("video");
    }
    setUrl(url){
        this.#player.setAttribute("src", url)

    }
    
start(){
    this.#player.play();
}
stop(){
    this.#player.pause();
}
    
}