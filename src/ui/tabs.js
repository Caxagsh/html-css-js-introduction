import { EmployeeForm } from "./employee-form.js";

export class Tabs{

    #addButton;
    #showButton;

constructor (parenID, ){
    const parentButtonElement = document.getElementById(parenID);
    parentButtonElement.innerHTML = `<button id="add-button">Add Employee</button>`;
    parentButtonElement.innerHTML += `<button id="show-button">Show Employee</button>`;

    this.#addButton = document.getElementById("add-button");
    this.#showButton = document.getElementById("show-button");

}

showInput(formElement, tableElement){
   this.#addButton.addEventListener("click", (event) =>{
    formElement.style.display = "block";
    tableElement.style.display = "none";
   });
   this.#showButton.addEventListener("click", (event) =>{
    formElement.style.display = "none";
    tableElement.style.display = "block";
   })
}


}





