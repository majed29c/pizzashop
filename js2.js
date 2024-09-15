const arrayorder = [];
const mediaquer = window.matchMedia("(max-width: 767px)");

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submitbutton");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");
  submit.addEventListener("click", (event) => {
    event.preventDefault();

    const input1 = document.getElementById("fullname").value;
    const input2 = document.getElementById("order2").value;
    const input3 = document.getElementById("address2").value;
    if (input1 !== "" && input2 !== "" && input3 !== "") {
      if (submit.value === "order") {
        // Hide all forms and total section
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        document.getElementById("total").style.display = "none";
        submit.value = "Back Home";

        // Create a thank-you message div
        const thankyoudiv = document.createElement("div");
        thankyoudiv.style.display = "flex";
        thankyoudiv.style.justifyContent = "center";
        thankyoudiv.style.alignItems = "center";
        thankyoudiv.style.backgroundColor = "wheat";
        thankyoudiv.style.padding = "20px";
        thankyoudiv.style.borderRadius = "8px";
        thankyoudiv.style.textAlign = "center";
        thankyoudiv.style.marginTop = "20px";
        if (mediaquer.matches) {
          thankyoudiv.style.gridArea = "7 / 4 / 12 / 10";
          thankyoudiv.style.fontSize = "3vw";
          document.getElementsByClassName("placeorder")[0].style.gridArea =
            "12 / 6 / 13 / 8";
          document.getElementsByClassName("subbigcontainer")[0].style.gridArea =
            "2 / 3 / 14 / 11";
        } else {
          thankyoudiv.style.gridArea = "5 / 5 / 8 / 9";
          thankyoudiv.style.fontSize = "2vw";
          document.getElementsByClassName("placeorder")[0].style.gridArea =
            "8 / 6 / 9 / 8";
          document.getElementsByClassName("subbigcontainer")[0].style.gridArea =
            "2 / 3 / 10 / 11";
        }
        const p = document.createElement("p");
        p.innerHTML =
          "Thank you for choosing Pizzaliano!<br>Your order has been successfully placed.<br>We appreciate your business and hope you enjoy your meal!<br>We'll prepare it with care and deliver it shortly. Have a great day!";
        thankyoudiv.appendChild(p);

        document.querySelector(".bigcontainer").appendChild(thankyoudiv);
        arrayorder.length = 0;
        sessionStorage.removeItem("arrayorder");
        sessionStorage.removeItem("orderarrnum");
        sessionStorage.removeItem("orderarrname");
        sessionStorage.removeItem("orderarrprice");
        sessionStorage.removeItem("orderarrsize");
        sessionStorage.removeItem("totalnumber");
      } else if (submit.value === "Back Home") {
        window.location.href = "index.html";
      }
    } else {
      alert("missing information");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const num = sessionStorage.getItem("orderarrnum");
  const size = sessionStorage.getItem("orderarraysize");
  const name = sessionStorage.getItem("orderarrname");
  const price = sessionStorage.getItem("orderarrprice");

  let num2 = num ? num.split(",") : [];
  let size2 = size ? size.split(",") : [];
  let name2 = name ? name.split(",") : [];
  let price2 = price ? price.split(",") : [];

  let total = 0;
  let str = "";

  const price3 = document.getElementById("totalnumber");
  const pricesession = sessionStorage.getItem("totalnumber");

  if (pricesession !== null) {
    total = Number(pricesession);
  }

  const price2int = price2.map(Number);
  const num2int = num2.map(Number);

  for (let i = 0; i < num2int.length; i++) {
    let itemTotal = price2int[i] * num2int[i];
    total += itemTotal;
    str += `${name2[i]} ${size2[i]} ${num2int[i]} = $${itemTotal}\n`;
  }

  const order = document.getElementById("order2");

  if (order) {
    let existingOrder = sessionStorage.getItem("arrayorder");
    let arrayorder = existingOrder ? existingOrder.split(",") : [];

    arrayorder.push(str);
    sessionStorage.setItem("arrayorder", arrayorder.join(","));
    order.innerHTML = arrayorder.join("\n");

    if (price3) {
      price3.innerHTML = total.toFixed(2);
    }

    sessionStorage.setItem("totalnumber", total);
  }
});
