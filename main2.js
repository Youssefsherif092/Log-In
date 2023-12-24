// Sign-Up section
SignName = document.getElementById("SignName");
SignEmail = document.getElementById("SignEmail");
SignPassword = document.getElementById("SignPassword");
SignBtn = document.getElementById("SignBtn");
InvalidMail = document.getElementById("InvalidMail");
success = document.getElementById("Success");
var UserInfo = [];

if (localStorage.getItem('UserInfo') != null) {
  UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
};

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
  else{
    return false
  }
}


SignBtn.addEventListener("click",function() {
  if(ValidateEmail(SignEmail.value) == true && RepeatMailCheck(SignEmail.value) == true){
    InvalidMail.classList.replace("d-flex","d-none")
    success.classList.replace("d-none","d-flex")
  saveInfo();
  console.log(SignEmail.value);
}
  else if (ValidateEmail(SignEmail.value) == false || RepeatMailCheck(SignEmail.value) == false) {
    InvalidMail.classList.replace("d-none","d-flex")
    console.log(SignEmail.value);
  }
});

function saveInfo(){
  var credentials = {
      Uname: SignName.value,
      UEmail: SignEmail.value,
      UPassword: SignPassword.value,
  }
  UserInfo.push(credentials);
  localStorage.setItem('UserInfo', JSON.stringify(UserInfo))
}

function RepeatMailCheck() {
  for (var i = 0; i < UserInfo.length; i++) {
    if (UserInfo[i].UEmail == SignEmail.value) {
      return false;
    }
  }
  return true;
}
