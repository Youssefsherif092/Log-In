
var hi = document.getElementById("hi")

if (localStorage.getItem('UserName') != null) {
    UserName = JSON.parse(localStorage.getItem('UserName'));
  };

hi.innerHTML += " " + UserName; 

