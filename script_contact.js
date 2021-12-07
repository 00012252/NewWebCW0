// this function vallidates the contact form
function validate(){
  // getting the information
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){                  //if the name and surname is less than 5 symnols long
      text = "Please Enter valid Name";     //error message will appear
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 9){          //phone numbers in uzbekistan are ususally 9 numbers long without the (+998)
      text = "Please Enter valid Phone Number"; // isNaN checks checks if the values entered are NOT numbers, then checks if 9 numbers are entered
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){       //looking for the @ sign
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 60){                       //messege must be at least 60 characters long
      text = "Please enter atleast 60 characters in your message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");      //informing the user of successfylly filling the form
    return true;
  }