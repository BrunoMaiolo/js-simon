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

//countdown//
let timeLeft = 8;
countdownEl.textContent = timeLeft;
const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    startGame();
  }
}, 1000);

//fase dopo lo scadere dei 30 secondi//
function startGame() {
  numbersList.classList.add('d-none');
  answersForm.classList.remove('d-none');
}

//prendere i numeri dal giocatore//
answersForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = answersForm.querySelectorAll('input');
  const userNumbers = [];

  inputs.forEach(input => {
    userNumbers.push(Number(input.value));
  });

  checkResults(userNumbers);
});

