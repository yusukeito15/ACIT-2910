$(document).ready(function(){
<<<<<<< HEAD
    $(function(){
        $("#homeLogo").click(function() {
            location.href = "/";
        });
    });
    
    $(function(){
        $("#menuScroller").click(function(){
            location.href = "/menu";
        });
    });
    
    $(function(){
        $("#login").click(function(){
            location.href = "/profile";
        });

    var login = document.getElementById("login")
    login.addEventListener("click", function(){
        location.href = "/loginPage";
    });
    
    var profile = document.getElementById("profile")
    profile.addEventListener("click", function(){
        location.href = "/profile";

    });
})