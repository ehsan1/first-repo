window.onload= function(){// annonumus function
    //Do all Bindings here
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
};
function handleAdd(){
    var newTodo = document.getElementById("newToDo").value;
    var todos = document.getElementById("ToDo");
    var newTodoText = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.setAttribute("onClick", "handleDelete(event)");
    newLi.appendChild(newTodoText)//.appendChild(btn);
    newLi.appendChild(btn);
    todos.appendChild(newLi);
};

function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
};