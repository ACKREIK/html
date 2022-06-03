const { browser } = require("jshint/src/vars");

document.getElementById("button1").onclick = function(){
    document.location.href = "./pg2.html";
    console.log("button clicked");
    alert("button clicked");
};
