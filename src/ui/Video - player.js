export class VideoPlayer{
    
    constructor(parentID){
        const parentFormElement = document.getElementById(parentID);
        parentFormElement.innerHTML = `
        <video id=”video” src=""><video>
        `
    }

    
}