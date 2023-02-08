import { DataForm } from "./ui/Input - data - form.js";
import { VideoPlayer } from "./ui/Video - player.js";
import { sleep } from "./utils/sleep.js";
// const TIMEOUT = 5000;
// // const promise = sleep(TIMEOUT);
// // promise.then(() => console.log(`after ${TIMEOUT/1000} seconds`));
// // 
//  const fun = async () => {
   
// await sleep(TIMEOUT);
// console.log(`after ${TIMEOUT/1000} seconds`)
// }
// fun();
// console.log(`waiting for ${TIMEOUT/1000} seconds`)
// console.log("*****************************************")

const dataForm = new DataForm("form-section");
const videoPlayer = new VideoPlayer("player-section");

    

dataForm.addHandler(sleep);