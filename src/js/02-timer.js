import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import { convertMs } from './convertMs';
//Импортировал переменные
import { getRefs } from './getRefs';
const { startBtn, inputEl, daysEl, hoursEl, minutesEl, secondsEl } = getRefs();

startBtn.disabled = true;
let timerId = null;

flatpickr('#datetime-picker', {
  altInput: true,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      startBtn.disabled = false;
      timerId = selectedDates[0];
    }
  },
});

//Повесил слушателя на кнопку
startBtn.addEventListener('click', userTime);

//Получаю дату и время пользователя
function userTime() {
  const timeInput = inputEl.value;
  const time = new Date(timeInput);
  timerId = setInterval(() => renderTime(time), 1000);
  console.log(time);
}

//Запускаем обратный отсчет таймера
function renderTime(date) {
  const currentDate = new Date();
  const difference = date - currentDate;

  const componentsTimer = convertMs(difference);
  if (difference < 0) {
    clearInterval(timerId);
    return;
  }

  updateClockFace(componentsTimer);
}

//Вынес текстовый контент в отдельную функцию
function updateClockFace({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}
