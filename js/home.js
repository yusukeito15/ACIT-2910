$(document).ready(function(){
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
    
    var login = document.getElementById("login")
    login.addEventListener("click", function(){
        location.href = "/loginPage";
    });
    
    var profile = document.getElementById("profile")
    profile.addEventListener("click", function(){
        location.href = "/profile";

    });
})
