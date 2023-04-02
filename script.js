// Burger button mechanism

const burgerButtonShow = () => {
  let element = document.querySelector('#burger-menu');
  let hideBtn = document.querySelector('#hide-btn');
  let showBtn = document.querySelector('#show-btn');

  element.style.display = "flex";
  hideBtn.style.display = "block";
  showBtn.style.display = "none";
}

const burgerButtonHide= () => {
  let element = document.querySelector('#burger-menu');
  let hideBtn = document.querySelector('#hide-btn');
  let showBtn = document.querySelector('#show-btn');

  element.style.display = "none";
  hideBtn.style.display = "none";
  showBtn.style.display = "block";
}