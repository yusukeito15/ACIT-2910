$(document).ready(function(){
    $(function(){
        $("#homeLogo").click(function() {
            location.href = "/";
        });
    });
    
    $(function(){
        $("#testDiv").click(function() {
            document.getElementById("testInfo").style.opacity = "1";
            console.log("working!");
        });
    });
    
     $(function(){
        $("#login").click(function(){
            location.href = "/loginPage";
        });
    });
});
