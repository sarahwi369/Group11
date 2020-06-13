function add() {
	var choice = confirm("Are you sure you wish to add employee?");

	if (choice) {
		alert("Employee added!");
		window.location.href = '../menu.html';
	}
}

function sure() {
	var choice = confirm("Are you sure you wish to quit?");

	if (choice) {
		window.location.href = './manageemployee.html';
	}
}

function save() {
	var input = document.getElementById("userinput").value;
	var blob = new Blob([input], { type: "text/plain;charset=utf-8"});
	saveAs(blob, "./employee.txt");
}
