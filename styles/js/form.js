function myFunction() {
  var valid = 1;
  var email = document.getElementById('email');
  var email_validation = document.getElementById("email_validation");
  var pas = document.getElementById('pas');
  var pas_validation = document.getElementById("pas_validation");
  var fname = document.getElementById('fname');
  var fname_validation = document.getElementById("fname_validation");
  var bir = document.getElementById('bir');
  var bir_validation = document.getElementById("bir_validation");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(email == null || email == "" ||!filter.test(email.value)) {
    valid = 0;
    email_validation.innerHTML = "Hm, that address is invalid. Check for typos?";
    email_validation.style.display = "block";
  } else {
    email_validation.style.display = "none";
  }
 
    var pas = document.getElementById("pas").value;
    var patter=/^.*(?=.{5,9})(?=.*[a-z]).*$/;
    if (pas == null || pas == "" || !patter.test(pas)) {
     valid = 0;
     pas_validation.innerHTML = "Your password must be at least 5 characters.";
     pas_validation.style.display = "block";
  } else {
     pas_validation.style.display = "none";
  }

  if (fname.value === "") {
    valid = 0;
    fname_validation.innerHTML = "Please enter your first name.";
    fname_validation.style.display = "block";
  } else {
    fname_validation.style.display = "none";
  }

  
   var bir = document.getElementById("bir").value;
    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if (bir == null || bir == "" || !pattern.test(bir)) {
      valid = 0;
      bir_validation.innerHTML = "Please use this format: DD/MM/YYYY";
      bir_validation.style.display = "block";
    }
    else {
      bir_validation.style.display = "none";
    }

  var x, text;
    x = document.getElementById("myForm").value;
    if (isNaN(x) || x == null || x == "") {
        text = "Looks like something went wrong. Please try submitting again";
    } else {
        text = "";
    }
    document.getElementById("myForm_validation").innerHTML = text;

if (!valid)
    return false;
}


function myFunction1() {
  var valid = 1;
  var email = document.getElementById('email');
  var email_validation = document.getElementById("email_validation");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(email == null || email == "" ||!filter.test(email.value)) {
    valid = 0;
    email_validation.style.display='none';
  } 
  if (!valid)
    return false;

}
function myFunction2() {
     var valid = 1;
     var email = document.getElementById('email');
     var email_validation = document.getElementById("email_validation");
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!filter.test(email.value)) {
     valid = 0;
     email_validation.innerHTML = "Hm, that address is invalid. Check for typos?";
     email_validation.style.display = "block";
  } 
  else {
     email_validation.style.display = "none";
 }
  if (!valid)
    return false;

}

function myFunction3() {
  var valid = 1;
  var pas = document.getElementById('pas');
  var pas_validation = document.getElementById("pas_validation");
  
  var pas = document.getElementById("pas").value;
  var patter=/^.*(?=.{5,9})(?=.*[a-z]).*$/;
    if (pas == null || pas == "" || !patter.test(pas)) {
    valid = 0;
    pas_validation.style.display='none';
  }

  if (!valid)
    return false;

}
function myFunction4() {
     var valid = 1;
     var pas = document.getElementById('pas');
     var pas_validation = document.getElementById("pas_validation");
     var pas = document.getElementById("pas").value;
     var patter=/^.*(?=.{5,9})(?=.*[a-z]).*$/;
    if (pas == null || pas == "" || !patter.test(pas)) {
    valid = 0;
    pas_validation.innerHTML = "Your password must be at least 5 characters.";
    pas_validation.style.display = "block";
  } else {
    pas_validation.style.display = "none";
  }

  if (!valid)
    return false;

}
function myFunction5() {
     var valid = 1;
     var fname = document.getElementById('fname');
     var fname_validation = document.getElementById("fname_validation");
  
  if (fname.value === "") {
    valid = 0;
    fname_validation.style.display = "none";
  }
  if (!valid)
    return false;

}
function myFunction6() {
    var valid = 1;
    var fname = document.getElementById('fname');
    var fname_validation = document.getElementById("fname_validation");
 
  if (fname.value === "") {
    valid = 0;
    fname_validation.innerHTML = "Please enter your first name.";
    fname_validation.style.display = "block";
  } else {
    fname_validation.style.display = "none";
  }   

  if (!valid)
    return false;

}
function myFunction7() {
     var valid = 1;
     var bir = document.getElementById('bir');
     var bir_validation = document.getElementById("bir_validation");
     var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
     var bir = document.getElementById("bir").value;
    
    if (bir == null || bir == "" || !pattern.test(bir)) {
      valid = 0;
      bir_validation.style.display = "none";
   }
  if (!valid)
    return false;

}
function myFunction8() {
     var valid = 1;
     var bir = document.getElementById('bir');
     var bir_validation = document.getElementById("bir_validation");
     var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    
    var bir = document.getElementById("bir").value;
    
    if (bir == null || bir == "" || !pattern.test(bir)) {
      valid = 0;
      bir_validation.innerHTML = "Please use this format: DD/MM/YYYY";
      bir_validation.style.display = "block";
    }
    else {
      bir_validation.style.display = "none";
    }
  if (!valid)
    return false;

}