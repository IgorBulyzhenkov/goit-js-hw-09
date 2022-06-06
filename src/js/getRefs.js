export const getRefs = () => {
    return {
      startBtn: document.querySelector('button[data-start]'),
      inputEl: document.querySelector('#datetime-picker'),
      daysEl: document.querySelector('span[data-days]'),
      hoursEl: document.querySelector('span[data-hours]'),
      minutesEl: document.querySelector('span[data-minutes]'),
      secondsEl: document.querySelector('span[data-seconds]'),
    };
}



