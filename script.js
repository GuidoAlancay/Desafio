function encrypt() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === "a") {
            outputText += "o";
        } else if (inputText[i] === "l") {
            outputText += "n";
        } else if (inputText[i] === "u") {
            outputText += "e";
        } else if (inputText[i] === "r") {
            outputText += "a";
        } else {
            outputText += inputText[i];
        }
    }

    document.getElementById("outputText").innerText = outputText;
}

function decrypt() {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === "o") {
            outputText += "a";
        } else if (inputText[i] === "n") {
            outputText += "l";
        } else if (inputText[i] === "e") {
            outputText += "u";
        } else if (inputText[i] === "a") {
            outputText += "r";
        } else {
            outputText += inputText[i];
        }
    }

    document.getElementById("outputText").innerText = outputText;
}