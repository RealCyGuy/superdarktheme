var style = document.createElement("style"),
  styleContent = document.createTextNode(
    "* { color: black !important; background-color: black !important; border-color: black !important; outline-color: black !important; text-decoration-color: black !important; background-image: none !important; animation: none !important; box-shadow: none !important; text-shadow: none !important; }"
  );
style.appendChild(styleContent);
var caput = document.getElementsByTagName("head");
caput[0].appendChild(style);
