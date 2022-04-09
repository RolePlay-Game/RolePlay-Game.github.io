window.onload = function() {
    var returnObj = JSON.parse(localStorage.getItem("myKey"));
    if (returnObj == 1) {
        document.location.href = "/viev-new.html";
    }
 };