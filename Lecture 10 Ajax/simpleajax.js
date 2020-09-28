$(function(){
    $("#load").click(sendAjax);
});
function sendAjax(){
    console.log("sending ajax request");
    //send request here;
    $.get("student.txt", handleResponse);
    console.log("Request sent");
};
function handleResponse(response){
    console.log("Response received");
   // $("#result").empty();
    $("#result").append(response);
};