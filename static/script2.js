function seterror(id,error) {
    element=document.getElementById(id);
    element.getElementsByClassName('formserror')[0].innerHTML= error;
     }
     function validateForms(){
		var returnval=true;
		var fname= document.forms['myForms']["name"].value
		if(fname.length<=2|| (!NaN(number)))
		{
			seterror("fname","*Check your name again");
			returnval=false;
		}
        var gmail= document.forms['myForms']["ggmail"].value;
		if(gmail.indexOf('@')<=0)
		{
			seterror("gmail","*Invalid Email");
			returnval=false;
		}
        var spassword= document.forms['myForms']["ppasswd"].value;
		if(spassword.length>20||spassword.length<5)
		{
			seterror("spassword","*length should be between 5 and 20");
			returnval=false;
		}
		var cpassword= document.forms['myForms']["cpasswd"].value;
		if(cpassword!=spassword)
		{
			seterror("cpassword","*password does not match");
			returnval=false;
		}
		var number= document.forms['myForms']["pnum"].value;
		if(number.length!=10||NaN(number))
		{
			seterror("number","*Invalid phone number");
			returnval=false;
		}
		return returnval;
	   }
     