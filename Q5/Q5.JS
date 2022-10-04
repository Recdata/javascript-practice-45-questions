function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function toSentenceCase(sent) {
    return sent.charAt(0).toUpperCase()+ sent.substr(1).toLowerCase();
}
let imamGhazali = "imam ghazali"
let message = "To get what you love, you must first be Patient with what you Hate." 
let quote = `${toTitleCase(imamGhazali)} said: ${toSentenceCase(message)}`
document.getElementById("quote").innerHTML=quote