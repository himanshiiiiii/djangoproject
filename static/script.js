       function seterrors(id,error) {
      element=document.getElementById(id);
	  element.getElementsByClassName('formerror')[0].innerHTML= error;
	   }
	   function validateForm(){
		var returnval=true;
		var email= document.forms['myForm']["eemail"].value;
		if(email.indexOf('@')<=0)
		{
			seterrors("email","*Invalid Email");
			returnval=false;
		}
		var password= document.forms['myForm']["passwd"].value;
		if(password.length>20||password.length<5)
		{
			seterrors("password","*length should be between 5 and 20");
			returnval=false;
		}
		return returnval;
	}
	