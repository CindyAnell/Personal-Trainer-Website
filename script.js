
//reviews
document.addEventListener("DOMContentLoaded", function () {
    const ITEMS_PER_PAGE = 3;
  
    const items = document.querySelectorAll(".reviews-list li");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
  
    let currentPage = 0;
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  
    function showPage(page) {
      if (page < 0 || page >= totalPages) return;
  
      currentPage = page;
  
      const start = currentPage * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
  
      items.forEach((item, i) => {
        item.style.display = (i >= start && i < end) ? "" : "none";
      });
  
      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === totalPages - 1;
    }
  
    prevBtn.addEventListener("click", () => showPage(currentPage - 1));
    nextBtn.addEventListener("click", () => showPage(currentPage + 1));
  
    showPage(0);
  });

//darkmode & lightmode

  let darkmode= localStorage.getItem('darkmode')
  const lightMode = document.getElementById('light-mode')
  
  const enableDarkmode = () => {
      document.body.classList.add('darkmode')
      localStorage.setItem('darkmode', 'active')
  }
  
  const disableDarkmode = () =>{
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null)
  }
  
  if(darkmode ==="active") enableDarkmode()
  
  
  lightMode.addEventListener("click",() =>{
      darkmode = localStorage.getItem('darkmode')
      darkmode !== "active" ? enableDarkmode() : disableDarkmode()
  })
  
//guessing game
const form = document.querySelector('form');
const numGuessInput = document.getElementById('numGuess');
const gameOutput = document.getElementById('gameOutput');

let randomNumber = Math.floor(Math.random() * 10) + 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userGuess = parseInt(numGuessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    gameOutput.textContent = 'Please enter a number between 1 and 10.';
    return;
  }

  if (userGuess === randomNumber) {
    gameOutput.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    gameOutput.textContent = `Sorry, your guess is incorrect. The number was ${randomNumber}. Try again!`;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }

  numGuessInput.value = '';
});


//programs
const programSections = document.querySelectorAll('#programs > section');
const programButtons = document.querySelectorAll('.program-btn');
function showProgram(targetId) {
    programSections.forEach(section => {
        section.classList.remove('active-program-section');
        section.classList.add('program-section');
    });

    const target = document.getElementById(targetId);
    if (target) {
        target.classList.add('active-program-section');
        target.classList.remove('program-section');
    }
}

programButtons.forEach(button => {
    button.addEventListener('click', () => {
        const label = button.textContent.trim();
        let targetId = null;

        switch (label) {
            case 'Trial Session':
                targetId = 'program1';
                break;
            case '4 Week Program':
                targetId = 'program2';
                break;
            case '8 Week Program':
                targetId = 'program3';
                break;
            case '12 Week Program':
                targetId = 'program4';
                break;
        }

        if (targetId) {
            showProgram(targetId);
        }
    });
});
