

function name(randomnumber) {
  if (randomnumber < 5) {
    return 'James';
  } else if (randomnumber < 10) {
    return 'John';
  }
  else if (randomnumber < 15) {
    return 'William';
  }
  else if (randomnumber < 20) {
    return 'Oliver';
  }
  else if (randomnumber < 25) {
    return 'Ben';
  }
  else if (randomnumber < 30) {
    return 'Sophia';
  }
  else if (randomnumber < 35) {
    return 'Theo';
  }
else if (randomnumber < 40) {
    return 'Thomas';
  }
  else if (randomnumber < 50) {
    return 'Andrew';
  }
  else if (randomnumber < 60) {
    return 'Nick';
  }
  else if (randomnumber < 70) {
    return 'Chris';
  }
  else if (randomnumber < 75) {
    return 'Mason';
  }

  else if (randomnumber < 80) {
    return 'Charlie';
  }
  else if (randomnumber < 85) {
    return 'Saddiq'
  }
  else if (randomnumber < 90) {
    return 'Gamer2';
  }
  else if (randomnumber < 100) {
    return 'rexy';
  }
};

/*function namegen() {
  let namenum = Math.floor(Math.random() * 1000);
  const randomnumber = Math.floor(Math.random() * 100);
  //console.log(name(randomnumber) + namenum + ' flipped ' + cost(randomnumber) + ' SOL ' +amount(randomnumber) + ' times');
  
  

}*/





function cost(randomnumber) {
  switch (true) {
    case randomnumber < 18:
      return 0.05;
    case randomnumber < 36:
      return 0.1;
    case randomnumber < 54:
      return 0.25;
    case randomnumber < 72:
      return 0.5;
    case randomnumber < 90:
      return 1;
    case randomnumber < 100:
      return 2;
    default:
      return null; 
  }
}

let num1Value = '';
let num2Value = '';
let num3Value = '';
let normal1 = '';
let normal2 = '';
let normal3 = '';


function amount(randomnumber) {
  if (randomnumber <= 20) {
    randomnumber = 26;
  }
  return Math.floor(randomnumber / 20);
}

function defaultvalue(){
  const randomNumbers = [];
  const nameNums = []; 
  for(let i = 0; i < 3; i++){
    randomNumbers[i] = Math.floor(Math.random() * 100);
    nameNums[i] = Math.floor(Math.random() * 1000);
  }
  
  
 
  normal1 = name(randomNumbers[0]) + nameNums[0] + ' flipped ' + cost(randomNumbers[0]) + ' SOL ' + amount(randomNumbers[0]) + ' times';
  normal2 = name(randomNumbers[1]) + nameNums[1] + ' flipped ' + cost(randomNumbers[1]) + ' SOL ' + amount(randomNumbers[1]) + ' times';
  normal3 = name(randomNumbers[2]) + nameNums[2] + ' flipped ' + cost(randomNumbers[2]) + ' SOL ' + amount(randomNumbers[2]) + ' times';

  const button1 = document.querySelector('.past-1');
  button1.textContent = normal1;
  const button2 = document.querySelector('.past-2');
  button2.textContent = normal2;
  const button3 = document.querySelector('.past-3');
  button3.textContent = normal3;

  num1();
} 




function num1() {
  const randomnumber = Math.floor(Math.random() * 100);
  let namenum = Math.floor(Math.random() * 1000);

  num1Value = name(randomnumber) + namenum + ' flipped ' + cost(randomnumber) + ' SOL ' + amount(randomnumber) + ' times';


  const button1 = document.querySelector('.past-1');
  button1.textContent = num1Value;


  
  setTimeout(num1, 5200);
  setTimeout(num2, 5100);
  
}

function num2() {
  const button2 = document.querySelector('.past-2');
  num2Value = button2.textContent;
  button2.textContent = num1Value;

  const button3 = document.querySelector('.past-3');
  num3Value = button3.textContent;
  button3.textContent = num2Value;
}





defaultvalue();

const lightbutton = document.querySelector('.light-icon');
const body = document.body;
const textToChange = document.querySelector('.past-1');
const but2 = document.querySelector('.past-2');
const but3 = document.querySelector('.past-3');
const but4 = document.querySelector('.Rplays');
const but5 = document.querySelector('.TRUSTHEAD');

lightbutton.onclick = function() {
  body.classList.toggle('light-theme');
  
  if (textToChange.style.color === 'white') {
    textToChange.style.color = ''; 
    but2.style.color = '';
    but3.style.color = '';
    but4.style.color = ''; 
    but2.style.border = ''; 
    textToChange.style.border = ''; 
    but3.style.border = ''; 
    but5.style.color = '';
  } else {
    textToChange.style.color = 'white';
    but2.style.color = 'white';
    but3.style.color = 'white';
    but4.style.color = 'white';
    but2.style.border = '1px solid white';
    textToChange.style.border = '1px solid white';
    but3.style.border = '1px solid white';
    but5.style.color = 'white';
  }
};