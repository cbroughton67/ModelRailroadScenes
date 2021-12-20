/* function to update copyright date */
function copyrightDate() {
    const cdate = new Date();
    document.getElementById("copyrightDate").innerHTML = cdate.getFullYear();
  }
  
  /* function used for testing */
  function myFunction() {
    alert("Alert!!!");
  }
  
  function rickRoll() {
    document.getElementById("easteregg").style.display='block';
    
  }

  /* function to validate email input */
  function validateEmail(inputEmail) 
  {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputEmail.match(mailFormat))
    {
      var response = document.getElementById("response");
      response.textContent = inputEmail + " is now subscribed!"; 
      response.style.color = "green";
      /* alert(inputEmail + " is now subscribed!");*/
      document.getElementById('emailField').focus();
      return true;
    }
    else
    {
      var response = document.getElementById("response");
      response.textContent = inputEmail + " is an invalid email format. Please try again.";
      response.style.color = "red";
      /* alert(inputEmail + " is an invalid email format. Please try again."); */
      document.getElementById('emailField').focus();
      return false;
    }
  }