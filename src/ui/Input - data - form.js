import { videoConfig } from "../config/ video_config.js";
import { sleep } from "../utils/sleep.js";
import { VideoPlayer } from "./Video - player.js";

export class DataForm {
    #formElement;
    #videoLinksElement;
    #inputElement;
    #button;
    
    constructor(parentID) {
        const parentFormElement = document.getElementById(parentID);
        parentFormElement.innerHTML = `
       <form id="player-form">
       <div id="inputs">
       <input required name="timeout" id="inptimeout" type="number" placeholder="enter timeout" class="form-input">
       </div>

       <div class="form-select-group">
        <label for="cars">Choose a video link:</label>
        <select name="videoLinks" id="videoLinks">
            <option value="vvvvv"></option>
            
       </select>
            </div>
            
            
            <div class="form-buttons">
                <button id="playbutton" type="submit">Submit</button>
                
            </div>
        
    

        </form>
        `
        this.#formElement = document.getElementById("player-form");
        this.#videoLinksElement = document.getElementById("videoLinks");
        this.#inputElement = document.getElementById("input");
        this.setVideoLinks();
        this.#button = document.getElementById("playbutton");
        
    }

    setVideoLinks() {
        this.#videoLinksElement.innerHTML = videoConfig.videoLinks
        .map(videoLinks => `<option value="${videoLinks}">${videoLinks}</option>`)
    }

    addHandler(videoPlayer) {
        this.#button.addEventListener("click", async (event) => {
   
            const timeOut = document.getElementById("inptimeout").value * 1000;
            const selectValue = document.getElementById("videoLinks").value;
            event.preventDefault();
            // videoPlayer.setUrl(selectValue)
            videoPlayer.start();
            await sleep(timeOut);
            videoPlayer.stop();
            

        });
    }
}