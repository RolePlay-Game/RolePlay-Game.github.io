var disign;

window.onload = function() {
    var returnObj = JSON.parse(localStorage.getItem("myKey"));
    if (returnObj == 1) {
        document.location.href = "/index-new.html";
    }
 };

function newDesign() {
    var obj = 1;
    
    var serialObj = JSON.stringify(obj); //сериализуем его в строчку
    
    localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
    
}





// var obj = {
//     item1: 1,
//     item2: [123, "two", 3.0],
//     item3:"hello"
// };

// var serialObj = JSON.stringify(obj); //сериализуем его в строчку

// localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

// var returnObj = JSON.parse(localStorage.getItem("myKey")) //спарсим его обратно объект
