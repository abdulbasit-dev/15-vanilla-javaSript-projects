//set initial count
let count = 0;

//select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    //mine
    // if (btn.className.includes('increase')) {
    //   value.textContent = ++count;
    // }
    // if (btn.className.includes('decrease')) {
    //   value.textContent = --count;
    // }
    // if (btn.className.includes('reset')) {
    //   count = 0;
    //   value.textContent = count;
    // }

    let styles = e.currentTarget.classList;

    //check for class name
    if (styles.contains('decrease')) count--;
    else if (styles.contains('increase')) count++;
    else count = 0;

    //check and add color
    if (count > 0) value.style.color = 'green';
    else if (count < 0) value.style.color = '#f15025';
    else if (count === 0) value.style.color = '#222';

    //adding count value to the span
    value.textContent = count;
  });
});

//mine code
// //grap dom
// const value = document.querySelector('#value');
// const increase = document.querySelector('.increase');
// const reset = document.querySelector('.reset');
// const decrease = document.querySelector('.decrease');

// let count = 0;

// //increase event
// increase.addEventListener('click', () => {
//   count++;
//   value.textContent = count;
//   if (count > 0) value.style.color = 'green';
// });

// //reset event
// reset.addEventListener('click', () => {
//   count = 0;
//   value.textContent = 0;
//   value.style.color = 'black';
// });

// //decrease event
// decrease.addEventListener('click', () => {
//   count--;
//   value.textContent = count;
//   if (count < 0) value.style.color = '#f15025';
// });
