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
      alert("You are now subscribed!");
      document.getElementById('emailField').focus();
      return true;
    }
    else
    {
      alert("Invalid email address! Please try again.");
      document.getElementById('emailField').focus();
      return false;
    }
  }