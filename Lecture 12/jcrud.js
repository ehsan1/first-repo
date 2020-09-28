$(function(){
    loadRecipies();
});
function loadRecipies(){
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        success: function (response){
            console.log(response);
            var recipes = $("#recipes");
            recipes.empty();
            for(var i=0; i<response.length; i++){
                var res = response[i];
                recipes.append(`<div class="recipe"><h3>${res.title}</h3><button class="btn btn-danger btn-sm float-right"> Delete</button><p >${res.body} </p>  </div>`) // below esc button contain this " ` "  and this is js option (not JQuery option) to use `
                // recipes.append("<div><h3>"+res.title+"</h3></div>") // This is also possible
            }
        }
    });
}