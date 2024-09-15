document.addEventListener("DOMContentLoaded", () => {
  const mediaquer = window.matchMedia("(max-width: 767px)");
  const createAccount = document.getElementById("createaccount");

  createAccount.addEventListener("click", () => {
    document.getElementById("signp").innerHTML = "Sign Up";
    document.getElementById("signp").style.fontWeight = "bold";
    document.getElementById("logindiv").style.display = "none";
    document.getElementById("formgmail").style.display = "none";
    document.getElementById("formpassword").style.display = "none";
    document.getElementById("forgetpassworddiv").style.display = "none";
    const divFirstName = document.createElement("div");
    const divLastName = document.createElement("div");

    if (mediaquer.matches) {
      document.getElementById("signp").style.fontSize = "4vw";
      divFirstName.style.gridArea = "8/4/10/7";
      divFirstName.style.display = "flex";
      divFirstName.style.flexDirection = "column";
      divFirstName.style.alignItems = "center";
      divFirstName.style.justifyContent = "center";
      const labelFirstName = document.createElement("label");
      labelFirstName.innerHTML = "First Name:";
      labelFirstName.style.fontSize = "3vw";
      labelFirstName.style.fontWeight = "bold";
      labelFirstName.style.marginTop = "1.5vw";
      const inputFirstName = document.createElement("input");
      inputFirstName.type = "text";
      inputFirstName.placeholder = "Enter your first name";
      inputFirstName.id = "firstname";
      inputFirstName.style.backgroundColor = "wheat";
      inputFirstName.style.width = "20vw";
      inputFirstName.style.marginTop = "2vw";
      inputFirstName.style.height = "4vw";
      inputFirstName.style.border = "1px solid black";
      inputFirstName.style.fontSize = "2vw";
      inputFirstName.style.paddingLeft = "1vw";
      divFirstName.appendChild(labelFirstName);
      divFirstName.appendChild(inputFirstName);
      const bigContainer = document.getElementsByClassName("bigcontainer")[0];
      bigContainer.appendChild(divFirstName);
      //div2
      divLastName.style.gridArea = "8/7/10/10";
      divLastName.style.display = "flex";
      divLastName.style.flexDirection = "column";
      divLastName.style.alignItems = "center";
      divLastName.style.justifyContent = "center";

      const labelLastName = document.createElement("label");
      labelLastName.innerHTML = "Last Name:";
      labelLastName.style.fontSize = "3vw";
      labelLastName.style.fontWeight = "bold";
      labelLastName.style.marginTop = "1.5vw";

      const inputLastName = document.createElement("input");
      inputLastName.type = "text";
      inputLastName.placeholder = "Enter your last name";
      inputLastName.id = "lastname";
      inputLastName.style.backgroundColor = "wheat";
      inputLastName.style.width = "20vw";
      inputLastName.style.marginTop = "2vw";
      inputLastName.style.height = "4vw";
      inputLastName.style.border = "1px solid black";
      inputLastName.style.fontSize = "2vw";
      inputLastName.style.paddingLeft = "1vw";

      divLastName.appendChild(labelLastName);
      divLastName.appendChild(inputLastName);
      bigContainer.appendChild(divLastName);
      //birthday

      const birthdaydiv = document.createElement("div");
      birthdaydiv.style.gridArea = "10/4/12/7";
      birthdaydiv.style.display = "flex";
      birthdaydiv.style.flexDirection = "column";
      birthdaydiv.style.alignItems = "center";
      birthdaydiv.style.justifyContent = "center";
      const labelbirthday = document.createElement("label");
      labelbirthday.innerHTML = "Birthday : ";
      labelbirthday.style.fontSize = "3vw";
      labelbirthday.style.fontWeight = "bold";
      labelbirthday.style.marginTop = "1.5vw";

      const inputbirthday = document.createElement("input");
      inputbirthday.type = "text";
      inputbirthday.placeholder = "DD / MM / YY ";
      inputbirthday.id = "birthday";
      inputbirthday.style.backgroundColor = "wheat";
      inputbirthday.style.width = "20vw";
      inputbirthday.style.marginTop = "1vw";
      inputbirthday.style.height = "4vw";
      inputbirthday.style.border = "1px solid black";
      inputbirthday.style.fontSize = "2vw";
      inputbirthday.style.paddingLeft = "2vw";
      birthdaydiv.appendChild(labelbirthday);
      birthdaydiv.appendChild(inputbirthday);
      bigContainer.appendChild(birthdaydiv);
      //phone
      const divphone = document.createElement("div");
      divphone.style.gridArea = "10/7/12/10";
      divphone.style.display = "flex";
      divphone.style.flexDirection = "column";
      divphone.style.justifyContent = "center";
      divphone.style.alignItems = "center";
      const labelphone = document.createElement("label");
      labelphone.innerHTML = "Phone : ";
      labelphone.style.fontSize = "3vw";
      labelphone.style.fontWeight = "bold";
      labelphone.style.marginTop = "1.5vw";
      const inputphone = document.createElement("input");
      inputphone.type = "text";
      inputphone.placeholder = "DD / MM / YY ";
      inputphone.id = "birthday";
      inputphone.style.backgroundColor = "wheat";
      inputphone.style.width = "20vw";
      inputphone.style.marginTop = "1vw";
      inputphone.style.height = "4vw";
      inputphone.style.border = "1px solid black";
      inputphone.style.fontSize = "2vw";
      inputphone.style.paddingLeft = "2vw";
      inputphone.value = "+961 ";

      divphone.appendChild(labelphone);
      divphone.appendChild(inputphone);
      bigContainer.appendChild(divphone);
      //buttonnext
      const divnext = document.createElement("div");
      divnext.style.gridArea = "12/7/13/10";
      divnext.style.display = "flex";
      divnext.style.flexDirection = "column";
      divnext.style.justifyContent = "center";
      divnext.style.alignItems = "center";

      const buttonnext = document.createElement("button");
      buttonnext.style.width = "12vw";
      buttonnext.style.border = "none";
      buttonnext.style.height = "4vw";
      buttonnext.style.backgroundColor = "rgb(255, 149, 0)";
      buttonnext.style.color = "wheat";
      buttonnext.style.fontSize = "2vw";
      buttonnext.style.borderRadius = "4px";
      buttonnext.innerHTML = "Next";
      divnext.appendChild(buttonnext);
      bigContainer.appendChild(divnext);
      //buttomback
      const divback = document.createElement("div");
      divback.style.gridArea = "12/4/13/7";
      divback.style.display = "flex";
      divback.style.flexDirection = "column";
      divback.style.justifyContent = "center";
      divback.style.alignItems = "center";
      bigContainer.appendChild(divback);
      const buttonback = document.createElement("button");
      buttonback.style.width = "12vw";
      buttonback.style.border = "none";
      buttonback.style.height = "4vw";
      buttonback.style.backgroundColor = "rgb(255, 149, 0)";
      buttonback.style.color = "wheat";
      buttonback.style.fontSize = "2vw";
      buttonback.style.borderRadius = "4px";
      buttonback.innerHTML = "Back";
      divback.appendChild(buttonback);
      bigContainer.appendChild(divback);

      buttonback.addEventListener("click", () => {
        divFirstName.style.display = "none";
        divLastName.style.display = "none";
        birthdaydiv.style.display = "none";
        divphone.style.display = "none";
        divback.style.display = "none";
        divnext.style.display = "none";
        document.getElementById("signp").innerHTML = "Sign In ";
        document.getElementById("logindiv").style.display = "flex";
        document.getElementById("formgmail").style.display = "flex";
        document.getElementById("formpassword").style.display = "flex";
        document.getElementById("forgetpassworddiv").style.display = "flex";
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      });
      buttonnext.addEventListener("click", () => {
        if (
          inputFirstName.value !== "" &&
          inputLastName.vlue !== "" &&
          inputbirthday.valu !== "" &&
          inputphone !== ""
        ) {
          divnext.style.display = "none";
          divback.style.display = "none";
          divFirstName.style.display = "none";
          divLastName.style.display = "none";
          birthdaydiv.style.display = "none";
          divphone.style.display = "none";

          const divgmail = document.createElement("div");
          divgmail.style.gridArea = "8/4/10/10";
          divgmail.style.display = "flex";
          divgmail.style.flexDirection = "column";
          divgmail.style.justifyContent = "center";
          divgmail.style.alignItems = "center";
          divgmail.id = "divgmail";

          const labelgmail = document.createElement("label");
          labelgmail.innerHTML = "Gmail: ";
          labelgmail.style.fontSize = "4vw";
          labelgmail.style.fontWeight = "bold";
          labelgmail.style.marginTop = "1.5vw";

          const inputgmail = document.createElement("input");
          inputgmail.type = "text";
          inputgmail.style.width = "48vw";
          inputgmail.placeholder = "example@gmail.com";
          inputgmail.style.height = "4vw";
          inputgmail.style.backgroundColor = "wheat";
          inputgmail.style.paddingLeft = "0.2vw";
          inputgmail.style.marginTop = "2vw";
          inputgmail.style.border = "1px solid black";
          inputgmail.style.fontSize = "2vw";
          divgmail.appendChild(labelgmail);
          divgmail.appendChild(inputgmail);
          bigContainer.appendChild(divgmail);

          // Create Password input section
          const divpass = document.createElement("div");
          divpass.style.gridArea = "10/4/12/10";
          divpass.style.display = "flex";
          divpass.style.flexDirection = "column";
          divpass.style.justifyContent = "center";
          divpass.style.alignItems = "center";
          divpass.id = "divpass";

          const labelpass = document.createElement("label");
          labelpass.innerHTML = "Password: ";
          labelpass.style.fontSize = "4vw";
          labelpass.style.fontWeight = "bold";
          labelpass.style.marginTop = "1.5vw";

          const inputpass = document.createElement("input");
          inputpass.type = "password";
          inputpass.style.width = "48vw";
          inputpass.placeholder = "Enter 8 digit password or more";
          inputpass.style.height = "4vw";
          inputpass.style.backgroundColor = "wheat";
          inputpass.style.paddingLeft = "0.2vw";
          inputpass.style.marginTop = "2vw";
          inputpass.style.border = "1px solid black";
          inputpass.style.fontSize = "2vw";
          divpass.appendChild(labelpass);
          divpass.appendChild(inputpass);
          bigContainer.appendChild(divpass);

          const divpasscomfim = document.createElement("div");
          divpasscomfim.style.gridArea = "12/4/14/10";
          divpasscomfim.style.display = "flex";
          divpasscomfim.style.flexDirection = "column";
          divpasscomfim.style.justifyContent = "center";
          divpasscomfim.style.alignItems = "center";
          divpasscomfim.id = "divpassconfirm";

          const labelpassconfirm = document.createElement("label");
          labelpassconfirm.innerHTML = "Password Confirm: ";
          labelpassconfirm.style.fontSize = "4vw";
          labelpassconfirm.style.fontWeight = "bold";
          labelpassconfirm.style.marginTop = "1.5vw";

          const inputpassconfirm = document.createElement("input");
          inputpassconfirm.type = "password";
          inputpassconfirm.style.width = "48vw";
          inputpassconfirm.placeholder = "Re-enter the password";
          inputpassconfirm.style.height = "4vw";
          inputpassconfirm.style.backgroundColor = "wheat";
          inputpassconfirm.style.paddingLeft = "0.2vw";
          inputpassconfirm.style.marginTop = "2vw";
          inputpassconfirm.style.border = "1px solid black";
          inputpassconfirm.style.fontSize = "2vw";
          divpasscomfim.appendChild(labelpassconfirm);
          divpasscomfim.appendChild(inputpassconfirm);
          bigContainer.appendChild(divpasscomfim);

          const divnext2 = document.createElement("div");
          divnext2.style.gridArea = "14/8/15/10";
          divnext2.style.display = "flex";
          divnext2.style.justifyContent = "center";
          divnext2.style.alignItems = "center";

          const next2 = document.createElement("button");
          next2.style.width = "12vw";
          next2.style.border = "none";
          next2.style.height = "4vw";
          next2.style.backgroundColor = "rgb(255, 149, 0)";
          next2.style.color = "wheat";
          next2.style.fontSize = "2vw";
          next2.style.borderRadius = "4px";
          next2.innerHTML = "Next";

          divnext2.appendChild(next2);
          bigContainer.appendChild(divnext2);

          const divback2 = document.createElement("div");
          divback2.style.gridArea = "14/4/15/6";
          divback2.style.display = "flex";
          divback2.style.justifyContent = "center";
          divback2.style.alignItems = "center";

          const back2 = document.createElement("button");
          back2.style.width = "12vw";
          back2.style.border = "none";
          back2.style.height = "4vw";
          back2.style.backgroundColor = "rgb(255, 149, 0)";
          back2.style.color = "wheat";
          back2.style.fontSize = "2vw";
          back2.style.borderRadius = "4px";
          back2.innerHTML = "Back";

          divback2.appendChild(back2);
          bigContainer.appendChild(divback2);
          back2.addEventListener("click", () => {
            divback2.style.display = "none";
            divnext2.style.display = "none";
            divpass.style.display = "none";
            divpasscomfim.style.display = "none";
            divgmail.style.display = "none";
            divFirstName.style.display = "flex";
            divLastName.style.display = "flex";
            divphone.style.display = "flex";
            birthdaydiv.style.display = "flex";
            divnext.style.display = "flex";
            divback.style.display = "flex";
          });
          next2.addEventListener("click", () => {
            const password = inputpass.value;
            const passwordconf = inputpassconfirm.value;
            const gmail = inputgmail.value;
            if (
              password === passwordconf &&
              password.length >= 8 &&
              gmail !== ""
            ) {
              sessionStorage.setItem("password", password);
              sessionStorage.setItem("gmail", gmail);
              document.getElementById("signp").style.display = "none";
              divgmail.style.display = "none";
              divpass.style.display = "none";
              divpasscomfim.style.display = "none";
              divnext2.style.display = "none";
              divback2.style.display = "none";
              const createSuccess = document.createElement("div");
              createSuccess.style.gridArea = "7/3/11/11";
              createSuccess.style.display = "flex";
              createSuccess.style.justifyContent = "center";
              createSuccess.style.alignItems = "center";
              createSuccess.style.flexDirection = "column";
              const creationparagraph1 = document.createElement("p");

              const creationparagraph2 = document.createElement("p");
              const creationparagraph3 = document.createElement("p");
              creationparagraph1.innerHTML = "Account Creation Successful!";
              creationparagraph1.style.gridArea = "7/3/8/11";
              creationparagraph3.style.gridArea = "8/3/9/11";
              creationparagraph3.innerHTML = "Please return to the login page";
              creationparagraph3.style.marginTop = "3vw";
              createSuccess.appendChild(creationparagraph1);
              createSuccess.appendChild(creationparagraph3);
              bigContainer.appendChild(createSuccess);
              const divbacktologin = document.createElement("div");
              divbacktologin.style.gridArea = "11/6/12/8";
              divbacktologin.style.display = "flex";
              divbacktologin.style.justifyContent = "center";
              divbacktologin.style.alignItems = "center";

              const backtologin = document.createElement("button");
              backtologin.style.width = "16vw";
              backtologin.style.border = "none";
              backtologin.style.height = "6vw";
              backtologin.style.backgroundColor = "rgb(255, 149, 0)";
              backtologin.style.color = "wheat";
              backtologin.style.fontSize = "2vw";
              backtologin.style.borderRadius = "4px";
              backtologin.innerHTML = "Back to Login";
              divbacktologin.appendChild(backtologin);
              bigContainer.appendChild(divbacktologin);
              backtologin.addEventListener("click", () => {
                divbacktologin.style.display = "none";
                createSuccess.style.display = "none";
                document.getElementById("signp").innerHTML = "Sign In ";
                document.getElementById("logindiv").style.display = "flex";
                document.getElementById("formgmail").style.display = "flex";
                document.getElementById("formpassword").style.display = "flex";
                document.getElementById("forgetpassworddiv").style.display =
                  "flex";
                document.getElementById("gmail").value = "";
                document.getElementById("password").value = "";

                document.getElementById("signp").style.display = "block";
              });
            } else {
              if (password !== passwordconf) {
                alert("password confirmation failed !!");
              } else if (password.length < 8) {
                alert("password must be 8 characters and above !");
              } else {
                alert("please enter a gmail");
              }
            }
          });
        } else {
          alert("Missing Informarion !");
        }
      });
    } else {
      divFirstName.style.gridArea = "6/5/7/7";
      divFirstName.style.display = "flex";
      divFirstName.style.flexDirection = "column";
      divFirstName.style.alignItems = "center";
      divFirstName.style.justifyContent = "center";

      const labelFirstName = document.createElement("label");
      labelFirstName.innerHTML = "First Name:";
      labelFirstName.style.fontSize = "2vw";
      labelFirstName.style.fontWeight = "bold";
      labelFirstName.style.marginTop = "1.5vw";
      divFirstName.id = "divfirstname";

      const inputFirstName = document.createElement("input");
      inputFirstName.type = "text";
      inputFirstName.placeholder = "Enter your first name";
      inputFirstName.id = "firstname";
      inputFirstName.style.backgroundColor = "wheat";
      inputFirstName.style.width = "12vw";
      inputFirstName.style.marginTop = "1vw";
      inputFirstName.style.height = "3vw";
      inputFirstName.style.border = "1px solid black";
      inputFirstName.style.fontSize = "1vw";
      inputFirstName.style.paddingLeft = "1vw";

      divFirstName.appendChild(labelFirstName);
      divFirstName.appendChild(inputFirstName);

      // Last Name div setup
      divLastName.style.gridArea = "6/7/7/9";
      divLastName.style.display = "flex";
      divLastName.style.flexDirection = "column";
      divLastName.style.alignItems = "center";
      divLastName.style.justifyContent = "center";
      divLastName.id = "divlastname";
      const labelLastName = document.createElement("label");
      labelLastName.innerHTML = "Last Name:";
      labelLastName.style.fontSize = "2vw";
      labelLastName.style.fontWeight = "bold";
      labelLastName.style.marginTop = "1.5vw";

      const inputLastName = document.createElement("input");
      inputLastName.type = "text";
      inputLastName.placeholder = "Enter your last name";
      inputLastName.id = "lastname";
      inputLastName.style.backgroundColor = "wheat";
      inputLastName.style.width = "12vw";
      inputLastName.style.marginTop = "1vw";
      inputLastName.style.height = "3vw";
      inputLastName.style.border = "1px solid black";
      inputLastName.style.fontSize = "1vw";
      inputLastName.style.paddingLeft = "1vw";

      divLastName.appendChild(labelLastName);
      divLastName.appendChild(inputLastName);
      const bigContainer = document.getElementsByClassName("bigcontainer")[0];
      bigContainer.appendChild(divFirstName);
      bigContainer.appendChild(divLastName);
      //birthday
      const birthdaydiv = document.createElement("div");
      birthdaydiv.style.gridArea = "7/5/8/7";
      birthdaydiv.style.display = "flex";
      birthdaydiv.style.flexDirection = "column";
      birthdaydiv.style.alignItems = "center";
      birthdaydiv.id = "birthdaydiv";
      birthdaydiv.style.justifyContent = "center";
      const labelbirthday = document.createElement("label");
      labelbirthday.innerHTML = "Birthday : ";
      labelbirthday.style.fontSize = "2vw";
      labelbirthday.style.fontWeight = "bold";
      labelbirthday.style.marginTop = "1.5vw";

      const inputbirthday = document.createElement("input");
      inputbirthday.type = "text";
      inputbirthday.placeholder = "DD / MM / YY ";
      inputbirthday.id = "birthday";
      inputbirthday.style.backgroundColor = "wheat";
      inputbirthday.style.width = "12vw";
      inputbirthday.style.marginTop = "1vw";
      inputbirthday.style.height = "3vw";
      inputbirthday.style.border = "1px solid black";
      inputbirthday.style.fontSize = "1vw";
      inputbirthday.style.paddingLeft = "1vw";
      birthdaydiv.appendChild(labelbirthday);
      birthdaydiv.appendChild(inputbirthday);
      bigContainer.appendChild(birthdaydiv);
      //phone number
      const divphone = document.createElement("div");
      divphone.style.gridArea = "7/7/8/9";
      divphone.style.display = "flex";
      divphone.style.flexDirection = "column";
      divphone.style.justifyContent = "center";
      divphone.style.alignItems = "center";
      divphone.id = "divphone";
      const labelphone = document.createElement("label");
      labelphone.innerHTML = "Phone : ";
      labelphone.style.fontSize = "2vw";
      labelphone.style.fontWeight = "bold";
      labelphone.style.marginTop = "1.5vw";
      const inputphone = document.createElement("input");
      inputphone.type = "text";
      inputphone.placeholder = "DD / MM / YY ";
      inputphone.id = "birthday";
      inputphone.style.backgroundColor = "wheat";
      inputphone.style.width = "12vw";
      inputphone.style.marginTop = "1vw";
      inputphone.style.height = "3vw";
      inputphone.style.border = "1px solid black";
      inputphone.style.fontSize = "1vw";
      inputphone.style.paddingLeft = "1vw";
      inputphone.value = "+961 ";
      divphone.appendChild(labelphone);
      divphone.appendChild(inputphone);
      bigContainer.appendChild(divphone);
      //next button
      const divnext = document.createElement("div");
      divnext.style.gridArea = "8/7/9/9";
      divnext.style.display = "flex";
      divnext.style.flexDirection = "column";
      divnext.style.justifyContent = "center";
      divnext.style.alignItems = "center";
      divnext.id = "divnext";

      const buttonnext = document.createElement("button");
      buttonnext.style.width = "8vw";
      buttonnext.style.border = "none";
      buttonnext.style.height = "2vw";
      buttonnext.style.backgroundColor = "rgb(255, 149, 0)";
      buttonnext.style.color = "wheat";
      buttonnext.style.fontSize = "1.5vw";
      buttonnext.style.borderRadius = "4px";
      buttonnext.innerHTML = "Next";
      divnext.appendChild(buttonnext);
      bigContainer.appendChild(divnext);
      //back button
      const divback = document.createElement("div");
      divback.style.gridArea = "8/5/9/7";
      divback.style.display = "flex";
      divback.style.flexDirection = "column";
      divback.style.justifyContent = "center";
      divback.style.alignItems = "center";
      divback.id = "divback";
      bigContainer.appendChild(divback);
      const buttonback = document.createElement("button");

      buttonback.style.width = "8vw";
      buttonback.style.border = "none";
      buttonback.style.height = "2vw";
      buttonback.style.backgroundColor = "rgb(255, 149, 0)";
      buttonback.style.color = "wheat";
      buttonback.style.fontSize = "1.5vw";
      buttonback.style.borderRadius = "4px";
      buttonback.innerHTML = "Back";
      divback.appendChild(buttonback);
      bigContainer.appendChild(divback);
      buttonback.addEventListener("click", () => {
        divFirstName.style.display = "none";
        divLastName.style.display = "none";
        birthdaydiv.style.display = "none";
        divphone.style.display = "none";
        divback.style.display = "none";
        divnext.style.display = "none";
        document.getElementById("signp").innerHTML = "Sign In ";
        document.getElementById("logindiv").style.display = "flex";
        document.getElementById("formgmail").style.display = "flex";
        document.getElementById("formpassword").style.display = "flex";
        document.getElementById("forgetpassworddiv").style.display = "flex";
        document.getElementById("gmail").value = "";
        document.getElementById("password").value = "";
      });

      buttonnext.addEventListener("click", () => {
        // Hide previous elements
        if (
          inputFirstName.value != "" &&
          inputLastName.value != "" &&
          inputbirthday.value != "" &&
          inputphone.value != ""
        ) {
          document.getElementById("divfirstname").style.display = "none";
          document.getElementById("divlastname").style.display = "none";
          document.getElementById("birthdaydiv").style.display = "none";
          document.getElementById("divphone").style.display = "none";
          divback.style.display = "none";
          divnext.style.display = "none";

          // Create Gmail input section
          const divgmail = document.createElement("div");
          divgmail.style.gridArea = "6/5/7/9";
          divgmail.style.display = "flex";
          divgmail.style.flexDirection = "column";
          divgmail.style.justifyContent = "center";
          divgmail.style.alignItems = "center";
          divgmail.id = "divgmail";

          const labelgmail = document.createElement("label");
          labelgmail.innerHTML = "Gmail: ";
          labelgmail.style.fontSize = "2vw";
          labelgmail.style.fontWeight = "bold";
          labelgmail.style.marginTop = "1.5vw";

          const inputgmail = document.createElement("input");
          inputgmail.type = "text";
          inputgmail.style.width = "30vw";
          inputgmail.placeholder = "example@gmail.com";
          inputgmail.style.height = "2vw";
          inputgmail.style.backgroundColor = "wheat";
          inputgmail.style.paddingLeft = "0.2vw";
          inputgmail.style.marginTop = "2vw";
          inputgmail.style.border = "1px solid black";

          divgmail.appendChild(labelgmail);
          divgmail.appendChild(inputgmail);
          bigContainer.appendChild(divgmail);

          // Create Password input section
          const divpass = document.createElement("div");
          divpass.style.gridArea = "7/5/8/9";
          divpass.style.display = "flex";
          divpass.style.flexDirection = "column";
          divpass.style.justifyContent = "center";
          divpass.style.alignItems = "center";
          divpass.id = "divpass";

          const labelpass = document.createElement("label");
          labelpass.innerHTML = "Password: ";
          labelpass.style.fontSize = "2vw";
          labelpass.style.fontWeight = "bold";
          labelpass.style.marginTop = "1.5vw";

          const inputpass = document.createElement("input");
          inputpass.type = "password";
          inputpass.style.width = "30vw";
          inputpass.placeholder = "Enter 8 digit password or more";
          inputpass.style.height = "2vw";
          inputpass.style.backgroundColor = "wheat";
          inputpass.style.paddingLeft = "0.2vw";
          inputpass.style.marginTop = "2vw";
          inputpass.style.border = "1px solid black";

          divpass.appendChild(labelpass);
          divpass.appendChild(inputpass);
          bigContainer.appendChild(divpass);

          // Create Password Confirmation input section
          const divpasscomfim = document.createElement("div");
          divpasscomfim.style.gridArea = "8/5/9/9";
          divpasscomfim.style.display = "flex";
          divpasscomfim.style.flexDirection = "column";
          divpasscomfim.style.justifyContent = "center";
          divpasscomfim.style.alignItems = "center";
          divpasscomfim.id = "divpassconfirm";

          const labelpassconfirm = document.createElement("label");
          labelpassconfirm.innerHTML = "Password Confirm: ";
          labelpassconfirm.style.fontSize = "2vw";
          labelpassconfirm.style.fontWeight = "bold";
          labelpassconfirm.style.marginTop = "1.5vw";

          const inputpassconfirm = document.createElement("input");
          inputpassconfirm.type = "password";
          inputpassconfirm.style.width = "30vw";
          inputpassconfirm.placeholder = "Re-enter the password";
          inputpassconfirm.style.height = "2vw";
          inputpassconfirm.style.backgroundColor = "wheat";
          inputpassconfirm.style.paddingLeft = "0.2vw";
          inputpassconfirm.style.marginTop = "2vw";
          inputpassconfirm.style.border = "1px solid black";

          divpasscomfim.appendChild(labelpassconfirm);
          divpasscomfim.appendChild(inputpassconfirm);
          bigContainer.appendChild(divpasscomfim);

          const divnext2 = document.createElement("div");
          divnext2.style.gridArea = "9/7/10/9";
          divnext2.style.display = "flex";
          divnext2.style.justifyContent = "center";
          divnext2.style.alignItems = "center";

          const next2 = document.createElement("button");
          next2.style.width = "8vw";
          next2.style.border = "none";
          next2.style.height = "2vw";
          next2.style.backgroundColor = "rgb(255, 149, 0)";
          next2.style.color = "wheat";
          next2.style.fontSize = "1.5vw";
          next2.style.borderRadius = "4px";
          next2.innerHTML = "Next";

          divnext2.appendChild(next2);
          bigContainer.appendChild(divnext2);

          const divback2 = document.createElement("div");
          divback2.style.gridArea = "9/5/10/7";
          divback2.style.display = "flex";
          divback2.style.justifyContent = "center";
          divback2.style.alignItems = "center";

          const back2 = document.createElement("button");
          back2.style.width = "8vw";
          back2.style.border = "none";
          back2.style.height = "2vw";
          back2.style.backgroundColor = "rgb(255, 149, 0)";
          back2.style.color = "wheat";
          back2.style.fontSize = "1.5vw";
          back2.style.borderRadius = "4px";
          back2.innerHTML = "Back";

          divback2.appendChild(back2);
          bigContainer.appendChild(divback2);

          back2.addEventListener("click", () => {
            divback2.style.display = "none";
            divnext2.style.display = "none";
            divpass.style.display = "none";
            divpasscomfim.style.display = "none";
            divgmail.style.display = "none";
            divFirstName.style.display = "flex";
            divLastName.style.display = "flex";
            divphone.style.display = "flex";
            birthdaydiv.style.display = "flex";
            divnext.style.display = "flex";
            divback.style.display = "flex";
          });
          next2.addEventListener("click", () => {
            const password = inputpass.value;
            const passwordconf = inputpassconfirm.value;
            const gmail = inputgmail.value;
            if (
              password === passwordconf &&
              password.length >= 8 &&
              gmail != ""
            ) {
              sessionStorage.setItem("password", password);
              sessionStorage.setItem("gmail", gmail);
              divgmail.style.display = "none";
              divpass.style.display = "none";
              divpasscomfim.style.display = "none";
              divnext2.style.display = "none";
              divback2.style.display = "none";
              const createSuccess = document.createElement("div");
              createSuccess.style.gridArea = "6/5/9/9";
              createSuccess.style.display = "flex";
              createSuccess.style.justifyContent = "center";
              createSuccess.style.alignItems = "center";
              createSuccess.style.flexDirection = "column";
              const creationparagraph1 = document.createElement("p");
              const creationparagraph3 = document.createElement("p");
              creationparagraph1.innerHTML = "Account Creation Successful!";
              creationparagraph1.style.gridArea = "6/5/7/9";
              creationparagraph1.style.fontSize = "2vw";
              creationparagraph3.style.marginTop = "2vw";
              creationparagraph3.style.fontSize = "2vw";
              document.getElementById("signp").style.display = "none";
              creationparagraph3.style.gridArea = "7/5/8/9";
              creationparagraph3.innerHTML = "Please return to the login page";
              createSuccess.appendChild(creationparagraph1);
              createSuccess.appendChild(creationparagraph3);
              bigContainer.appendChild(createSuccess);
              const divbacktologin = document.createElement("div");
              divbacktologin.style.gridArea = "8/6/9/8";
              divbacktologin.style.display = "flex";
              divbacktologin.style.justifyContent = "center";
              divbacktologin.style.alignItems = "center";

              const backtologin = document.createElement("button");
              backtologin.style.width = "12vw";
              backtologin.style.border = "none";
              backtologin.style.height = "2vw";
              backtologin.style.backgroundColor = "rgb(255, 149, 0)";
              backtologin.style.color = "wheat";
              backtologin.style.fontSize = "1.5vw";
              backtologin.style.borderRadius = "4px";
              backtologin.innerHTML = "Back to Login";
              divbacktologin.appendChild(backtologin);
              bigContainer.appendChild(divbacktologin);
              backtologin.addEventListener("click", () => {
                createSuccess.style.display = "none";
                divbacktologin.style.display = "none";
                document.getElementById("signp").innerHTML = "Sign In ";
                document.getElementById("logindiv").style.display = "flex";
                document.getElementById("formgmail").style.display = "flex";
                document.getElementById("formpassword").style.display = "flex";
                document.getElementById("forgetpassworddiv").style.display =
                  "flex";
                document.getElementById("gmail").value = "";
                document.getElementById("password").value = "";
                document.getElementById("signp").style.display = "block";
              });
            } else {
              if (password !== passwordconf) {
                alert("password confirmation failed !!");
              } else if (password.length < 8) {
                alert("password must be 8 characters and above !");
              } else {
                alert("please enter a gmail");
              }
            }
          });
        } else {
          alert("Missing Information !");
        }
      });
    }
  });
});
