//your JS code here. If required.
function onSubmit(event) {
	event.preventDefault()
	f = document.getElementById("fname").value
	l = document.getElementById("lname").value
	p = document.getElementById("phone").value
	e = document.getElementById("emailid").value
	alert(`First Name: ${f} Last Name: ${l} Phone Number: ${p} Email ID: ${e}`)
}