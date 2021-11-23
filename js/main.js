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