const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    // console.log(buttonLeft, buttonTop);
    const insideBtnX = x - buttonLeft;
    const insideBtnY = y - buttonTop;
    console.log(insideBtnX, insideBtnY);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = insideBtnY + "px";
    circle.style.left = insideBtnX + "px";

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
