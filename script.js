let seconds = 0;
let minutes = 0;

let clock = document.querySelectorAll('span');
let getSecs = document.querySelector('#segundos');
let getMins = document.querySelector('#minutos');
let btnStart = document.querySelector('#btnStart');
let btnReset = document.querySelector('#btnReset');
let btnStop = document.querySelector('#btnStop');
let interval;


btnStart.addEventListener('click', () => {
   interval = setInterval(() => {
    seconds++;
    if (seconds <= 9) {
        getSecs.innerHTML = "0" + seconds;
    }

    if (seconds > 9) {
        getSecs.innerHTML = seconds;
    }


   
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        
    }

    if (minutes <= 9) {
        getMins.innerHTML = '0' + minutes;
    }

   },100)
});


btnStop.addEventListener('click', () => {
   clearInterval(interval);
   minutes = minutes;
   seconds = seconds;
   


   btnReset.addEventListener('click', () =>{
     setInterval(interval);
      getMins.innerHTML = '00';
      getSecs.innerHTML = '00';

      let minutes = 0;
      let seconds = 0;

   });

}); 
