let isPaused1 = false;
let isUp1 = false;
let isPaused2 = false;
let isUp2 = false;
let isPaused3 = false;
let isUp3 = false;
let isPaused4 = false;
let isUp4 = false;
let isPaused5 = false;
let isUp5 = false;
let isPaused6 = false;
let isUp6 = false;
let isPaused7 = false;
let isUp7 = false;
let isPaused8 = false;
let isUp8 = false;
let isPaused9 = false;
let isUp9 = false;

const orderarraysize = [];
const orderarrayprice = [];
const orderarrayname = [];
const orderarraynum = [];

function moveup(e, index) {
  const image = e.currentTarget;
  if (image) {
    if (window[`isPaused${index}`] && window[`isUp${index}`]) {
      image.style.animation = "picanimationdown 1s ease-in-out 1";
      image.style.animationPlayState = "running";
      window[`isPaused${index}`] = false;
      window[`isUp${index}`] = false;
    } else if (!window[`isUp${index}`]) {
      image.style.animation = "picanimation 1s ease-in-out 1";
      image.style.animationPlayState = "running";
      setTimeout(() => {
        window[`isUp${index}`] = true;
        window[`isPaused${index}`] = true;
        image.style.animationPlayState = "paused";
      }, 970);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const imageIds = [
    "Margherita",
    "Pepperoni",
    "BBQ",
    "Hawaiian",
    "Veg",
    "MeatLovers",
    "FourCheese",
    "Buffalo",
    "Pesto",
  ];
  imageIds.forEach((imageId, index) => {
    const imageElement = document.querySelector(`#${imageId}`);
    const submitButton = document.getElementById(`submit${index + 1}`);
    imageElement.addEventListener("click", (e) => moveup(e, index + 1));
    submitButton.addEventListener("click", () =>
      moveup({ currentTarget: imageElement }, index + 1)
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sub1 = document.getElementById("submit1");
  sub1.addEventListener("click", (event) => {
    event.preventDefault();
    let margsize = document.getElementById("select1").value;
    console.log(margsize);
    let margnum = document.getElementById("number1").value;
    orderarraysize.push(margsize);
    orderarrayname.push("Margherita");
    orderarraynum.push(margnum);
    if (margsize === "small") {
      orderarrayprice.push(8);
    } else if (margsize === "medium") {
      orderarrayprice.push(12);
    } else {
      orderarrayprice.push(15);
    }

    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub2 = document.getElementById("submit2");
  sub2.addEventListener("click", (event) => {
    event.preventDefault();
    let pepperonisize = document.getElementById("select2").value;
    let pepperoninum = document.getElementById("number2").value;
    orderarraysize.push(pepperonisize);
    orderarrayname.push("Pepperoni Pizza");
    orderarraynum.push(pepperoninum);
    if (pepperonisize === "small") {
      orderarrayprice.push(10);
    } else if (pepperonisize === "medium") {
      orderarrayprice.push(15);
    } else {
      orderarrayprice.push(18);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub3 = document.getElementById("submit3");
  sub3.addEventListener("click", (event) => {
    event.preventDefault();
    let bbqsize = document.getElementById("select3").value;
    let bbqnum = document.getElementById("number3").value;
    orderarrayname.push("BBQ PIZZA");
    orderarraysize.push(bbqsize);
    orderarraynum.push(bbqnum);
    if (bbqsize === "small") {
      orderarrayprice.push(10);
    } else if (bbqsize === "medium") {
      orderarrayprice.push(15);
    } else {
      orderarrayprice.push(18);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub4 = document.getElementById("submit4");
  sub4.addEventListener("click", (event) => {
    event.preventDefault();
    let hawaiiansize = document.getElementById("select4").value;
    let hawaiiannum = document.getElementById("number4").value;
    orderarrayname.push("HAWAIIAN PIZZA");
    orderarraysize.push(hawaiiansize);
    orderarraynum.push(hawaiiannum);
    if (hawaiiansize === "small") {
      orderarrayprice.push(10);
    } else if (hawaiiansize === "medium") {
      orderarrayprice.push(15);
    } else {
      orderarrayprice.push(18);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub5 = document.getElementById("submit5");
  sub5.addEventListener("click", (event) => {
    event.preventDefault();
    let vegetariansize = document.getElementById("number5").value;
    let vegetariannum = document.getElementById("select5").value;
    orderarrayname.push("Vegetarian Pizza");
    orderarraysize.push(vegetariansize);
    orderarraynum.push(vegetariannum);
    if (vegetariansize === "small") {
      orderarrayprice.push(8);
    } else if (vegetariansize === "medium") {
      orderarrayprice.push(10);
    } else {
      orderarrayprice.push(12);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub6 = document.getElementById("submit6");
  sub6.addEventListener("click", (event) => {
    event.preventDefault();
    let meatloverssize = document.getElementById("select6").value;
    let meatloversnum = document.getElementById("number6").value;
    orderarrayname.push("Meat Lovers Pizza");
    orderarraysize.push(meatloverssize);
    orderarraynum.push(meatloversnum);
    if (meatloverssize === "small") {
      orderarrayprice.push(12);
    } else if (meatloverssize === "medium") {
      orderarrayprice.push(18);
    } else {
      orderarrayprice.push(22);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub7 = document.getElementById("submit7");
  sub7.addEventListener("click", (event) => {
    event.preventDefault();
    let fourcheesesize = document.getElementById("select7").value;
    let fourcheesenum = document.getElementById("number7").value;
    orderarrayname.push("Four Cheese Pizza");
    orderarraysize.push(fourcheesesize);
    orderarraynum.push(fourcheesenum);
    if (fourcheesesize === "small") {
      orderarrayprice.push(10);
    } else if (fourcheesesize === "medium") {
      orderarrayprice.push(15);
    } else {
      orderarrayprice.push(18);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub8 = document.getElementById("submit8");
  sub8.addEventListener("click", (event) => {
    event.preventDefault();
    let buffalosize = document.getElementById("select8").value;
    let buffalonum = document.getElementById("number8").value;
    orderarrayname.push("Buffalo Chicken Pizza");
    orderarraysize.push(buffalosize);
    orderarraynum.push(buffalonum);
    if (buffalosize === "small") {
      orderarrayprice.push(11);
    } else if (buffalosize === "medium") {
      orderarrayprice.push(16);
    } else {
      orderarrayprice.push(20);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });

  const sub9 = document.getElementById("submit9");
  sub9.addEventListener("click", (event) => {
    event.preventDefault();
    let pestosize = document.getElementById("select9").value;
    let pestonum = document.getElementById("number9").value;
    orderarrayname.push("Pesto Pizza");
    orderarraysize.push(pestosize);
    orderarraynum.push(pestonum);
    if (pestosize === "small") {
      orderarrayprice.push(9);
    } else if (pestosize === "medium") {
      orderarrayprice.push(13);
    } else {
      orderarrayprice.push(16);
    }
    sessionStorage.setItem("orderarrnum", orderarraynum);
    sessionStorage.setItem("orderarrname", orderarrayname);
    sessionStorage.setItem("orderarraysize", orderarraysize);
    sessionStorage.setItem("orderarrprice", orderarrayprice);
  });
});
