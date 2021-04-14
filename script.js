let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementById('list');

function createListItem() {
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    listItem.className = 'listitem';
    listItem.appendChild(document.createTextNode(input.value + " "));
    deleteButton.className = 'delete';
    deleteButton.appendChild(document.createTextNode('Delete'));
    listItem.appendChild(deleteButton);
    ul.appendChild(listItem);
    input.value = "";
}

function addListOnClick() {
    if (input.value.length > 0) {
        createListItem();
    }
}

function addListAfterKeydown(event) {
    if (input.value.length > 0 && event.key === "Enter") {
        createListItem();
    }
}

function deleteItem(element) {
    if (element.target.classList.contains('delete'))
        element.target.parentElement.remove();
}

function addDone(task) {
    if (task.target.classList.contains('listitem')) {
        task.target.classList.toggle('done');
    }
}

function handleUlClick(element) {
    addDone(element);
    deleteItem(element);
}


button.addEventListener('click', addListOnClick);
input.addEventListener("keydown", addListAfterKeydown);
ul.addEventListener('click', handleUlClick);