$(function(){
    loadRecipies();
    $("#recipes").on("click", ".btn-danger", handleDelete);
    $("#recipes").on("click", ".btn-warning", handleUpdate);
    $("#addBtn").click(addRecipe );
    $("#updateSave").click(function(){
        var id = $("#updateId").val();
        var title = $("#updateTitle").val();
        var body = $("#updateBody").val();
        $.ajax({
            url: "https://usman-recipes.herokuapp.com/api/recipes/"+id,
            method: "PUT",
            data: {title, body},
            success: function(response){
                console.log(response);
                loadRecipies();
                $("#updateModal").modal("hide");
            }
        });
    } );
});
function handleUpdate(){
    
    var btn= $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    $.get("https://usman-recipes.herokuapp.com/api/recipes/"+id, function(response){
        $("#updateId").val(response._id);
        $("#updateTitle").val(response.title);
        $("#updateBody").val(response.body);
        $("#updateModal").modal("show");
    });

}
function addRecipe(){
    var title = $("#title").val();
    var body = $("#body").val();
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/recipes",
        method: "POST",
        data: {title, body},
        success: function(response){
            console.log(response);
            loadRecipies();
        }
    });
}


function handleDelete(){
    var btn= $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");

    console.log(id);
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/recipes/" + id,
        method : "DELETE",
        success: function(){
            loadRecipies();
        }
    });
};


function loadRecipies(){
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        error: function(){
            var recipes = $("#recipes");
            recipes.html("An Error occured while load");
        },
        success: function (response){
            console.log(response);
            var recipes = $("#recipes");
            recipes.empty();
            for(var i=0; i<response.length; i++){
                var res = response[i];
                recipes.append(`<div class="recipe" data-id="${res._id}"><h3>${res.title}</h3><button class="btn btn-danger btn-sm float-right"> Delete</button></h3><button class="btn btn-warning btn-sm mx-5px float-right"> Edit</button><p >${res.body} </p>  </div>`) // below esc button contain this " ` "  and this is js option (not JQuery option) to use `
                // recipes.append("<div><h3>"+res.title+"</h3></div>") // This is also possible
            }
        }
    });
}