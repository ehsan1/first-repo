$(function(){
    // Jquery will execute this function after your page load
    $("#addButton").click(handleBtnClick);
    // $("#todos li").click(removeMe);
    $("#todos").on("click", "li",removeMe);
});
function handleBtnClick(){
    var newTodo = $("#newTodo").val();
    if(!newTodo){
        $("#newTodo").addClass("error");
        return;
    }
    $("#newTodo").removeClass("error");
    $("#newTodo").val("");
    $("#todos").append("<li>"+newTodo+"</li>");
   
};

function removeMe(){
    $(this).fadeOut();
    // .remove();
}