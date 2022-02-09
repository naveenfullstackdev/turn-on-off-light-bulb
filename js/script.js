const bodyBgc = document.querySelector("body");

const heading = document.querySelector("h1");

const turnOnBtn = document.querySelector(
  "section > section button:first-child"
);

const turnOffBtn = document.querySelector(
  "section > section button:last-child"
);

const toggleImg = document.querySelector("img");

turnOnBtn.addEventListener("click", () => {
  toggleImg.src = "./images/light-bulb-on.png";

  bodyBgc.style.backgroundColor = "#dde112";

  heading.style.color = "#ffffff";
});

turnOffBtn.addEventListener("click", () => {
  if (toggleImg.src === "http://127.0.0.1:5500/images/light-bulb-off.png") {
    alert("You cannot Turn off the Light Bulb even Before Turning On.");
  } else {
    toggleImg.src = "./images/light-bulb-off.png";

    bodyBgc.style.backgroundColor = "#4f4f4f";

    setTimeout(() => {
      bodyBgc.style.backgroundColor = "#ffffff";
      heading.style.color = "#000000";
    }, 4000);
  }
});
