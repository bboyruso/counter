let i = 0;

const checkMinMaxCounter = () => {
  if (i < 0) {
    i = 0;
    alert(`0 its a minimum value`);
  } else if (i > 10) {
    i = 10;
    alert(`10 its a maximum value`);
  } else displayCounterNum();
};

const increment = () => {
  i++;
  checkMinMaxCounter();
};
const decrement = () => {
  i--;
  checkMinMaxCounter();
};
const reset = () => {
  i = 0;
  displayCounterNum();
};

document.querySelector("#one").addEventListener("click", increment);
document.querySelector("#two").addEventListener("click", decrement);
document.querySelector("#tree").addEventListener("click", reset);

const displayCounterNum = () => {
  document.querySelector(".output").innerHTML = i;
};
