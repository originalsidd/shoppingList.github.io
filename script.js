var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function check(event) {
	var li2 = document.querySelectorAll(".this");
	var index = Array.from(li2).indexOf(event.target);
	li2[index].classList.toggle("done");
}

function deleteListElement(event) {
	var delButton = document.getElementsByClassName("del-li");
	var divl = document.getElementsByClassName("gap");
	var li3 = document.querySelectorAll(".this");
	var index2 = Array.from(delButton).indexOf(event.target);
	// console.log(li3[index2]);
	li3[index2].parentNode.removeChild(li3[index2]);
	delButton[index2].parentNode.removeChild(delButton[index2]);
	divl[index2].parentNode.removeChild(divl[index2]);
}

function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("div");
	var delButton = document.createElement("button");

	var field = document.createElement('div');
	field.classList.add('field');

	li.appendChild(document.createTextNode(input.value));
	li.classList.add("this");
	field.appendChild(li);
	
	div.classList.add("gap");
	field.appendChild(div);
	
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.classList.add("del-li");
	field.appendChild(delButton);

	ul.appendChild(field);

	input.value = "";
	callit();
	delit();
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

var delit = function() {
	var delButton = document.getElementsByClassName("del-li");
	for (var i=0; i< delButton.length; i++) {
		delButton[i].addEventListener("click", deleteListElement);
	}
};
delit();

var callit = function() {
	var li2 = document.querySelectorAll(".this");
	li2.forEach(function (i) {
		i.addEventListener("click", check);
	});
};

callit();