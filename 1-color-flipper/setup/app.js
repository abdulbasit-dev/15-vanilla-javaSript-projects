const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  //get random number between 0-3
  const randomNumber = getRandomeNumber();

  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomeNumber() {
  return Math.floor(Math.random() * colors.length);
}
