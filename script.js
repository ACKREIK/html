const { browser } = require("jshint/src/vars");

document.getElementById("continue").addEventListener("click", function(){
    browser.openTab("./pg2.html");
    browser.closeTab("./index.html");
    alert("You have successfully registered!");
});