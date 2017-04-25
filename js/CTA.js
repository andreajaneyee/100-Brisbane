function selectedElement(elementName) {
	var nameBox = document.forms["CTA"].elements[elementName];

	nameBox.style.backgroundColor = "#EB9C35";
}


function deselectedElement(elementName) {
	var nameBox = document.forms["CTA"].elements[elementName];

	nameBox.style.backgroundColor = "whitesmoke";
}
