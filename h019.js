function popUp(winURL) {
	window.open(winURL, "popup", "width=320,height=160")
}

function finishLoad() {
	var links = document.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick = function() {
			popUp(this.getAttribute("href"));
			return false;
		}
	}

	var textdiv = document.getElementsByClassName("textdiv");
	var para = document.createElement("p");
	textdiv[0].appendChild(para);
	var text = document.createTextNode("Hello world!!!")
	para.appendChild(text);
}
window.onload = finishLoad();