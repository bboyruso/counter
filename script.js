let i = 0;

const checkIt = () => {
  if (i < 0) {
    i = 0;
    alert(`0 its a minimum value`);
  } else if (i > 10) {
    i = 10;
    alert(`10 its a maximum value`);
  } else inner();
};

const increment = () => {
  i++;
  checkIt();
};
const decrement = () => {
  i--;
  checkIt();
};
const reset = () => {
  i = 0;
  inner();
};

document.querySelector("#one").addEventListener("click", increment);
document.querySelector("#two").addEventListener("click", decrement);
document.querySelector("#tree").addEventListener("click", reset);
const inner = () => {
  document.querySelector(".output").innerHTML = i;
};
