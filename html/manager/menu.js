function task() {
	window.location.href="./task/taskmenu.html";
}
function view() {
	window.location.href='./tasks/tasks.html';
}
function employee() {
	window.location.href="./employee/manageemployee.html";
}
function logout() {
	window.location.href="../login.html";
}
function getTime() {
	var v = new Date();
	var time = v.getHours() + ":" + ( "0" + v.getMinutes() ).slice(-2);
	return time;
}
function clockOut() {
	alert("Clock out at " + getTime());
}
function clockIn() {
	alert("Clock in at " + getTime());
}