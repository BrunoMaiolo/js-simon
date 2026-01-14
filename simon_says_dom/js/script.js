//elementi dal dom//
const countdownEl = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const messageEl = document.getElementById('message');

//generare  5 numeri casuali//
const randomNumbers = [];
while (randomNumbers.length < 5) {
  const number = Math.floor(Math.random() * 50) + 1;

  if (!randomNumbers.includes(number)) {
    randomNumbers.push(number);
  }
}

//mostrare i numeri in pagina//
randomNumbers.forEach(num => {
  const li = document.createElement('li');
  li.textContent = num;
  numbersList.appendChild(li);
});