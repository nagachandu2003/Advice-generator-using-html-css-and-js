let adviceNo = document.getElementById("adviceNo");
let advice = document.getElementById("advice");
let icons = document.getElementById("Btn");
let advNo = null;
let adv = null;
icons.addEventListener("click", function() {
    let options = {
        method: "GET"
    };
    fetch("https://api.adviceslip.com/advice", options)
        .then(function(res) {
            return res.json();
        })
        .then(function(result) {
            adviceNo.textContent = result.slip.id;
            advice.textContent = "\""+result.slip.advice+"\"";
        });
});