const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secsHand = document.querySelector('.sec-hand');

function setClock(){
  const now = new Date()
  
  const sec = now.getSeconds();
  const secsDegrees = ((sec / 60) * 360) + 90;
  secsHand.style.transform = `rotate(${secsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setClock,1000);
