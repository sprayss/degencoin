
let balance = 1000;

document.querySelector('.bal').textContent = balance/100 + ' SOL';

function bet05() {
  let rand = Math.random();
  //balance -=0.00175;
  if (balance <= 4) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 5;
  } else if (rand >= 0.5) {
    balance -= 5;
  }

  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};
function bet01() {
  let rand = Math.random();
  if (balance <= 9) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 10;
  } else if (rand >= 0.5) {
    balance -= 10;
  }
  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};
function bet025() {
  let rand = Math.random();
  if (balance <= 24) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 25;
  } else if (rand >= 0.5) {
    balance -= 25;
  }

  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};
function bet050() {
  let rand = Math.random();
  if (balance <= 49) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 50;
  } else if (rand >= 0.5) {
    balance -= 50;
  }

  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};
function bet1() {
  let rand = Math.random();
  if (balance <= 99) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 100;
  } else if (rand >= 0.5) {
    balance -= 100;
  }

  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};

function bet2() {
  let rand = Math.random();
  
  if (balance <= 199) {
    alert('You do not have enough money to bet this amount');
  } else if (rand < 0.5) {
    balance += 200;
  } else if (rand >= 0.5) {
    balance -= 200;
  }
  
console.log(rand);
  document.querySelector('.bal').textContent = balance/100 + ' SOL';

};

// Get all the buttons
const btns = document.querySelectorAll('.bet-btn-size');

// Handle button click
function handleButtonClick(event) {
  // Deselect all buttons
  btns.forEach(button => button.classList.remove('selected'));
  
  // Select the clicked button
  const selectedButton = event.target;
  selectedButton.classList.add('selected');
  
  // Log the selected button's id
  console.log(selectedButton.id);
}

// Attach event listener to each button
btns.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});


function runbet(){
  let selectedButton = document.querySelector('.selected');
  if (selectedButton){
 if(document.querySelector('.selected').id == 'btn-05'){
   bet05()}
 else if(document.querySelector('.selected').id == 'btn-10'){
  bet01();}
  else if(document.querySelector('.selected').id == 'btn-25'){bet025();}
  else if(document.querySelector('.selected').id == 'btn-50'){bet050();}
  else if(document.querySelector('.selected').id == 'btn-100'){bet1();}
  else if(document.querySelector('.selected').id == 'btn-200'){bet2();}}
  else{alert('Please select a bet amount')};

  let pickered = document.querySelector('.picked');
    if(!pickered){
      alert('Please select a coin');
    }
  
}







const lightbutton = document.querySelector('.light-icon');
const body = document.body;
const stuff = document.querySelector('.bal');
const form = document.querySelector('.txt-option')
const forz = document.querySelector('.for')
const Giveaway = document.querySelector('.Giveaway')
const hr = document.querySelector('.hr')
lightbutton.onclick = function() {
  body.classList.toggle('light-theme');
  stuff.classList.toggle('light-theme');
  form.classList.toggle('light-theme');
  forz.classList.toggle('light-theme');
 Giveaway.classList.toggle('light-theme');
 hr.style.border='white solid 1px';
};


















const pick = document.querySelectorAll('.coinpick');


function pickpick(event) {

  pick.forEach(button => button.classList.remove('picked'));
  

  const selectedButton = event.target;
  selectedButton.classList.add('picked');
  
  
  console.log(selectedButton.id);
}


pick.forEach(button => {
  button.addEventListener('click', pickpick);
});
