function setFields()
{
  var p1 = document.getElementById("r1").value;
  var p2 = document.getElementById("b1").value;
  var p3 = document.getElementById("g1").value;
  var p4 = document.getElementById("w").value;
  var p5 = document.getElementById("r2").value;
  var p6 = document.getElementById("b2").value;
  var p7 = document.getElementById("g2").value;
  var p8 = document.getElementById("paragraph");


  p8.style.backgroundColor = rgb(p1,p2,p3);
  p8.style.borderColor = rgb(p5,p6,p7);
  p8.style.width= p4;

}

function rgb(r,g,b)
{
	return("rgb("+r+","+g+","+b+")");
}
