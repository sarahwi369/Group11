function main() {
	window.location.href="../workermenu.html";
}
function sign() {
	var choice = confirm("Not all tasks complete. Sign off anyway?");

	if (choice) {
		alert("Tasks completed! Employee may clock out now.");
		main();
	}
}