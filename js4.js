document.addEventListener("DOMContentLoaded", () => {
  const mediaquer2 = window.matchMedia("(max-width: 767px)");
  const forgetpass = document.getElementById("forgetpassword");
  const bigContainer = document.getElementsByClassName("bigcontainer")[0];

  forgetpass.addEventListener("click", () => {
    if (!mediaquer2.matches) {
      document.getElementById("signp").innerHTML = "Change Password";
      document.getElementById("logindiv").style.display = "none";
      document.getElementById("gmaildiv").style.display = "none";
      document.getElementById("passworddiv").style.display = "none";
      document.getElementById("forgetpassworddiv").style.display = "none";
      document.getElementById("gmail").value = "";
      document.getElementById("password").value = "";
      document.getElementById("signp").style.display = "block";
      document.getElementById("signp").style.fontWeight = "bold";
      const changepassdiv = document.createElement("div");
      changepassdiv.id = "changepassdiv";
      changepassdiv.style.gridArea = "6/5/7/9";
      changepassdiv.style.display = "flex";
      changepassdiv.style.flexDirection = "column";
      changepassdiv.style.justifyContent = "center";
      changepassdiv.style.alignItems = "center";

      const labelchangepass = document.createElement("label");
      labelchangepass.innerHTML = "New Password: ";
      labelchangepass.style.fontSize = "2vw";
      labelchangepass.style.fontWeight = "bold";
      labelchangepass.style.marginTop = "1.5vw";

      const inputchangepass = document.createElement("input");
      inputchangepass.type = "password";
      inputchangepass.style.width = "30vw";
      inputchangepass.placeholder = "enter a 8 characters password and above";
      inputchangepass.style.height = "2vw";
      inputchangepass.style.backgroundColor = "wheat";
      inputchangepass.style.paddingLeft = "0.2vw";
      inputchangepass.style.marginTop = "2vw";
      inputchangepass.style.border = "1px solid black";

      changepassdiv.appendChild(labelchangepass);
      changepassdiv.appendChild(inputchangepass);
      bigContainer.appendChild(changepassdiv);

      const changepassconfdiv = document.createElement("div");
      changepassconfdiv.id = "changepassdiv";
      changepassconfdiv.style.gridArea = "7/5/8/9";
      changepassconfdiv.style.display = "flex";
      changepassconfdiv.style.flexDirection = "column";
      changepassconfdiv.style.justifyContent = "center";
      changepassconfdiv.style.alignItems = "center";

      const labelchangeconfpass = document.createElement("label");
      labelchangeconfpass.innerHTML = "Password Confirm: ";
      labelchangeconfpass.style.fontSize = "2vw";
      labelchangeconfpass.style.fontWeight = "bold";
      labelchangeconfpass.style.marginTop = "1.5vw";

      const inputchangeconfpass = document.createElement("input");
      inputchangeconfpass.type = "password";
      inputchangeconfpass.style.width = "30vw";
      inputchangeconfpass.placeholder = "Re-enter the password";
      inputchangeconfpass.style.height = "2vw";
      inputchangeconfpass.style.backgroundColor = "wheat";
      inputchangeconfpass.style.paddingLeft = "0.2vw";
      inputchangeconfpass.style.marginTop = "2vw";
      inputchangeconfpass.style.border = "1px solid black";

      changepassconfdiv.appendChild(labelchangeconfpass);
      changepassconfdiv.appendChild(inputchangeconfpass);
      bigContainer.appendChild(changepassconfdiv);

      const divnext = document.createElement("div");
      divnext.style.gridArea = "8/7/9/9";
      divnext.style.display = "flex";
      divnext.style.justifyContent = "center";
      divnext.style.alignItems = "center";

      const next = document.createElement("button");
      next.style.width = "8vw";
      next.style.border = "none";
      next.style.height = "2vw";
      next.style.backgroundColor = "rgb(255, 149, 0)";
      next.style.color = "wheat";
      next.style.fontSize = "1.5vw";
      next.style.borderRadius = "4px";
      next.innerHTML = "Next";

      divnext.appendChild(next);
      bigContainer.appendChild(divnext);
      const divback = document.createElement("div");
      divback.style.gridArea = "8/5/9/7";
      divback.style.display = "flex";
      divback.style.justifyContent = "center";
      divback.style.alignItems = "center";

      const back = document.createElement("button");
      back.style.width = "8vw";
      back.style.border = "none";
      back.style.height = "2vw";
      back.style.backgroundColor = "rgb(255, 149, 0)";
      back.style.color = "wheat";
      back.style.fontSize = "1.5vw";
      back.style.borderRadius = "4px";
      back.innerHTML = "Back";

      divback.appendChild(back);
      bigContainer.appendChild(divback);
      back.addEventListener("click", () => {
        divback.style.display = "none";
        divnext.style.display = "none";
        changepassdiv.style.display = "none";
        changepassconfdiv.style.display = "none";
        document.getElementById("signp").innerHTML = "Sign In";
        document.getElementById("logindiv").style.display = "flex";
        document.getElementById("gmaildiv").style.display = "flex";
        document.getElementById("passworddiv").style.display = "flex";
        document.getElementById("forgetpassworddiv").style.display = "flex";
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      });
      next.addEventListener("click", () => {
        const pass = inputchangepass.value;
        if (
          inputchangepass.value === inputchangeconfpass.value &&
          inputchangepass.value.length >= 8
        ) {
          divback.style.display = "none";
          divnext.style.display = "none";
          changepassdiv.style.display = "none";
          changepassconfdiv.style.display = "none";
          document.getElementById("signlogin").style.display = "none";
          const verificationdiv = document.createElement("div");
          verificationdiv.style.gridArea = "5/5/6/9";
          verificationdiv.style.display = "flex";
          verificationdiv.style.flexDirection = "column";
          verificationdiv.style.justifyContent = "center";
          verificationdiv.style.alignItems = "center";
          const verificationP1 = document.createElement("p");
          verificationP1.innerHTML = "A verification code is";
          verificationP1.style.fontSize = "2vw";
          const verificationP2 = document.createElement("p");
          verificationP2.innerHTML = "sent to your email";
          verificationP2.style.fontSize = "2vw";

          verificationdiv.appendChild(verificationP1);
          verificationdiv.appendChild(verificationP2);
          bigContainer.appendChild(verificationdiv);
          const inputdiv = document.createElement("div");
          inputdiv.style.gridArea = "6/6/7/8";
          inputdiv.style.display = "flex";
          inputdiv.style.justifyContent = "center";
          inputdiv.style.alignItems = "center";

          const inputver = document.createElement("input");
          inputver.type = "text";
          inputver.maxLength = "4";
          inputver.style.paddingLeft = "3vw";
          inputver.style.border = "2px solid black";
          inputver.style.backgroundColor = "wheat";
          inputver.style.width = "8vw";
          inputver.style.height = "3vw";
          inputver.placeholder = "1234";
          inputver.style.fontSize = "2vw";

          inputdiv.appendChild(inputver);
          bigContainer.appendChild(inputdiv);
          const verbuttondiv = document.createElement("div");
          verbuttondiv.style.gridArea = "7/6/8/8";
          verbuttondiv.style.display = "flex";
          verbuttondiv.style.justifyContent = "center";
          verbuttondiv.style.alignItems = "center";
          const verbutton = document.createElement("button");
          verbutton.style.width = "8vw";
          verbutton.style.border = "none";
          verbutton.style.height = "3vw";
          verbutton.style.backgroundColor = "rgb(255, 149, 0)";
          verbutton.style.color = "wheat";
          verbutton.style.fontSize = "2vw";
          verbutton.style.borderRadius = "4px";
          verbutton.innerHTML = "Verify";
          verbuttondiv.appendChild(verbutton);
          bigContainer.appendChild(verbuttondiv);
          verbutton.addEventListener("click", () => {
            if (inputver.value.length == 4) {
              sessionStorage.setItem("password", pass);
              verbuttondiv.style.display = "none";
              verificationdiv.style.display = "none";
              inputver.style.display = "none";

              const returndiv = document.createElement("div");
              returndiv.style.gridArea = "5/6/6/8";
              returndiv.style.display = "flex";
              returndiv.style.flexDirection = "column";
              returndiv.style.justifyContent = "center";
              returndiv.style.alignItems = "center";
              const returnP = document.createElement("p");
              returnP.style.fontSize = "2vw";
              returnP.innerHTML = "Password Changed !";
              returndiv.appendChild(returnP);
              bigContainer.appendChild(returndiv);
              const buttondiv = document.createElement("div");
              buttondiv.style.gridArea = "7/6/8/8";
              buttondiv.style.display = "flex";
              buttondiv.style.justifyContent = "center";
              buttondiv.style.alignItems = "center";
              const button1 = document.createElement("button");
              button1.style.width = "14vw";
              button1.style.border = "none";
              button1.style.height = "4vw";
              button1.style.backgroundColor = "rgb(255, 149, 0)";
              button1.style.color = "wheat";
              button1.style.fontSize = "1.8vw";
              button1.style.borderRadius = "4px";
              button1.innerHTML = "Return To Login";
              buttondiv.appendChild(button1);
              bigContainer.appendChild(buttondiv);
              button1.addEventListener("click", () => {
                buttondiv.style.display = "none";
                returndiv.style.display = "none";

                document.getElementById("signp").innerHTML = "Sign In";
                document.getElementById("logindiv").style.display = "flex";
                document.getElementById("gmaildiv").style.display = "flex";
                document.getElementById("passworddiv").style.display = "flex";
                document.getElementById("forgetpassworddiv").style.display =
                  "flex";
                document.getElementById("gmail").value = "";
                document.getElementById("password").value = "";
              });
            } else {
              alert("verification failed try again");
            }
          });
        } else {
          alert("Something went wrong");
        }
      });
    } else {
      const signlogin = document.getElementById("signlogin");
      signlogin.style.gridArea = "7/5/8/9";
      signlogin.style.display = "flex";
      signlogin.style.justifyContent = "center";
      signlogin.style.alignItems = "center";

      document.getElementById("signp").innerHTML = "Change Password";
      document.getElementById("logindiv").style.display = "none";
      document.getElementById("gmaildiv").style.display = "none";
      document.getElementById("passworddiv").style.display = "none";
      document.getElementById("forgetpassworddiv").style.display = "none";
      document.getElementById("gmail").value = "";
      document.getElementById("password").value = "";
      document.getElementById("signp").style.display = "block";
      document.getElementById("signp").style.fontWeight = "bold";
      const changepassdiv = document.createElement("div");
      changepassdiv.id = "changepassdiv";
      changepassdiv.style.gridArea = "8/4/10/10";
      changepassdiv.style.display = "flex";
      changepassdiv.style.flexDirection = "column";
      changepassdiv.style.justifyContent = "center";
      changepassdiv.style.alignItems = "center";

      const labelchangepass = document.createElement("label");
      labelchangepass.innerHTML = "New Password: ";
      labelchangepass.style.fontSize = "4vw";
      labelchangepass.style.fontWeight = "bold";
      labelchangepass.style.marginTop = "1.5vw";

      const inputchangepass = document.createElement("input");
      inputchangepass.type = "password";
      inputchangepass.style.width = "48vw";
      inputchangepass.placeholder = "8 characters and above";
      inputchangepass.style.height = "4vw";
      inputchangepass.style.backgroundColor = "wheat";
      inputchangepass.style.paddingLeft = "0.2vw";
      inputchangepass.style.marginTop = "2vw";
      inputchangepass.style.border = "1px solid black";

      changepassdiv.appendChild(labelchangepass);
      changepassdiv.appendChild(inputchangepass);
      bigContainer.appendChild(changepassdiv);
      const changepassconfdiv = document.createElement("div");
      changepassconfdiv.id = "changepassdiv";
      changepassconfdiv.style.gridArea = "10/4/12/10";
      changepassconfdiv.style.display = "flex";
      changepassconfdiv.style.flexDirection = "column";
      changepassconfdiv.style.justifyContent = "center";
      changepassconfdiv.style.alignItems = "center";

      const labelchangepassconf = document.createElement("label");
      labelchangepassconf.innerHTML = "Confirm Password : ";
      labelchangepassconf.style.fontSize = "4vw";
      labelchangepassconf.style.fontWeight = "bold";
      labelchangepassconf.style.marginTop = "1.5vw";

      const inputchangepassconf = document.createElement("input");
      inputchangepassconf.type = "password";
      inputchangepassconf.style.width = "48vw";
      inputchangepassconf.placeholder = "Re-enter the password";
      inputchangepassconf.style.height = "4vw";
      inputchangepassconf.style.backgroundColor = "wheat";
      inputchangepassconf.style.paddingLeft = "0.2vw";
      inputchangepassconf.style.marginTop = "2vw";
      inputchangepassconf.style.border = "1px solid black";

      changepassconfdiv.appendChild(labelchangepassconf);
      changepassconfdiv.appendChild(inputchangepassconf);
      bigContainer.appendChild(changepassconfdiv);

      const divnext = document.createElement("div");
      divnext.style.gridArea = "12/8/13/10";
      divnext.style.display = "flex";
      divnext.style.justifyContent = "center";
      divnext.style.alignItems = "center";

      const next = document.createElement("button");
      next.style.width = "12vw";
      next.style.border = "none";
      next.style.height = "4vw";
      next.style.backgroundColor = "rgb(255, 149, 0)";
      next.style.color = "wheat";
      next.style.fontSize = "2vw";
      next.style.borderRadius = "4px";
      next.innerHTML = "Next";

      divnext.appendChild(next);
      bigContainer.appendChild(divnext);
      const divback = document.createElement("div");
      divback.style.gridArea = "12/4/13/6";
      divback.style.display = "flex";
      divback.style.justifyContent = "center";
      divback.style.alignItems = "center";

      const back = document.createElement("button");
      back.style.width = "12vw";
      back.style.border = "none";
      back.style.height = "4vw";
      back.style.backgroundColor = "rgb(255, 149, 0)";
      back.style.color = "wheat";
      back.style.fontSize = "2vw";
      back.style.borderRadius = "4px";
      back.innerHTML = "Back";

      divback.appendChild(back);
      bigContainer.appendChild(divback);
      back.addEventListener("click", () => {
        divback.style.display = "none";
        divnext.style.display = "none";
        changepassdiv.style.display = "none";
        changepassconfdiv.style.display = "none";
        document.getElementById("signp").innerHTML = "Sign In";
        document.getElementById("logindiv").style.display = "flex";
        document.getElementById("gmaildiv").style.display = "flex";
        document.getElementById("passworddiv").style.display = "flex";
        document.getElementById("forgetpassworddiv").style.display = "flex";
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      });
      next.addEventListener("click", () => {
        const pass = inputchangepass.value;
        if (
          inputchangepass.value === inputchangepassconf.value &&
          inputchangepass.value.length >= 8
        ) {
          divback.style.display = "none";
          divnext.style.display = "none";
          changepassdiv.style.display = "none";
          changepassconfdiv.style.display = "none";
          document.getElementById("signlogin").style.display = "none";
          const verificationdiv = document.createElement("div");
          verificationdiv.style.gridArea = "7/3/9/11";
          verificationdiv.style.display = "flex";
          verificationdiv.style.flexDirection = "column";
          verificationdiv.style.justifyContent = "center";
          verificationdiv.style.alignItems = "center";
          const verificationP1 = document.createElement("p");
          verificationP1.innerHTML = "A verification code is";
          const verificationP2 = document.createElement("p");
          verificationP2.innerHTML = "sent to your email";

          verificationdiv.appendChild(verificationP1);
          verificationdiv.appendChild(verificationP2);
          bigContainer.appendChild(verificationdiv);
          const inputdiv = document.createElement("div");
          inputdiv.style.gridArea = "9/6/10/8";
          inputdiv.style.display = "flex";
          inputdiv.style.justifyContent = "center";
          inputdiv.style.alignItems = "center";

          const inputver = document.createElement("input");
          inputver.type = "text";
          inputver.maxLength = "4";
          inputver.style.paddingLeft = "5vw";
          inputver.style.border = "2px solid black";
          inputver.style.backgroundColor = "wheat";
          inputver.style.width = "12vw";
          inputver.style.height = "3vw";
          inputver.placeholder = "1234";

          inputdiv.appendChild(inputver);
          bigContainer.appendChild(inputdiv);
          const verbuttondiv = document.createElement("div");
          verbuttondiv.style.gridArea = "10/6/12/8";
          verbuttondiv.style.display = "flex";
          verbuttondiv.style.justifyContent = "center";
          verbuttondiv.style.alignItems = "center";
          const verbutton = document.createElement("button");
          verbutton.style.width = "12vw";
          verbutton.style.border = "none";
          verbutton.style.height = "4vw";
          verbutton.style.backgroundColor = "rgb(255, 149, 0)";
          verbutton.style.color = "wheat";
          verbutton.style.fontSize = "2vw";
          verbutton.style.borderRadius = "4px";
          verbutton.innerHTML = "Verify";
          verbuttondiv.appendChild(verbutton);
          bigContainer.appendChild(verbuttondiv);
          verbutton.addEventListener("click", () => {
            if (inputver.value.length == 4) {
              sessionStorage.setItem("password", pass);
              verbuttondiv.style.display = "none";
              verificationdiv.style.display = "none";
              inputver.style.display = "none";

              const returndiv = document.createElement("div");
              returndiv.style.gridArea = "7/3/9/11";
              returndiv.style.display = "flex";
              returndiv.style.flexDirection = "column";
              returndiv.style.justifyContent = "center";
              returndiv.style.alignItems = "center";
              const returnP = document.createElement("p");
              returnP.style.fontSize = "4vw";
              returnP.innerHTML = "Password Changed !";
              returndiv.appendChild(returnP);
              bigContainer.appendChild(returndiv);
              const buttondiv = document.createElement("div");
              buttondiv.style.gridArea = "10/6/12/8";
              buttondiv.style.display = "flex";
              buttondiv.style.justifyContent = "center";
              buttondiv.style.alignItems = "center";
              const button1 = document.createElement("button");
              button1.style.width = "14vw";
              button1.style.border = "none";
              button1.style.height = "4vw";
              button1.style.backgroundColor = "rgb(255, 149, 0)";
              button1.style.color = "wheat";
              button1.style.fontSize = "1.8vw";
              button1.style.borderRadius = "4px";
              button1.innerHTML = "Return To Login";
              buttondiv.appendChild(button1);
              bigContainer.appendChild(buttondiv);
              button1.addEventListener("click", () => {
                buttondiv.style.display = "none";
                returndiv.style.display = "none";

                document.getElementById("signp").innerHTML = "Sign In";
                document.getElementById("logindiv").style.display = "flex";
                document.getElementById("gmaildiv").style.display = "flex";
                document.getElementById("passworddiv").style.display = "flex";
                document.getElementById("forgetpassworddiv").style.display =
                  "flex";
                document.getElementById("gmail").value = "";
                document.getElementById("password").value = "";
              });
            } else {
              alert("verification failed try again");
            }
          });
        } else {
          alert("Something went wrong");
        }
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const bigContainer = document.getElementsByClassName("bigcontainer")[0];
  const mediaquer2 = window.matchMedia("(max-width: 767px)");
  const loginbutton = document.getElementById("login");

  loginbutton.addEventListener("click", () => {
    const password = document.getElementById("password").value;
    const gmail = document.getElementById("gmail").value;
    const passworduser = sessionStorage.getItem("password");
    const gmailuser = sessionStorage.getItem("gmail");

    if (mediaquer2.matches) {
      //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      if (password === passworduser && gmail === gmailuser) {
        document.getElementById("signp").innerHTML = "Book Here";
        document.getElementById("signlogin").style.display = "flex";
        document.getElementById("signlogin").style.gridArea = "7/5/8/9";
        document.getElementById("logindiv").style.display = "none";
        document.getElementById("gmaildiv").style.display = "none";
        document.getElementById("passworddiv").style.display = "none";
        document.getElementById("forgetpassworddiv").style.display = "none";
        document.getElementsByClassName("subbigcontainer")[0].style.gridArea =
          "2/3/15/11";
        // Full Name input
        const div1 = document.createElement("div");
        div1.style.gridArea = "8/4/9/10";
        div1.style.display = "flex";
        div1.style.flexDirection = "column";
        div1.style.justifyContent = "center";
        div1.style.alignItems = "center";

        const labelFullName = document.createElement("label");
        labelFullName.innerHTML = "Full Name : ";
        labelFullName.style.fontSize = "3vw";
        labelFullName.style.fontWeight = "bold";
        labelFullName.style.marginTop = "1.5vw";

        const inputFullName = document.createElement("input");
        inputFullName.type = "text";
        inputFullName.style.backgroundColor = "wheat";
        inputFullName.style.width = "30vw";
        inputFullName.style.marginTop = "1vw";
        inputFullName.style.height = "4vw";
        inputFullName.style.border = "1px solid black";
        inputFullName.style.fontSize = "2vw";
        inputFullName.style.paddingLeft = "1vw";
        div1.appendChild(labelFullName);
        div1.appendChild(inputFullName);
        bigContainer.appendChild(div1);

        // Phone input
        const div2 = document.createElement("div");
        div2.style.gridArea = "9/4/10/10";
        div2.style.display = "flex";
        div2.style.flexDirection = "column";
        div2.style.justifyContent = "center";
        div2.style.alignItems = "center";

        const labelPhone = document.createElement("label");
        labelPhone.innerHTML = "Phone : ";
        labelPhone.style.fontSize = "3vw";
        labelPhone.style.fontWeight = "bold";
        labelPhone.style.marginTop = "1.5vw";

        const inputPhone = document.createElement("input");
        inputPhone.type = "text";
        inputPhone.value = "+961";
        inputPhone.style.backgroundColor = "wheat";
        inputPhone.style.width = "30vw";
        inputPhone.style.marginTop = "1vw";
        inputPhone.style.height = "4vw";
        inputPhone.style.border = "1px solid black";
        inputPhone.style.fontSize = "2vw";
        inputPhone.style.paddingLeft = "1vw";
        div2.appendChild(labelPhone);
        div2.appendChild(inputPhone);
        bigContainer.appendChild(div2);

        // Seats Required input
        const div3 = document.createElement("div");
        div3.style.gridArea = "10/4/11/10";
        div3.style.display = "flex";
        div3.style.flexDirection = "column";
        div3.style.justifyContent = "center";
        div3.style.alignItems = "center";

        const labelNUM = document.createElement("label");
        labelNUM.innerHTML = "Seats Required : ";
        labelNUM.style.fontSize = "3vw";
        labelNUM.style.fontWeight = "bold";
        labelNUM.style.marginTop = "1.5vw";

        const inputNUM = document.createElement("input");
        inputNUM.type = "text";
        inputNUM.placeholder = "Number of Seats";
        inputNUM.style.backgroundColor = "wheat";
        inputNUM.style.width = "30vw";
        inputNUM.style.marginTop = "1vw";
        inputNUM.style.height = "4vw";
        inputNUM.style.border = "1px solid black";
        inputNUM.style.fontSize = "2vw";
        inputNUM.style.paddingLeft = "1vw";
        div3.appendChild(labelNUM);
        div3.appendChild(inputNUM);
        bigContainer.appendChild(div3);

        // Date input
        const div4 = document.createElement("div");
        div4.style.gridArea = "11/4/12/10";
        div4.style.display = "flex";
        div4.style.flexDirection = "column";
        div4.style.justifyContent = "center";
        div4.style.alignItems = "center";

        const labelDate = document.createElement("label");
        labelDate.innerHTML = "Date : ";
        labelDate.style.fontSize = "3vw";
        labelDate.style.fontWeight = "bold";
        labelDate.style.marginTop = "1.5vw";

        const inputDATE = document.createElement("input");
        inputDATE.type = "date";
        inputDATE.style.backgroundColor = "wheat";
        inputDATE.style.width = "30vw";
        inputDATE.style.marginTop = "1vw";
        inputDATE.style.height = "4vw";
        inputDATE.style.border = "1px solid black";
        inputDATE.style.fontSize = "2vw";
        inputDATE.style.paddingLeft = "1vw";
        div4.appendChild(labelDate);
        div4.appendChild(inputDATE);
        bigContainer.appendChild(div4);

        // Time input
        const div5 = document.createElement("div");
        div5.style.gridArea = "12/4/13/10";
        div5.style.display = "flex";
        div5.style.flexDirection = "column";
        div5.style.justifyContent = "center";
        div5.style.alignItems = "center";

        const labelTime = document.createElement("label");
        labelTime.innerHTML = "Time : ";
        labelTime.style.fontSize = "3vw";
        labelTime.style.fontWeight = "bold";
        labelTime.style.marginTop = "1.5vw";

        const inputTime = document.createElement("input");
        inputTime.type = "time";
        inputTime.style.backgroundColor = "wheat";
        inputTime.style.width = "30vw";
        inputTime.style.marginTop = "1vw";
        inputTime.style.height = "4vw";
        inputTime.style.border = "1px solid black";
        inputTime.style.fontSize = "2vw";
        inputTime.style.paddingLeft = "1vw";
        div5.appendChild(labelTime);
        div5.appendChild(inputTime);
        bigContainer.appendChild(div5);

        // Submit button
        const div6 = document.createElement("div");
        div6.style.gridArea = "13/6/14/8";
        div6.style.display = "flex";
        div6.style.flexDirection = "column";
        div6.style.justifyContent = "center";
        div6.style.alignItems = "center";

        const button = document.createElement("button");
        button.style.width = "12vw";
        button.style.border = "none";
        button.style.height = "4vw";
        button.style.backgroundColor = "rgb(255, 149, 0)";
        button.style.color = "wheat";
        button.style.fontSize = "2vw";
        button.style.borderRadius = "4px";
        button.innerHTML = "Book";
        div6.appendChild(button);
        bigContainer.appendChild(div6);

        button.addEventListener("click", () => {
          if (
            inputFullName.value != "" &&
            inputPhone.value != "" &&
            inputNUM.value != "" &&
            inputDATE.value != "" &&
            inputTime.value != ""
          ) {
            document.getElementsByClassName(
              "subbigcontainer"
            )[0].style.gridArea = "2/3/15/11";
            const fullname = inputFullName.value;
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
            div5.style.display = "none";
            div6.style.display = "none";

            const divwelcome = document.createElement("div");
            divwelcome.style.gridArea = "7/4/12/10";
            divwelcome.style.display = "flex";
            divwelcome.style.flexDirection = "column";
            divwelcome.style.justifyContent = "center";
            divwelcome.style.alignItems = "center";

            const returnP = document.createElement("p");
            returnP.style.fontSize = "3vw";
            returnP.innerHTML = `Here's a friendly welcome message you can use for a customer who has booked at Pizzaliano: Welcome to Pizzaliano! 🍕✨ Thank you, ${fullname}, for booking with us! We’re thrilled to have you join us for a delicious dining experience filled with our authentic, hand-crafted pizzas and Italian specialties. Your table is reserved, and we can’t wait to serve you! Buon Appetito!`;

            divwelcome.appendChild(returnP);
            bigContainer.appendChild(divwelcome);

            const divhome = document.createElement("div");
            divhome.style.gridArea = "12/4/13/10";

            divhome.style.display = "flex";
            divhome.style.flexDirection = "column";
            divhome.style.justifyContent = "center";
            divhome.style.alignItems = "center";
            document.getElementById("signp").style.display = "none";
            const button2 = document.createElement("button");
            button2.style.width = "16vw";
            button2.style.border = "none";
            button2.style.height = "4vw";
            button2.style.backgroundColor = "rgb(255, 149, 0)";
            button2.style.color = "wheat";
            button2.style.fontSize = "2vw";
            button2.style.borderRadius = "4px";
            button2.innerHTML = "Back Home";
            divhome.appendChild(button2);
            bigContainer.appendChild(divhome);
            button2.addEventListener("click", () => {
              window.location.href = "index.html";
            });
          } else {
            alert("Something Missing");
          }
        });
      } else {
        alert("Incorrect email or password");
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      }
    } else {
      // Desktop layout
      if (password === passworduser && gmail === gmailuser) {
        document.getElementById("signp").innerHTML = "Book Here";
        document.getElementById("logindiv").style.display = "none";
        document.getElementById("gmaildiv").style.display = "none";
        document.getElementById("passworddiv").style.display = "none";
        document.getElementById("forgetpassworddiv").style.display = "none";
        document.getElementsByClassName("subbigcontainer")[0].style.gridArea =
          "2/3/13/11";
        // Full Name input
        const div1 = document.createElement("div");
        div1.style.gridArea = "6/5/7/9";
        div1.style.display = "flex";
        div1.style.flexDirection = "column";
        div1.style.justifyContent = "center";
        div1.style.alignItems = "center";

        const labelFullName = document.createElement("label");
        labelFullName.innerHTML = "Full Name : ";
        labelFullName.style.fontSize = "2vw";
        labelFullName.style.fontWeight = "bold";
        labelFullName.style.marginTop = "1.5vw";

        const inputFullName = document.createElement("input");
        inputFullName.type = "text";
        inputFullName.style.backgroundColor = "wheat";
        inputFullName.style.width = "20vw";
        inputFullName.style.marginTop = "1vw";
        inputFullName.style.height = "2vw";
        inputFullName.style.border = "1px solid black";
        inputFullName.style.fontSize = "1vw";
        inputFullName.style.paddingLeft = "1vw";
        div1.appendChild(labelFullName);
        div1.appendChild(inputFullName);
        bigContainer.appendChild(div1);

        // Phone input
        const div2 = document.createElement("div");
        div2.style.gridArea = "7/5/8/9";
        div2.style.display = "flex";
        div2.style.flexDirection = "column";
        div2.style.justifyContent = "center";
        div2.style.alignItems = "center";

        const labelPhone = document.createElement("label");
        labelPhone.innerHTML = "Phone : ";
        labelPhone.style.fontSize = "2vw";
        labelPhone.style.fontWeight = "bold";
        labelPhone.style.marginTop = "1.5vw";

        const inputPhone = document.createElement("input");
        inputPhone.type = "text";
        inputPhone.value = "+961";
        inputPhone.style.backgroundColor = "wheat";
        inputPhone.style.width = "20vw";
        inputPhone.style.marginTop = "1vw";
        inputPhone.style.height = "2vw";
        inputPhone.style.border = "1px solid black";
        inputPhone.style.fontSize = "1vw";
        inputPhone.style.paddingLeft = "1vw";
        div2.appendChild(labelPhone);
        div2.appendChild(inputPhone);
        bigContainer.appendChild(div2);

        // Seats Required input
        const div3 = document.createElement("div");
        div3.style.gridArea = "8/5/9/9";
        div3.style.display = "flex";
        div3.style.flexDirection = "column";
        div3.style.justifyContent = "center";
        div3.style.alignItems = "center";

        const labelNUM = document.createElement("label");
        labelNUM.innerHTML = "Seats Required : ";
        labelNUM.style.fontSize = "2vw";
        labelNUM.style.fontWeight = "bold";
        labelNUM.style.marginTop = "1.5vw";

        const inputNUM = document.createElement("input");
        inputNUM.type = "text";
        inputNUM.placeholder = "Number of Seats";
        inputNUM.style.backgroundColor = "wheat";
        inputNUM.style.width = "20vw";
        inputNUM.style.marginTop = "1vw";
        inputNUM.style.height = "2vw";
        inputNUM.style.border = "1px solid black";
        inputNUM.style.fontSize = "1vw";
        inputNUM.style.paddingLeft = "1vw";
        div3.appendChild(labelNUM);
        div3.appendChild(inputNUM);
        bigContainer.appendChild(div3);

        // Date input
        const div4 = document.createElement("div");
        div4.style.gridArea = "9/5/10/9";
        div4.style.display = "flex";
        div4.style.flexDirection = "column";
        div4.style.justifyContent = "center";
        div4.style.alignItems = "center";

        const labelDate = document.createElement("label");
        labelDate.innerHTML = "Date : ";
        labelDate.style.fontSize = "2vw";
        labelDate.style.fontWeight = "bold";
        labelDate.style.marginTop = "1.5vw";

        const inputDATE = document.createElement("input");
        inputDATE.type = "date";
        inputDATE.style.backgroundColor = "wheat";
        inputDATE.style.width = "20vw";
        inputDATE.style.marginTop = "1vw";
        inputDATE.style.height = "2vw";
        inputDATE.style.border = "1px solid black";
        inputDATE.style.fontSize = "1vw";
        inputDATE.style.paddingLeft = "1vw";
        div4.appendChild(labelDate);
        div4.appendChild(inputDATE);
        bigContainer.appendChild(div4);

        // Time input
        const div5 = document.createElement("div");
        div5.style.gridArea = "10/5/11/9";
        div5.style.display = "flex";
        div5.style.flexDirection = "column";
        div5.style.justifyContent = "center";
        div5.style.alignItems = "center";

        const labelTime = document.createElement("label");
        labelTime.innerHTML = "Time : ";
        labelTime.style.fontSize = "2vw";
        labelTime.style.fontWeight = "bold";
        labelTime.style.marginTop = "1.5vw";

        const inputTime = document.createElement("input");
        inputTime.type = "time";
        inputTime.style.backgroundColor = "wheat";
        inputTime.style.width = "20vw";
        inputTime.style.marginTop = "1vw";
        inputTime.style.height = "2vw";
        inputTime.style.border = "1px solid black";
        inputTime.style.fontSize = "1vw";
        inputTime.style.paddingLeft = "1vw";
        div5.appendChild(labelTime);
        div5.appendChild(inputTime);
        bigContainer.appendChild(div5);

        // Submit button
        const div6 = document.createElement("div");
        div6.style.gridArea = "11/6/12/8";
        div6.style.display = "flex";
        div6.style.flexDirection = "column";
        div6.style.justifyContent = "center";
        div6.style.alignItems = "center";

        const button = document.createElement("button");
        button.style.width = "8vw";
        button.style.border = "none";
        button.style.height = "3vw";
        button.style.backgroundColor = "rgb(255, 149, 0)";
        button.style.color = "wheat";
        button.style.fontSize = "2vw";
        button.style.borderRadius = "4px";
        button.innerHTML = "Book";
        div6.appendChild(button);
        bigContainer.appendChild(div6);

        button.addEventListener("click", () => {
          if (
            inputFullName.value != "" &&
            inputPhone.value != "" &&
            inputNUM.value != "" &&
            inputDATE.value != "" &&
            inputTime.value != ""
          ) {
            document.getElementsByClassName(
              "subbigcontainer"
            )[0].style.gridArea = "2/3/11/11";
            const fullname = inputFullName.value;
            div1.style.display = "none";
            div2.style.display = "none";
            div3.style.display = "none";
            div4.style.display = "none";
            div5.style.display = "none";
            div6.style.display = "none";

            const divwelcome = document.createElement("div");
            divwelcome.style.gridArea = "5/5/9/9";
            divwelcome.style.display = "flex";
            divwelcome.style.flexDirection = "column";
            divwelcome.style.justifyContent = "center";
            divwelcome.style.alignItems = "center";

            const returnP = document.createElement("p");
            returnP.style.fontSize = "2vw";
            returnP.innerHTML = `Here's a friendly welcome message you can use for a customer who has booked at Pizzaliano: Welcome to Pizzaliano! 🍕✨ Thank you, ${fullname}, for booking with us! We’re thrilled to have you join us for a delicious dining experience filled with our authentic, hand-crafted pizzas and Italian specialties. Your table is reserved, and we can’t wait to serve you! Buon Appetito!`;

            divwelcome.appendChild(returnP);
            bigContainer.appendChild(divwelcome);

            const divhome = document.createElement("div");
            divhome.style.gridArea = "9/6/10/8";

            divhome.style.display = "flex";
            divhome.style.flexDirection = "column";
            divhome.style.justifyContent = "center";
            divhome.style.alignItems = "center";
            document.getElementById("signp").style.display = "none";
            const button2 = document.createElement("button");
            button2.style.width = "14vw";
            button2.style.border = "none";
            button2.style.height = "3vw";
            button2.style.backgroundColor = "rgb(255, 149, 0)";
            button2.style.color = "wheat";
            button2.style.fontSize = "2vw";
            button2.style.borderRadius = "4px";
            button2.innerHTML = "Back Home";
            divhome.appendChild(button2);
            bigContainer.appendChild(divhome);
            button2.addEventListener("click", () => {
              window.location.href = "index.html";
            });
          } else {
            alert("Something Missing");
          }
        });
      } else {
        alert("Incorrect email or password");
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      }
    }
  });
});
