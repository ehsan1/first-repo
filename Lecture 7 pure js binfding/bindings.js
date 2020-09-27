// function handleAddNewToDo(){
//     console.log("Handle Add New ToDo");
// } we can put it into below function as well

window.onload= function(){// annonumus function
    //Do all Bindings here
    var btn = document.getElementById("btnAdd");
    btn.onclick = function(){
        console.log("Handle Add New ToDo");
    };
};