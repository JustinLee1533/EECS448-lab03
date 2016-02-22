
var p1 = "http://people.eecs.ku.edu/~jrlee/EECS448/lab03/rare_pepes/pepe1.png";
var p2 = "http://people.eecs.ku.edu/~jrlee/EECS448/lab03/rare_pepes/pepe2.jpg";
var p3 = "http://people.eecs.ku.edu/~jrlee/EECS448/lab03/rare_pepes/pepe3.jpg";
var p5 = "http://people.eecs.ku.edu/~jrlee/EECS448/lab03/rare_pepes/pepe5.png";
var p6 = "http://people.eecs.ku.edu/~jrlee/EECS448/lab03/rare_pepes/pepe6.jpg";

var count = 0;
var picArr = [p1, p2, p3, p5, p6];

function showNext()
{
	count++
	if(count == 5)
	{
		count = 0;
	}
	//show image at i
	document.getElementById("image").src = picArr[count];
}


function showPrevious()
{
	count--;
	if(count ==-1)
	{
		count = 4;
	}
	document.getElementById("image").src = picArr[count];
}
