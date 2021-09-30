var inputText = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/klingon.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after sometime");
}

function clickHandler() {
  var userInput = inputText.value;
  fetch(getTranslationURL(userInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
