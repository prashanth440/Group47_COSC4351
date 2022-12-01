var guestName = [];
var username = [];
var password = [];
var mailingAddress = [];
var billingAddress = [];
var dinerNumber = [];
var pointsEarned = [];
var paymentMethod = [];

/*

Updates as of Tuesday Nov. 30th:
1) Input from registration works, data stored in dynamic array and can be viewed in the console local storage during demo
2) Validation works fully on login page
3) Input validation completed and works fully for the registration page

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
  if (checkUserName(uName) == true && checkPass(uPass) == true)
  {
    alert("Authentication successful! Click 'Close' to continue.");
    window.location.href = "userReservation.html";
  } else
  {
    alert("Username and Password do not match. Please register as a new user.");
    window.location.href = "newuser.html";
  }
}

function checkUserName(uName)
{
  var flag;
  if (username.length == 0)
    return false
  else
  {
    for (var i = 0; i < username.length; i++) {
      if (username[i].localeCompare(uName) == 0)
      { 
        flag = true;
        break;
      }
    }
    if (flag == true)
      return true;
    else
      return false;
  }
}

function checkPass(uPass)
{
  var flag;
  if (password.length == 0)
    return false;
  else
  {
    for (var i = 0; i < password.length; i++)
    {
      if (password[i].localeCompare(uPass) == 0)
      {
        flag = true;
        break;
      }
        
    }
    if (flag == true)
      return true;
    else
      return false;
  }
}

function addNewUser()
{
  // Get Form Data, then push to dynamic arrays and local storage
  guestName = JSON.parse(localStorage.getItem('guestName')) || [];
  guestName.push(document.getElementById("gname").value);
  localStorage.setItem('guestName', JSON.stringify(guestName));

  username = JSON.parse(localStorage.getItem('userName')) || [];
  username.push(document.getElementById("newusername").value);
  localStorage.setItem('userName', JSON.stringify(username));
  
  password = JSON.parse(localStorage.getItem('Password')) || [];
  password.push(document.getElementById("newpass").value);
  localStorage.setItem('Password', JSON.stringify(password));

  mailingAddress = JSON.parse(localStorage.getItem('mailingAddress')) || [];
  mailingAddress.push(document.getElementById("mailaddress").value);
  localStorage.setItem('mailingAddress', JSON.stringify(mailingAddress));

  billingAddress = JSON.parse(localStorage.getItem('billingAddress')) || [];
  billingAddress.push(document.getElementById("billaddress").value);
  localStorage.setItem('billingAddress', JSON.stringify(billingAddress));

  dinerNumber = JSON.parse(localStorage.getItem('dinerNumber')) || [];
  dinerNumber.push(document.getElementById("dinenum").value);
  localStorage.setItem('dinerNumber', JSON.stringify(dinerNumber));

  
  paymentMethod = JSON.parse(localStorage.getItem('paymentMethod')) || [];
  if (paymentTypeVal() == 1)
  {
    paymentMethod.push("Cash");
  }
  else if (paymentTypeVal() == 2)
  {
    paymentMethod.push("Credit");
  }
  else if (paymentTypeVal() == 3)
  {
    paymentMethod.push("Check");
  }
  else
  {
    paymentMethod.push("No payment method selected");
  }
  localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
}

function retrieveData()
{
  guestName = JSON.parse(localStorage.getItem('guestName')) || [];
  username = JSON.parse(localStorage.getItem('userName')) || [];
  password = JSON.parse(localStorage.getItem('Password')) || [];
  mailingAddress = JSON.parse(localStorage.getItem('mailingAddress')) || [];
  billingAddress = JSON.parse(localStorage.getItem('billingAddress')) || [];
  dinerNumber = JSON.parse(localStorage.getItem('dinerNumber')) || [];
  paymentMethod = JSON.parse(localStorage.getItem('paymentMethod')) || [];
}

retrieveData();
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

function printDataBase()
{
  console.log("\tGuest Name\t\tUsername\t\tPassword\t\tMailingAddress\t\tBilling Address\t\tDiner Number\t\tPaymentMethod\n");
  for (var i = 0; i < username.length; i++)
  {
    console.log((i + 1) + ")\t" + guestName[i] + "\t\t\t\t\t" + username[i] + "\t\t\t\t" + password[i] + "\t\t\t\t\t" + mailingAddress[i] + "\t\t\t\t" + billingAddress[i] + "\t\t\t\t" + dinerNumber[i] + "\t\t\t\t" + paymentMethod[i] + "\n");
  }
}

function checkValues() {
  if (document.getElementById("gname").value == "")
  {
    alert("Please enter your name.");
  }
  else if (document.getElementById("newusername").value == "")
  {
    alert("Please enter your username");
  }
  else if (document.getElementById("newpass").value == "")
  {
    alert("Please enter your password");
  }
  else if (document.getElementById("mailaddress").value == "")
  {
    alert("Please enter your mailaddress or billing address.");
  }
  else
  {
    addNewUser();
  }
}
