const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    /*função que recebe dois ( função . tempo )parametros ,
    quando o tempo for executado ele executa uma função*/
    setTimeout(()=> {
        mario.classList.remove('jump');
    } , 500);
}

const loop = setInterval (() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 120  && pipePosition > 0 && marioPosition < 80){
            
        
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.left = `${marioPosition}  px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

    }  

}, 20);

document.addEventListener('keydown' , jump);
