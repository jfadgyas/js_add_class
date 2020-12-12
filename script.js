const btn = document.querySelector('#mybutton');
const btn2 = document.querySelector('#button2');

//get body for the 2de opdracht
const page = document.querySelector('body');

btn.addEventListener('click', function(){alert('button clicked')});

const toggleColor = () => {
    page.classList.toggle('red-background');
}
btn2.addEventListener('click', () => toggleColor());