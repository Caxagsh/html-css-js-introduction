import { EmployeeForm } from "./employee-form.js";

export class Tabs{

    #addButton;
    #showButton;
    #formButtonColor;
    #tableButtonColor;

constructor (parenID, ){
    const parentButtonElement = document.getElementById(parenID);
    parentButtonElement.innerHTML = `<button id="add-button">Add Employee</button>`;
    parentButtonElement.innerHTML += `<button id="show-button">Show Employee</button>`;

    this.#addButton = document.getElementById("add-button");
    this.#showButton = document.getElementById("show-button");
    this.#formButtonColor = document.getElementById("add-button");
    this.#tableButtonColor = document.getElementById("show-button");
    // this.#formButtonColor = document.getElementsByTagName("button");

}

showInput(formElement, tableElement){
   this.#addButton.addEventListener("click", (event) =>{
    formElement.style.display = "block";
    tableElement.style.display = "none";
    this.#formButtonColor.style.backgroundColor = "rgb(25, 137, 228)";
    this.#tableButtonColor.style.backgroundColor = "white";
   });
   this.#showButton.addEventListener("click", (event) =>{
    formElement.style.display = "none";
    tableElement.style.display = "block";
    this.#tableButtonColor.style.backgroundColor = "rgb(25, 137, 228)";
    this.#formButtonColor.style.backgroundColor = "white";
   })
}


}





