var username = null;
var password = null;
var cowr = 0;
function submit(){
var username = (document.getElementById("username").value);
var password = (document.getElementById("password").value);
  if (username = "theagency"){
 cowr++;
  }
  if (password = gathgd){
    cowr++;
  }
  if (cowr = 2){ document.getElementById("corw").innerHTML="Login Successful!"
  }
  if (cowr < 2){ document.getElementById("corw").innerHTML = "Access Denied"
  }
  if (cowr > 2){ document.getElementById("corw").innerHTML = "Access Denied"
  }
}