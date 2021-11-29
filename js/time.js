'Use strict';

const time = document.querySelector('.time'); 
const date = document.querySelector('.date'); 
const greet = document.querySelector('.greeting');
const yourName = document.querySelector('.name');
const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

   function showTime() {
      const today = new Date();
      const currentTime = today.toLocaleTimeString();
      time.innerHTML = currentTime;
      showDate();
      showGreeting();
      setTimeout(showTime, 1000);
      }
   showTime(); 

   function showDate() {
      const select = document.querySelector('select');
      const today = new Date();
      const options = {weekday: 'long', month: 'long', day: 'numeric'};
      let lang = select.value;
      let currentDate = '';
      if (lang === "en") {
         currentDate = today.toLocaleDateString('en-US', options);
         date.innerHTML = currentDate;
      } else if (lang === "ru"){
         currentDate = today.toLocaleDateString('ru-US', options);
         date.innerHTML = currentDate;
      }
   }

   function getTimeOfDay() {
      const today = new Date();
      const hours = today.getHours(); 
      const select = document.querySelector('select');
      let lang = select.value;
      let timeOfDay = '';
      if (hours > 23 || hours <7) {
         timeOfDay = "night";
      }
      if ((hours > 23 || hours <7) && lang === "ru") {
         timeOfDay = "ночи";
      }
      if (hours > 6 && hours < 12) {
         timeOfDay = "morning";
      } 
      if ((hours > 6 && hours < 12) && lang === "ru"){
         timeOfDay = "утро";
      } 
      if (hours > 11 && hours < 18) {
         timeOfDay = "afternoon";
      } 
      if ((hours > 11 && hours < 18) && lang === "ru"){
         timeOfDay = "день";
      } 
      if (hours > 17 && hours < 24) {
         timeOfDay = "evening";
      }
      if ((hours > 17 && hours < 24) && lang === "ru") {
         timeOfDay = "вечер";
      }
      return timeOfDay;
   }

   

   //Greeting

   function showGreeting() {
      const today = new Date();
      const hours = today.getHours(); 
      const showPartOfDay = getTimeOfDay();
      let greetingText = '';
      const select = document.querySelector('select');
      let lang = select.value;
      if (lang === "en") {
         greetingText = `Good ${showPartOfDay}`;
         greet.innerHTML = greetingText;
         yourName.placeholder = '[Enter name]';
      } else if (lang === "ru" && (hours > 23 || hours <7)) {
         greetingText = `Доброй ${showPartOfDay}`;
         greet.innerHTML = greetingText;
         yourName.placeholder = '[Введите имя]';
      } else if (lang === "ru" && (hours > 6 && hours < 12)) {
         greetingText = `Доброе ${showPartOfDay}`;
         gyourName.placeholder = '[Введите имя]';
      } else if (lang === "ru" && (hours > 11 && hours < 18)) {
         greetingText = `Добрый ${showPartOfDay}`;
         greet.innerHTML = greetingText;
         yourName.placeholder = '[Введите имя]';
      } else if (lang === "ru" && (hours > 17 && hours < 24)) {
         greetingText = `Добрый ${showPartOfDay}`;
         greet.innerHTML = greetingText;
         yourName.placeholder = '[Введите имя]';
      } 
   }

   function setLocalStorage() {
      localStorage.setItem('name', yourName.value);
   }
   window.addEventListener('beforeunload', setLocalStorage);

   function getLocalStorage() {
      if(localStorage.getItem('name')) {
      yourName.value = localStorage.getItem('name');
      }
   }
   window.addEventListener('load', getLocalStorage);
   
   //Slider

   let randomNum = Math.floor(Math.random() * 20);

   function SetBg() {
      const select = document.querySelector('select');
      let lang = select.value;
      const today = new Date();
      const hours = today.getHours(); 
      if (lang === "en") {
         let timeOfDay = getTimeOfDay()
         let img = new Image();
         let bgNum = randomNum.toString().padStart(2, 0);
         let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
         img.src = src;
         img.onload = () => {body.style.backgroundImage = `url('${src}')`; };
      }
      if (lang === "ru" && (hours > 23 || hours <7)) {
         let timeOfDay = "night"
         let img = new Image();
         let bgNum = randomNum.toString().padStart(2, 0);
         let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
         img.src = src;
         img.onload = () => {body.style.backgroundImage = `url('${src}')`; };
      }
      if (lang === "ru" && (hours > 6 && hours < 12)) {
         let timeOfDay = "morning"
         let img = new Image();
         let bgNum = randomNum.toString().padStart(2, 0);
         let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
         img.src = src;
         img.onload = () => {body.style.backgroundImage = `url('${src}')`; };
      }
      if (lang === "ru" && (hours > 11 && hours < 18)) {
         let timeOfDay = "afternoon"
         let img = new Image();
         let bgNum = randomNum.toString().padStart(2, 0);
         let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
         img.src = src;
         img.onload = () => {body.style.backgroundImage = `url('${src}')`; };
      }
      if (lang === "ru" && (hours > 17 && hours < 24)) {
         let timeOfDay = "evening"
         let img = new Image();
         let bgNum = randomNum.toString().padStart(2, 0);
         let src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
         img.src = src;
         img.onload = () => {body.style.backgroundImage = `url('${src}')`; };
      }
   }
   SetBg();

   function getSlidePrev() {
      if (randomNum < 2) {
         randomNum = 20;
      } else {
         randomNum--;
      }
      SetBg();
   }

   function getSlideNext() {
      if (randomNum < 20) {
         randomNum++;
      } else {
         randomNum = 1;
      }
      SetBg();
   }

   slideNext.addEventListener('click', getSlideNext);
   slidePrev.addEventListener('click', getSlidePrev);
   
   

   

   
   
   
    
   
   

   



