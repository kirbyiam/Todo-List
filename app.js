const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemsEls = document.querySelectorAll(".todo_item");
// console.log(todoItemsEls);

function addListItem () {
    todoInputEl.addEventListener("keypress", function(event) {
        if(event.keyCode === 13){
            let newListItem = createListItem (todoInputEl.value)
        //    todoListEl.appendChild(newListItem);
        todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
           todoInputEl.value = ""; 
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

function toggleDone(){
    todoListEl.addEventListener("click", function (event){
        // console.log(event.target); 
        if (event.target.classList.contains("todo_item")){
            event.target.classList.toggle("done"); 
        }
    })
}

function createListItem (text) {
    const newListElement = document.createElement("li");
    newListElement.textContent = text;
    newListElement.setAttribute("class", "todo_item");
    return newListElement;
}

toggleDone(); 
addListItem(); 