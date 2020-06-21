function getTime() {
	var v = new Date();
	var time = v.getHours() + ":" + ( "0" + v.getMinutes() ).slice(-2);
	return time;
}

function eclockOut() {
	var des = confirm("Your tasks are not completed. Clock out anyway?");
	if(des) {
		clockOut();
		document.getElementById("timeOut").innerHTML = getTime();
		document.getElementById("tspent").innerHTML = "1 minute";
		document.getElementById("ipoints").innerHTML = "13";
		document.getElementById("cpoints").innerHTML = "0";
		
	}
	else {
		var des2 = confirm("Would you like to view your tasks?");
		if (des2) {
			window.location.href='./tasklist.html';
		}
	}
}

function no() {
	alert("Cannot clock out. You have not clocked in yet.")
}

function no2() {
	alert("Already clocked in.")
}

function clockOut() {
	alert("Clock out at " + getTime());
}
function clockIn() {
	alert("Clock in at " + getTime());
}

function eclockIn(){
	clockIn();
	window.location.href = './timesheetdemo.html';
}