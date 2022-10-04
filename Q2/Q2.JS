function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
var name = "aftab malik"
lower = `Hello ${name.toLowerCase()}, would you like to learn some Python today?`
upper = `Hello ${name.toUpperCase()}, would you like to learn some Python today?`
title = `Hello ${toTitleCase(name)}, would you like to learn some Python today?`
document.getElementById("lower").innerHTML= lower
document.getElementById("upper").innerHTML= upper
document.getElementById("title").innerHTML= title