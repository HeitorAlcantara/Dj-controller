listaDeTeclas = document.querySelectorAll('.tecla');
var random = 0;
function ativaTecla() {
    switch (random) {
        case 1:
            listaDeTeclas[0].classList.add('ativa');
            sons = 'tecla_pom';
            tocaSom(sons);
            break;
        case 2:
            listaDeTeclas[1].classList.add('ativa');
            sons = 'tecla_clap';
            tocaSom(sons);
            break;
        case 3:
            listaDeTeclas[2].classList.add('ativa');
            sons = 'tecla_tim';
            tocaSom(sons);
            break;
        case 4:
            listaDeTeclas[3].classList.add('ativa');
            sons = 'tecla_puff';
            tocaSom(sons);
            break;
        case 5:
            listaDeTeclas[4].classList.add('ativa');
            sons = 'tecla_splash';
            tocaSom(sons);
            break;
        case 6:
            listaDeTeclas[5].classList.add('ativa');
            sons = 'tecla_toim';
            tocaSom(sons);
            break;
        case 7:
            listaDeTeclas[6].classList.add('ativa');
            sons = 'tecla_psh';
            tocaSom(sons);
            break;
        case 8:
            listaDeTeclas[7].classList.add('ativa');
            sons = 'tecla_tic';
            tocaSom(sons);
            break;
        case 9:
            listaDeTeclas[8].classList.add('ativa');
            sons = 'tecla_tom';
            tocaSom(sons);
            break;
        default:
            return;
    }
}

function desativaTecla() {
    setInterval(()=> {
        for(let i=0; i < listaDeTeclas.length; i++){
            listaDeTeclas[i].classList.remove('ativa');
        }
    }, 1500);
}

function tocaSom(idElementAudio) {
    const elemento = document.querySelector('#som_' + idElementAudio);

    if (elemento === null) {
        return;
    } else if (elemento.localName !== 'audio') {
        return;
    } else {
        elemento.play();
    }
}

setInterval(() => {
    // random = Math.floor(Math.random() * 10);
    if (random != 0) {
        ativaTecla();
        desativaTecla();
        // console.log(random);
    }
}, 1000);





// switch (random) {
    //     case 1:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 2:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 3:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 4:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 5:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 6:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 7:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 8:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     case 9:
            
    //         listaDeTeclas[random].classList.remove('ativa');
    //         break;
    //     default:
    //         return;
    // }