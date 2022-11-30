var guestName = [];
var username = [];
var password = [];
var mailingAddress = [];
var billingAddress = [];
var dinerNumber = [];
var pointsEarned = [];
var paymentMethod = [];
var counter = 0;

/*

Updates as of Tuesday Nov. 29th:
1) Still working on the database print function and user input from the registration form
2) Validation seems to work at login, need to test some more

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
function checkUser(uName, uPass)
{
  if (checkUserName(uName, username) == true && checkPass(uPass, password) == true)
  {
    alert("Authentication successful! Click 'Close' to continue.");
    window.location.href = "userReservation.html";
  } else
  {
    alert("Username and Password do not match. Please register as a new user.");
    window.location.href = "newuser.html";
  }
}

function checkUserName(uName, username)
{
  let flag = true;
  //console.log(username.length);
  for (var i = 0; i < username.length; i++)
  {
    if (username[i].localeCompare(uName) != 0)
      flag = false;
  }
  if (flag == true)
    return true;
  else
    return false;
}

function checkPass(uPass, password)
{
  let flag = true;
  for (var i = 0; i < password.length; i++)
  {
    if (password[i].localeCompare(uPass) != 0)
      flag = false;
  }
  if (flag == true)
    return true;
  else
    return false;
}

function addNewUser(guestName, username, password, mailingAddress, billingAddress, dinerNumber, counter, paymentMethod)
{
  // Get Form Data, then push to dynamic arrays
  guestName[counter] = document.getElementById("gname").value;
  username[counter] = document.getElementById("newusername").value;
  password[counter] = document.getElementById("newpass").value;
  mailingAddress[counter] = document.getElementById("mailaddress").value;
  billingAddress[counter] = document.getElementById("billaddress").value;
  dinerNumber[counter] = document.getElementById("dinenum");
  paymentMethod[counter] = paymentTypeVal();
  counter++;
}

function applyText()
{
  if(check() == true)
    document.getElementById("billaddress").value = document.getElementById("mailaddress").value;
  else document.getElementById("billaddress").value = "";
}

function check()
{
  if(document.getElementById("mailsamebill").checked == true)
    return true;
  else
    return false;
}

function paymentTypeVal()
{
  if (document.getElementById("cash").checked == true)
    return 1;
  else if (document.getElementById("credit").checked == true)
    return 2;
  else if (document.getElementById("check").checked == true)
    return 3;
  else
    return 0;
}

function autoDinerNum()
{
  document.getElementById("dinenum").value = Math.floor(Math.random() * 10001); // Assign random number as a diner no.
}

function printDataBase(guestName ,username, password, mailingAddress, billingAddress, counter, dinerNumber, paymentMethod)
{
  console.log("\tGuest Name\t\tUsername\t\tPassword\t\tMailingAddress\t\tBilling Address\t\tDiner Number\t\tPaymentMethod\n");
  for (var i = 0; i < counter; i++)
  {
    console.log((i + 1) + ")\t" + guestName[i] + "\t\t" + username[i] + "\t\t\t\t" + password[i] + "\t\t\t\t\t" + mailingAddress[i] + "\t\t" + billingAddress[i]);
    console.log("\t\t" + dinerNumber[i] + "\t\t" + paymentMethod[i] + "\n");
  }
}
