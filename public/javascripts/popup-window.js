// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "") {
  alert("Fill in all fields");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
  setTimeout(function(){
    document.getElementById('abc').style.display = "block";
  }, 2000);
}
//Function to Hide Popup
function div_hide(){
  document.getElementById('abc').style.display = "none";
}
