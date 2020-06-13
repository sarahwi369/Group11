function add() {
	var choice = confirm("Are you sure you wish to add this task?");

	if (choice) {
		alert("Task added!");
		window.location.href = '../menu.html';
	}
}

function sure() {
	var choice = confirm("Are you sure you wish to quit?");

	if (choice) {
		window.location.href = '../menu.html';
	}
}