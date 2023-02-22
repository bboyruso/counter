let counter = 0;

const increment = () => {
  counter++;
  if (counter > 10) {
    counter = 10;
    showError("maximum");
    return;
  }
  displayCounterNum();
};

const decrement = () => {
  counter--;
  if (counter < 0) {
    counter = 0;
    showError("minimum");
    return;
  }
  displayCounterNum();
};

const reset = () => {
  counter = 0;
  displayCounterNum();
};

document.querySelector("#one").addEventListener("click", increment);
document.querySelector("#two").addEventListener("click", decrement);
document.querySelector("#tree").addEventListener("click", reset);

const displayCounterNum = () => {
  document.querySelector(".output").innerHTML = counter;
};

const showError = (string) => {
  document.querySelector(".output").innerHTML = `${counter} - its a ${string} value`;
};
