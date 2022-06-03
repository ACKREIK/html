const { browser } = require("jshint/src/vars");

document.getElementById("button").onclick = function(){
    browser.openTab("./pg2.html");
    browser.closeTab("./index.html");
    alert("You have successfully registered!");
};
