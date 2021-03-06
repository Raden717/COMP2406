//Function to easily import an HTML file to another HTML
function impHTML() {

  let http;
  let file;
  let placeholder;
  let element;

  placeholder = document.getElementsByTagName("*");

  for(let i = 0; i < placeholder.length; ++i){
    element = placeholder[i];

    file = element.getAttribute("import-HTML");

		//Making a get request to obtain the other html file if the file exists
    if (file){
      http = new XMLHttpRequest();
      http.onreadystatechange = function() {
        if (http.readyState == 4) {

          if (http.status == 200) {
            element.innerHTML = http.responseText;
          }
          if (http.status == 404) {
            element.innerHTML = "not found";
          }
          element.removeAttribute("import-HTML");
          impHTML();
        }
      }
      http.open("GET", file, true);
      http.send();
      return;
    }
  }
};
