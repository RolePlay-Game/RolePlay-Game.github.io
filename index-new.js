var disign;

window.onload = function() {
    var returnObj = JSON.parse(localStorage.getItem("myKey"));
    if (returnObj == 0) {
        document.location.href = "/index.html";
    }
 };

function oldDesign() {
    var obj = 0;
    
    var serialObj = JSON.stringify(obj); //сериализуем его в строчку
    
    localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
    
}