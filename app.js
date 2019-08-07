const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemsEls = document.querySelectorAll(".todo_item");
const deleteButton = document.querySelectorAll(".delete")
// console.log(deleteButton);

// with a keypress of enter the inputed value will be printed onto the list with a appended delete button
function addListItem () {
    todoInputEl.addEventListener("keypress", function(event) {
        if(event.keyCode === 13){
            let deleteButton = createDeleteButton ();
            let newListItem = createListItem (todoInputEl.value);
        //    todoListEl.appendChild(newListItem);
        newListItem.appendChild(deleteButton);
        todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
           todoInputEl.value = " "; 
        }
    })
}
//Doesn't work due to bubbling and propgation. Look up why ?
// function toggleDone () {
//     for ( let elem of todoItemsEls ){
//         elem.addEventListener("click", function (){
//             elem.classList.toggle("done"); 
//         })
//     }
// }

// on the click of the target if it contains the class of "todo_item" toggle "done"
function toggleDone(){
    todoListEl.addEventListener("click", function (event){
        // console.log(event.target); 
        if (event.target.classList.contains("todo_item")){
            event.target.classList.toggle("done"); 
        }
        
    })
}
// create a new element li with the text passed into it while setting the class to todo_item
function createListItem (text) {
    const newListElement = document.createElement("li");
    newListElement.textContent = text;
    newListElement.setAttribute("class", "todo_item");
    return newListElement;
}
// create a delete button that will append to the newListItem in the addListItem ()

function createDeleteButton () {
    const newListButton = document.createElement('button');
    newListButton.textContent = ' x ';
    newListButton.setAttribute('class', 'delete');
    return newListButton;
}

// copied what toggle does but for a delete button

function deleteItem (){
    todoListEl.addEventListener('click', function (event){
        if(event.target.classList.contains('delete')){
            event.target.parentNode.remove(); 
        }
    })
}

deleteItem();
toggleDone(); 
addListItem(); 