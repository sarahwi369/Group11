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