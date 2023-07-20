function passValidate() {
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    if (pass == cpass) {
        document.getElementById("e2").innerText = " ";
    }
    else {

        document.getElementById("e2").style.color = "red";

        document.getElementById("e2").innerText = "Password Mismatch ";
    }
}
function emailValidate() {
    var emailId = document.getElementById("emailId").value;
    var regex = /^\w+([-.]?\w+)*@\w+([-.]?\w+)*\.\w+([-.]\w+)*$/;
    if (regex.test(emailId)) {
        document.getElementById("e1").innerText = " ";
    }
    else {
        document.getElementById("e1").style.color = "red";
        document.getElementById("e1").innerText = "Incorrect Email Id ";
    }
}