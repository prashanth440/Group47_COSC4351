var table2 = [];
var table4 = [];
var table6 = [];
var counter = 0;

function tableSelection(table2, table4, table6)
{
  table2[counter] = document.getElementById("usernumtwotables").value;
  table4[counter] = document.getElementById("usernumfourtables").value;
  table6[counter] = document.getElementById("usernumsixtables").value;
  counter++;

  for (var i = 0; i < counter; i++) 
  {
    var counter2 = 0;
    var counter4 = 0;
    var counter6 = 0;

    if(document.getElementById("usernumtwotables").checked == true)
    {
        counter2++
        if (counter2 > 10)
        {
            //This is where we will stop accepting reservations for 2 tables since max limit reached
        }

    }

    if(document.getElementById("usernumfourtables").checked == true)
    {
        counter4++
        if (counter4 > 10)
        {
            //This is where we will stop accepting reservations for 4 tables since max limit reached
        }

    }

    if(document.getElementById("usernumsixtables").checked == true)
    {
        counter6++
        if (counter6 > 10)
        {
            //This is where we will stop accepting reservations for 6 tables since max limit reached
        }

    }

  }

}
