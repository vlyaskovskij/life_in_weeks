"use strict";
// const day = localStorage.getItem("birthdayDay");
// let birthday;
// let weeks;
// let years = localStorage.getItem("yearInLife");;
// start();
// console.log(years);

// document.getElementById('calculate').addEventListener('click', function() {
//   weeks = countWeeks();
//   paintDiv(weeks);
// });

// document.getElementById('yearsStart').addEventListener('click', function() {
//   years = document.getElementById('years').value;
//   localStorage.setItem("yearInLife", years);
//   createYears(years);
// });

// function start() { 
//   if(day != null)
//   {
//     showWeeks();
//     paintDiv(weeks);
//   }
// }

// function countWeeks() {
//   let birthdayInput = document.getElementById('birthday');
//   localStorage.setItem("birthdayDay", birthdayInput.value);
//   birthday = new Date(birthdayInput.value);
//   let now = new Date();

//   // Вычислить количество лет
//   let years = now.getFullYear() - birthday.getFullYear();

//   weeks = years * 52;

//   // Добавить оставшиеся недели в текущем году
//   weeks += Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

//   // Вычесть недели, прошедшие до даты рождения в году рождения
//   weeks -= Math.floor((birthday.getTime() - new Date(birthday.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

//   return weeks;
// }

// function showWeeks() {
//   let birthdayInput = document.getElementById('birthday');
//   birthdayInput.value = day;
//   birthday = new Date(birthdayInput.value);
//   let now = new Date();

//   // Вычислить количество лет
//   let years = now.getFullYear() - birthday.getFullYear();

//   // Вычислить количество недель в годах между датами рождения и текущей датой
//   weeks = years * 52;

//   // Добавить оставшиеся недели в текущем году
//   weeks += Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

//   // Вычесть недели, прошедшие до даты рождения в году рождения
//   weeks -= Math.floor((birthday.getTime() - new Date(birthday.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
//   console.log(weeks);
//   return weeks;
// }

// function paintDiv(weeks) {
//   console.log(weeks);
//   // Найти все черные дивы и изменить их цвет
//   let blackDivs = document.querySelectorAll('.week');
//   for (let i = 0; i < blackDivs.length; i++) {
//     if (i < weeks) {
//       blackDivs[i].style.backgroundColor = 'black';
//     } else {
//       blackDivs[i].style.backgroundColor = 'transparent';
//     }
//   }
// }

// function createYears(years) {
//   const weeks = document.getElementById("weeks");
//   const lastP = weeks.lastElementChild;
//   for (let i = 1; i < years; i++) {
//   const newLastP = lastP.cloneNode(true);
//   weeks.appendChild(newLastP);
//   };
//   start();
// };

"use strict";
const day = localStorage.getItem("birthdayDay");
let birthday;
let weeks;

// Проверяем, есть ли в localStorage сохраненное значение для years
let years = localStorage.getItem("yearInLife");
if (years !== null) {
  document.getElementById("years").value = years;
  createYears(years);
} else {
  // Если нет, устанавливаем значение по умолчанию
  years = 1;
  document.getElementById("years").value = years;
}

start();

document.getElementById('calculate').addEventListener('click', function() {
  weeks = countWeeks();
  paintDiv(weeks);
});

document.getElementById('yearsStart').addEventListener('click', function() {
  years = document.getElementById('years').value;
  localStorage.setItem("yearInLife", years);
  createYears(years);
});

function start() { 
  if(day != null)
  {
    showWeeks();
    paintDiv(weeks);
  }
}

function countWeeks() {
  let birthdayInput = document.getElementById('birthday');
  localStorage.setItem("birthdayDay", birthdayInput.value);
  birthday = new Date(birthdayInput.value);
  let now = new Date();

  // Вычислить количество лет
  let years = now.getFullYear() - birthday.getFullYear();

  weeks = years * 52;

  // Добавить оставшиеся недели в текущем году
  weeks += Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

  // Вычесть недели, прошедшие до даты рождения в году рождения
  weeks -= Math.floor((birthday.getTime() - new Date(birthday.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

  return weeks;
}

function showWeeks() {
  let birthdayInput = document.getElementById('birthday');
  birthdayInput.value = day;
  birthday = new Date(birthdayInput.value);
  let now = new Date();

  // Вычислить количество лет
  let years = now.getFullYear() - birthday.getFullYear();

  // Вычислить количество недель в годах между датами рождения и текущей датой
  weeks = years * 52;

  // Добавить оставшиеся недели в текущем году
  weeks += Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));

  // Вычесть недели, прошедшие до даты рождения в году рождения
  weeks -= Math.floor((birthday.getTime() - new Date(birthday.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
  console.log(weeks);
  return weeks;
}

function paintDiv(weeks) {
  console.log(weeks);
  // Найти все черные дивы и изменить их цвет
  let blackDivs = document.querySelectorAll('.week');
  for (let i = 0; i < blackDivs.length; i++) {
    if (i < weeks) {
      blackDivs[i].style.backgroundColor = 'black';
    } else {
      blackDivs[i].style.backgroundColor = 'transparent';
    }
  }
}

function createYears(years) {
  const weeks = document.getElementById("weeks");
  const lastP = weeks.lastElementChild;
  for (let i = 1; i < years; i++) {
    const newLastP = lastP.cloneNode(true);
    weeks.appendChild(newLastP);
  }
  start();
}