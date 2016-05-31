//area of a triangle given all three sides via Hero's Formula
var AreaTriangle = function (a,b,c){
	//inputs for all three sides
	a=document.getElementById("input1").value;
	b=document.getElementById("input2").value;
	c=document.getElementById("input3").value; {
		//convert string to floats
		var AreaA=parseFloat(a);
		var AreaB=parseFloat(b);
		var AreaC=parseFloat(c);
		//write results on HTML
		{
			if((AreaA > Math.pow((AreaB*AreaB)+(AreaC*AreaC),.5)) || (AreaB > Math.pow((AreaA*AreaA)+(AreaC*AreaC),.5)) || (AreaC > Math.pow((AreaA*AreaA)+(AreaB*AreaB),.5))) {
				alert("illegal action performed: Please keep triangle ratios within known models");
			}
			//basic formula
			var Peri = (AreaA + AreaB + AreaC)/2; {
			var finalAnswer = Math.pow(((Peri)*(Peri-AreaA)*(Peri-AreaB)*(Peri-AreaC)),.5);
			}

			document.getElementById("solve").innerHTML = "<h5>Side one is <code>" + (AreaA) 
			+ "</code> <p> Side two is <code>" + (AreaB) 
			+ "</code></p> <p> Side three is <code>" + (AreaC) 
			+ "</code></p></h5> <p> <h4>The area of the triangle is <code>" + (finalAnswer) + "</code></p></h4>";
			}
		}
	}