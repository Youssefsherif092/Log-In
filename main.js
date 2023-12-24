// Log-In Section
var UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
var LogEmail = document.getElementById("LogE-mail");
var LogPassword = document.getElementById("LogPassword");
var LogBtn = document.getElementById("logBtn");
var InvalidCreds = document.getElementById("InvalidCreds");
var myname = '';
UserName = [];

if (localStorage.getItem('UserName') != null) {
  UserName = JSON.parse(localStorage.getItem('UserName'));
};

LogBtn.addEventListener("click", function() {
  matchCredentials();
  UserName = [myname];
  localStorage.setItem('UserName', JSON.stringify(UserName))
});

function matchCredentials() {
  for (var i = 0; i < UserInfo.length; i++) {
    if (UserInfo[i].UEmail == LogEmail.value && UserInfo[i].UPassword == LogPassword.value) {
      myname = UserInfo[i].Uname;
      redirectToMain();
      return myname;
    }
  }
  displayInvalidCredentials();
  return false;
}

function redirectToMain() {
  window.location.href = "main.html";
}

function displayInvalidCredentials() {
  InvalidCreds.classList.replace("d-none", "d-flex");
}

