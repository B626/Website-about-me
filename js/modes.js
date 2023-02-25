let switchMode = document.getElementById("switchMode")
let icon = document.getElementById("switchIcon")


switchMode.onclick = function () {
   let theme = document.getElementById("theme") 

   if (theme.getAttribute("href") == "./css/lightstyle.css") {
      theme.href = "./css/darkstyle.css"

      icon.src = "./img/lightmodeicon.png"
   } else {
      theme.href = "./css/lightstyle.css"
      icon.src = "./img/darkmodeicon.png"
   }
}