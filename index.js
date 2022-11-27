var username = [];
var password = [];
var mailingAddress = [];
var billingAddress = [];
var counter = 0;
/*
Dynamic arrays are defined above (work still in progress)
1) checkUser
checkUser aunthenticates the username and password entered on the login page
    If successful - Go to user reservation page (currently under progress) to make a reservation
    If unsuccessful - Go to registration page

2)  checkUserName - Checks if the username that was entered is in our dynamic array and returns true/false
    Used in checkUser for authentication.

3) checkPass - Check if the password that was entered is inout dynamic array and returns true/false
    Used in checUser for authentication.

4) addNewUser - Receives user input and updates the required dynamic arrays with the data. (Work in Progress)

5) ApplyText - On the registration page, if the checkbox is checked, autocomplete the billing address else clear the text field.

*/
function checkUser(uName, uPass) {
  if (
    checkUserName(uName, username) == true &&
    checkPass(uPass, password) == true
  ) {
    alert("Authentication successful! Click 'Close' to continue.");
    window.location.href = "userReservation.html";
  } else {
    alert("Username and Password do not match. Please register as a new user.");
    window.location.href = "newuser.html";
  }
}

function checkUserName(uName, username) {
  let flag = true;
  console.log(username.length);
  for (var i = 0; i < username.length; i++) {
    if (username[i].localeCompare(uName) != 0) flag = false;
  }
  if (flag == true) return true;
  else return false;
}

function checkPass(uPass, password) {
  let flag = true;
  for (var i = 0; i < password.length; i++) {
    if (password[i].localeCompare(uPass) != 0) flag = false;
  }
  if (flag == true) return true;
  else return false;
}

function addNewUser(
  username,
  password,
  uNameNew,
  uPassNew,
  uBillingNew,
  uMailingNew
) {
  username[counter] = uNameNew;
  password[counter] = uPassNew;
  mailingAddress[counter] = uMailingNew;
  billingAddress[counter] = uBillingNew;
  // ******* Add all details, start work from here *******
  counter++;
}

function applyText() {
  if (check() == true)
    document.getElementById("billaddress").value =
      document.getElementById("mailaddress").value;
  else document.getElementById("billaddress").value = "";
}

function check() {
  if (document.getElementById("mailsamebill").checked == true) return true;
  else return false;
}
