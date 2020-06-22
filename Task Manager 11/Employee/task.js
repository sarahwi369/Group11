function change_text2(){
	document.getElementById("task2").innerHTML = "Complete";
	document.getElementById("finished2").innerHTML = "*pending";
}
function change_text3(){
	document.getElementById("task3").innerHTML = "Complete";
	document.getElementById("finished3").innerHTML = "*pending";
}
function change_text4(){
	document.getElementById("task4").innerHTML = "Complete";
	document.getElementById("finished4").innerHTML = "*pending";
}

function tswitch() {
	window.location.href='./tswitch.html';
}

function tswitchr() {
	window.location.href='./tswitchr.html';
}

function submit() {
	alert("Submitted");
	window.location.href="./tasklist.html";
}
