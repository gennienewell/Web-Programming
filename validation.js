//Starts Valdation
function getInput(){
clear1();//Reset Display
//Validates Username
let str = document.register.username.value;
let usr = "Username";
if(isEmpty(str)){
document.getElementById("output1").innerHTML = "Please Enter "+usr.fontcolor("red");
} else{
let reg =  /[a-z0-9]{4,12}/;
if(str.match(reg)){
  document.getElementById("output1").innerHTML = document.register.username.value;
  } else{
    document.getElementById("output1").innerHTML = "Please Enter Valid "+usr.fontcolor("yellow");
}//if
}//if

//Validates Email
let str1 = document.register.email.value;
let email = "email";
if(isEmpty(str1)){
  document.getElementById("output2").innerHTML = "Please Enter "+email.fontcolor("red");
} else{
reg1 = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
if(str1.match(reg1)){
  document.getElementById("output2").innerHTML = document.register.email.value;
  } else{
    document.getElementById("output2").innerHTML = "Please Enter Valid "+email.fontcolor("yellow");;
}//if
}//if

//Phone Number
let str2 = document.register.phoneNumber.value;
let pn = "Phone Number";
if(isEmpty(str2)){
  document.getElementById("output3").innerHTML = "Please Enter "+pn.fontcolor("red");
} else{
reg2 = /[\(][0-9]{3}[\)][\-][0-9]{3}[\-][0-9]{4}/;
if(str2.match(reg2)){
  document.getElementById("output3").innerHTML = document.register.phoneNumber.value;
  } else{
    document.getElementById("output3").innerHTML = "Please Enter Valid "+pn.fontcolor("yellow");
}//if
}//if

//validates password
let str3 = document.register.password.value;
let pw = "password";
if(isEmpty(str3)){
  document.getElementById("output4").innerHTML = "Please Enter "+pw.fontcolor("red");
} else{
reg3 = /[a-zA-Z0-9_]{8,}/;
if(str3.match(reg3)){
  document.getElementById("output4").innerHTML = document.register.password.value;
  } else{
    document.getElementById("output4").innerHTML = "Please Enter Valid "+pw.fontcolor("yellow");
}//if
}//if

//validates confirmed password
let str4 = document.register.confirmPassword.value;
if(isEmpty(str4) != true){
  if(str4.match(str3)){
  document.getElementById("output5").innerHTML = "Confirmed - " + document.register.confirmPassword.value;
} else{
   window.alert("Passwords do not match!");
}//if
}//if
}//getInput

//Checks to see if inputs are empty
function isEmpty(txtbxValue){
  if (txtbxValue.length == 0){
    return true;
  }//if
  return false;
}//isEmpty

//Clears outputs
function clear1(){
  document.getElementById("output1").innerHTML = "";
  document.getElementById("output2").innerHTML = "";
  document.getElementById("output3").innerHTML = "";
  document.getElementById("output4").innerHTML = "";
  document.getElementById("output5").innerHTML = "";
  document.getElementById("output6").innerHTML = "";
  document.getElementById("output7").innerHTML = "";
  document.getElementById("output8").innerHTML = "";
}//isEmpty