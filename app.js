const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const content = document.getElementById('content');
const bullets = [...document.querySelectorAll('.bullet')]; //node bust

const MAX_STEPS = 4;
let currentStep = 1; // Update the current step instead using const

nextBtn.addEventListener('click', () => {
    // highlight the bullet
    const currentBullet = bullets[currentStep - 1];
    currentBullet.classList.add('completed');
    currentStep++; //increase by one
    previousBtn.disabled = false;
    if(currentStep === MAX_STEPS) {
        nextBtn.disabled = true;
        finishBtn.disabled = false;
    } //
    content.innerText = `Step Number ${currentStep}`;
});

previousBtn.addEventListener('click', () => {
    const previousBullet = bullets[currentStep - 2];
    previousBullet.classList.remove('completed');
    currentStep--;
    nextBtn.disabled = false;
    finishBtn.disabled = true;
    if(currentStep === 1) {
        previous.disabled = true;
    }
    content.innerText = `Step Number ${currentStep}`;
});

finishBtn.addEventListener('click', () => {
    location.reload();
});