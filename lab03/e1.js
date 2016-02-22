function validate()
{
	var p1 = document.getElementsByName("Password1");
	var p2 = document.getElementsByName("Password2");
	if((p1[0].value.length<8)||(p2[0].value.length<8))
	{
		alert("The passwords are too short");
	}else if(p1[0].value != p2[0].value)
	{
		alert("The passwords do not match");
	}else
	{
		alert("The passwords match");	
	}
}
