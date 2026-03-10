let dark = false; // initially light mode

        function switchMode() {
            if (dark) {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
                document.getElementById("d").innerText = "🌚"; // reset icon
                dark = false;
            } else {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
                document.getElementById("d").innerText = "🌞"; // sun icon
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
