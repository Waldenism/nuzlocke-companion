function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }

  var y = document.getElementById("nav-collapse");
  if(y.className === "nav-right") {
     y.className = "nav-left"

  }else{
    y.className = "nav-right"
  }
}
