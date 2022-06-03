const { browser } = require("jshint/src/vars");

document.getElementById("button").onclick = function(){
    browser.openTab("./pg2.html");
    console.log("button clicked");
    alert("You have successfully registered!");
};
