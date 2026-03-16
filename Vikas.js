let dark = false; // initially light mode

function switchMode() {
    if (dark) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.classList.remove("dark");   // 👈 ye add karo
        document.getElementById("d").innerText = "🌚";
        dark = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.classList.add("dark");   // 👈 ye add karo
        document.getElementById("d").innerText = "🌞";
        dark = true;
    }
}

// dummy functions
function login() {
    alert(" ✅Your Login Succesfull");
}

function forgetpassword() {
    alert("✅ Your Password has been Set ");
}

function createnewaccount() {
    alert("✅Creating New Account!");
}
