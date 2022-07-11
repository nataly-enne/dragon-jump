const dragon = document.querySelector('.dragon');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    dragon.classList.add('jump');
    
    setTimeout(() => {
        dragon.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const dragonPosition = +window.getComputedStyle(dragon).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    console.log(cloudsPosition);

    if (pipePosition <= 120 && pipePosition > 0 && dragonPosition < 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        dragon.style.animation = 'none';
        dragon.style.bottom = `${dragonPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        dragon.src = '../imgs/game-over.png';
        dragon.style.width = '120px';
        dragon.style.marginLeft = '50px';
    }

}, 10)

document.addEventListener('keydown', jump);