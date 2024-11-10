document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username === "ambrish" && password === "rajput") {
		alert("Login successful!");
	} else {
		alert("Invalid username or password.");
	}
});