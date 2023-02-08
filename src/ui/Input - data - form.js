import { videoConfig } from "../config/ video_config.js";
import { sleep } from "../utils/sleep.js";

export class DataForm {
    #formElement;
    #videoLinksElement;
    #inputElement;
    
    constructor(parentID) {
        const parentFormElement = document.getElementById(parentID);
        parentFormElement.innerHTML = `
       <form id="player-form">
       <div id="inputs">
       <input required name="timeout" type="number" placeholder="enter timeout" class="form-input">
       </div>

       <div class="form-select-group">
        <label for="cars">Choose a video link:</label>
        <select name="videoLinks" id="videoLinks">
            <option value="vvvvv"></option>
            
       </select>
            </div>
            
            
            <div class="form-buttons">
                <button type="submit">Submit</button>
                
            </div>
        
    

        </form>
        `
        this.#formElement = document.getElementById("player-form");
        this.#videoLinksElement = document.getElementById("videoLinks");
        this.#inputElement = document.getElementById("input");
        this.setVideoLinks();
    }

    setVideoLinks() {
        this.#videoLinksElement.innerHTML = videoConfig.videoLinks
        .map(videoLinks => `<option value="${videoLinks}">${videoLinks}</option>`)
    }

    addHandler(handlerFun) {
        this.#formElement.addEventListener('Submit', async (event) => {
   
            const timeOut = this.#inputElement;
            const selectValue = this.#videoLinksElement.value;
            await handlerFun(timeOut);

        });
    }
}