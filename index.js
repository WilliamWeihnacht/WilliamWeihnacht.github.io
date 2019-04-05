'use strict';

//animate images currently not working on live site
function animateMe() {
	const img = document.getElementById("imgMe");
	let curImage = img.getAttribute("src");

	if(curImage == "images/me.jpg") {
		curImage = "images/me2.jpg";
	} else if(curImage == "images/me2.jpg") {
		curImage = "images/me3.jpg";
	} else {
		curImage = "images/me.jpg";
	}
	img.setAttribute("src",curImage);
}

//document.getElementById("imgMe").addEventListener("click",animateMe);