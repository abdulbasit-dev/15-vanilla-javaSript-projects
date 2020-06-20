const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexColor = '#';

  //get randome ele from hex array and added to the hexColor variable
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomeNumber()];
    // console.log(hexColor);
  }

  document.body.style.background = hexColor;
  color.textContent = hexColor;
});

function getRandomeNumber() {
  return Math.floor(Math.random() * hex.length);
}
