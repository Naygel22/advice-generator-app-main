const app = document.querySelector('.app');

async function showRandomQuote() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();

    generateElements(jsonData);
}

function generateElements(element){
    const adviceTextAndNumber = document.createElement('div');
    adviceTextAndNumber.classList.add('adviceTextAndNumber');
    adviceTextAndNumber.textContent = `ADVICE #${element.slip.id}`
    app.appendChild(adviceTextAndNumber);

    const randomQuote = document.createElement('div');
    randomQuote.classList.add('randomQuote');
    randomQuote.textContent = `“${element.slip.advice}”`;
    app.appendChild(randomQuote);

    const dividerImg = document.createElement('img');
    dividerImg.classList.add('dividerImg');
    dividerImg.src = "images/pattern-divider-desktop.svg";
    app.appendChild(dividerImg);

    const circleContainer = document.createElement('div');
    circleContainer.classList.add('circleContainer');
    app.appendChild(circleContainer);
    
    circleContainer.addEventListener('click', () => {
      app.innerHTML = '';
      showRandomQuote();
    });
    
    const iconDice = document.createElement('img');
    iconDice.src = "images/icon-dice.svg";
    circleContainer.appendChild(iconDice);
}

showRandomQuote();
