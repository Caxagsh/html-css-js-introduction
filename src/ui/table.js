export class Table {
    //data.id
    //data[obj.fieldName]
    #schema //array of objects {columnName: <string>, fieldName: <string>}
    #tbodyElement
    #parentElement
    constructor(parentId, tableName, schema) {
        this.#parentElement = document.getElementById(parentId);
        this.#schema = schema;
        if (!this.#parentElement) {
            throw `wrong parentId ${parentId}`
        }
        this.#parentElement.innerHTML = ` <h3 class="table-logo">${tableName} </h3>
        <table >
            <thead>
                <tr>
                    ${getHeader(schema)}                    
                </tr>
            </thead>
            <tbody id="${tableName}">
               
            </tbody>
        </table>`
        this.#tbodyElement = document.getElementById(tableName);
        this.#parentElement.style.display = "none";
    }
    addRow(object){
        this.#tbodyElement.innerHTML += getRow(object, this.#schema);
    }
    getParentTableElement(){
        const elem = this.#parentElement;
        return elem;
    }
}
function getHeader(schema) {
    return schema.map(obj => `<th>${obj.columnName}</th>`).join('');
}
function getRow(data, schema) {
    return `<tr> ${getTds(data, schema)} </tr>`
}
function getTds(data, schema) {
    return schema.map(obj => `<td>${data[obj.fieldName]}</td>`).join('')
}
