
// Напиши скрипт, который после нажатия кнопки Start,
//     раз в секунду меняет цвет фона body на случайное значение из массива используя
// инлайн - стиль.При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.


// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval.


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
};
// const promises = colors.map(onClickChangeColor);
function randomBodyColor(color) {
    refs.body.style.backgroundColor = color
}
refs.stop.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalColorChange = undefined;
refs.start.addEventListener('click', () => {
  
   intervalColorChange= setInterval(function () {
    const randomize = randomIntegerFromInterval(0, colors.length - 1);
    randomBodyColor(colors[randomize])
  }, 1000)
  refs.stop.removeAttribute('disabled');
  refs.start.setAttribute('disabled', true);
});

 function stop() {
  clearInterval(intervalColorChange);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
}


  


// var myColors = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
                
// function clickMe(){
//   var randomize = Math.floor(Math.random()*myColors.length);
//   $('.box').css("background-color", myColors[randomize]);
// }


