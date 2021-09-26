var btnTranslate=document.querySelector("#btn-translate");    // create refrence to the html tags 
var txtinput=document.querySelector("#txt-input")
var outputdiv=document.querySelector("#output")
var serverURL="https://api.funtranslations.com/translate/yoda.json"


// to get url 
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

// to handle error 
function errorHandler(error){
    console.log("error occured",error);
}

// event handler

function clickHandler()
{
    var inputText=txtinput.value;        // input 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then( json => {
        var translatedtext=json.contents.translated;  
        outputdiv.innerText=translatedtext   //output 
    }
     )
    .catch(errorHandler)
}
// on click this event occurs 
btnTranslate.addEventListener("click",clickHandler)

