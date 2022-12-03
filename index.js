var guestName = [];
var username = [];
var password = [];
var mailingAddress = [];
var billingAddress = [];
var dinerNumber = [];
var pointsEarned = [];
var paymentMethod = [];
var currentGuestName;
/*

Updates as of Thursday Dec. 1st
1) Input from registration works, data stored in dynamic array and can be viewed in the console local storage during demo
2) Validation works fully on login page
3) Input validation completed and works fully for the registration page
4) Table reservation system works, output on confirmation page may need to be formatted better
5) Overall, project is ready for demo
6) Added date and phone validation

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
    for (var i = 0; i < guestName.length; i++)
    {
      if (username[i].localeCompare(uName) == 0)
      {
        currentGuestName = guestName[i];
        localStorage.setItem('currentGuestName', JSON.stringify(currentGuestName));
        break;
       }
      }
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
  window.location.href = "userReservation.html";
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

  table2 = JSON.parse(localStorage.getItem('table2')) || [];
  table4 = JSON.parse(localStorage.getItem('table4')) || [];
  table6 = JSON.parse(localStorage.getItem('table6')) || [];
  numGuests = JSON.parse(localStorage.getItem('numGuests')) || [];
  tablesCombined = JSON.parse(localStorage.getItem('tablesCombined')) || [];
  holdFee = JSON.parse(localStorage.getItem('holdFee')) || [];
  Time = JSON.parse(localStorage.getItem('Time')) || [];
  emailID = JSON.parse(localStorage.getItem('emailID')) || [];
  phone = JSON.parse(localStorage.getItem('phone')) || [];
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























var table2 = [];
var table4 = [];
var table6 = [];
var numGuests = [];
var tablesCombined = [];
var holdFee = [];
var Time = [];
var emailID = [];
var phone = [];

function tableSelect()
{
    numGuests = JSON.parse(localStorage.getItem('numGuests')) || [];
    numGuests.push(document.getElementById("usernumguests").value);
    localStorage.setItem('numGuests', JSON.stringify(numGuests));

    var value = numGuests[numGuests.length - 1];
    if (value == 2)
    {
        table2 = JSON.parse(localStorage.getItem('table2')) || [];
        document.getElementById("usernumtwotables").value = 2;
        table2.push(1);
        localStorage.setItem('table2', JSON.stringify(table2));
    }
    else if (value == 4)
    {
        table4 = JSON.parse(localStorage.getItem('table4')) || [];
        document.getElementById("usernumfourtables").value = 4;
        table4.push(1);
        localStorage.setItem('table4', JSON.stringify(table4));
    }
    else if (value == 6)
    {
        table6 = JSON.parse(localStorage.getItem('table6')) || [];
        document.getElementById("usernumsixtables").value = 6;
        table6.push(1);
        localStorage.setItem('table6', JSON.stringify(table6));
    }
    
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    if (document.getElementById("usernumsixtables").value > 0)
    {
        flag1 = true;
    }
    if (document.getElementById("usernumfourtables").value > 0)
    {
        flag2 = true;
    }
    if (document.getElementById("usernumtwotables").value > 0)
    {
        flag3 = true;
    }

    if ((flag1 == true && flag2 == true) || (flag2 == true && flag3 == true) || (flag1 == true && flag3 == true))
    {
        alert("Tables have to be combined!");
        tablesCombined = JSON.parse(localStorage.getItem('tablesCombined')) || [];
        tablesCombined.push("Yes");
        localStorage.setItem('tablesCombined', JSON.stringify(tablesCombined));
    }
    else
    {
        tablesCombined = JSON.parse(localStorage.getItem('tablesCombined')) || [];
        tablesCombined.push("No");
        localStorage.setItem('tablesCombined', JSON.stringify(tablesCombined));
    }
    Time = JSON.parse(localStorage.getItem('Time')) || [];
    Time.push(document.getElementById('res').value);
    localStorage.setItem('Time', JSON.stringify(Time));
    highTraffic();
    window.location.href = "reservationconfirmation.html";
}

function highTraffic()
{
    if (Time.length > 2)
    {
        alert("Since today is a high traffic day, a hold fee of $10 will be placed on your preferred payment method.");
        holdFee = JSON.parse(localStorage.getItem('holdFee')) || [];
        holdFee.push("Yes");
        localStorage.setItem('holdFee', JSON.stringify(holdFee));
    }
    else
    {
        holdFee = JSON.parse(localStorage.getItem('holdFee')) || [];
        holdFee.push("No");
        localStorage.setItem('holdFee', JSON.stringify(holdFee));
    }
}

function guestTableSelect()
{  
  checkPhone();
  dateValidation();
  guestName = JSON.parse(localStorage.getItem('guestName')) || [];
  guestName.push(document.getElementById("guestname").value);
  localStorage.setItem('guestName', JSON.stringify(guestName));

  emailID = JSON.parse(localStorage.getItem('emailID')) || [];
  emailID.push(document.getElementById("email").value);
  localStorage.setItem('emailID', JSON.stringify(emailID));
  
  phone = JSON.parse(localStorage.getItem('phone')) || [];
  phone.push(document.getElementById("guestphone").value);
  localStorage.setItem('phone', JSON.stringify(phone));


    numGuests = JSON.parse(localStorage.getItem('numGuests')) || [];
    numGuests.push(document.getElementById("numguests").value);
    localStorage.setItem('numGuests', JSON.stringify(numGuests));

    var value = numGuests[numGuests.length - 1];
    if (value == 2)
    {
        table2 = JSON.parse(localStorage.getItem('table2')) || [];
        document.getElementById("numtwotables").value = 2;
        table2.push(1);
        localStorage.setItem('table2', JSON.stringify(table2));
      

        table4 = JSON.parse(localStorage.getItem('table4')) || [];
        document.getElementById("numfourtables").value = 0;
        table4.push(0);
        localStorage.setItem('table4', JSON.stringify(table4));
      
      
        table6 = JSON.parse(localStorage.getItem('table6')) || [];
        document.getElementById("numsixtables").value = 0;
        table6.push(0);
        localStorage.setItem('table6', JSON.stringify(table6));

    }
    else if (value == 4)
    {
      table2 = JSON.parse(localStorage.getItem('table2')) || [];
      document.getElementById("numtwotables").value = 0;
      table2.push(0);
      localStorage.setItem('table2', JSON.stringify(table2));


      table4 = JSON.parse(localStorage.getItem('table4')) || [];
      document.getElementById("numfourtables").value = 4;
      table4.push(1);
      localStorage.setItem('table4', JSON.stringify(table4));
      

      table6 = JSON.parse(localStorage.getItem('table6')) || [];
      document.getElementById("numsixtables").value = 0;
      table6.push(0);
      localStorage.setItem('table6', JSON.stringify(table6));
    }
    else if (value == 6)
    {

      table2 = JSON.parse(localStorage.getItem('table2')) || [];
      document.getElementById("numtwotables").value = 0;
      table2.push(0);
      localStorage.setItem('table2', JSON.stringify(table2));


      table4 = JSON.parse(localStorage.getItem('table4')) || [];
      document.getElementById("numfourtables").value = 0;
      table4.push(0);
      localStorage.setItem('table4', JSON.stringify(table4));


      table6 = JSON.parse(localStorage.getItem('table6')) || [];
      document.getElementById("numsixtables").value = 6;
      table6.push(1);
      localStorage.setItem('table6', JSON.stringify(table6));
    }
    
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    if (document.getElementById("numsixtables").value > 0)
    {
        flag1 = true;
    }
    if (document.getElementById("numfourtables").value > 0)
    {
        flag2 = true;
    }
    if (document.getElementById("numtwotables").value > 0)
    {
        flag3 = true;
    }

    if ((flag1 == true && flag2 == true) || (flag2 == true && flag3 == true) || (flag1 == true && flag3 == true))
    {
        alert("Tables have to be combined!");
        tablesCombined = JSON.parse(localStorage.getItem('tablesCombined')) || [];
        tablesCombined.push("Yes");
        localStorage.setItem('tablesCombined', JSON.stringify(tablesCombined));
    }
    else
    {
        tablesCombined = JSON.parse(localStorage.getItem('tablesCombined')) || [];
        tablesCombined.push("No");
        localStorage.setItem('tablesCombined', JSON.stringify(tablesCombined));
    }
  
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


    Time = JSON.parse(localStorage.getItem('Time')) || [];
    Time.push(document.getElementById('res').value);
    localStorage.setItem('Time', JSON.stringify(Time));
  highTraffic();
  if (checkPhone() == 1 || dateValidation() == 1)
  {
    window.location.href = "guestlogin.html";
  }
  else
  {
    window.location.href = "reservationconfirmation.html";
  }
    
}


function reservationConfirmed()
{
  // Format this better...
  document.write("<div style='font-family:Arial'> Hello " + guestName[guestName.length - 1] + "!,</div>");
  document.write("<div style='font-family:Arial'> Please see your reservation details below:\n </div>");
  document.write("<div style='font-family:Arial'> Reservation date: " + Time[Time.length - 1] + "\n</div>");
  document.write("<div style='font-family:Arial'> Number of Guests: " + numGuests[numGuests.length - 1] + "\n</div>");
  document.write("<div style='font-family:Arial'> Payment Method: " + paymentMethod[paymentMethod.length - 1] + "\n</div>");
  document.write("<div style='font-family:Arial'> Hold Fee: " + holdFee[holdFee.length - 1] + "\n</div>");
}

function checkPhone()
{
  if (document.getElementById("guestphone").value.length > 10)
  {
    alert("Please enter a valid phone number");
    return 1;
  }
  return 0;
}

function dateValidation()
{
  var date_time = document.getElementById('res').value;
  if (date_time[2] != 2)
  {
    if (date_time[3] < 2 || date_time[3] > 3)
    {
      alert("Please enter valid date and time.");
      return 1;
    }  
  }
  else if (date_time[2] == 2)
  {
    if (date_time[3] < 2 || date_time[3] > 3)
    {
      alert("Please enter valid date and time.");
      return 1;
    }  
  }
  else
  {
    return 0;
  }
}
   