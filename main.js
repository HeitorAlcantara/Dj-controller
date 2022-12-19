function tocaSom(idElementAudio) {
    const elemento = document.querySelector('#som_' + idElementAudio);

    if (elemento === null && elemento.localName !== 'audio') {
        return;
    } else {
        elemento.play();
    }
}

function ativaTecla(){
    tecla.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.code) {
            case "Numpad1":
                listaDeTecla[0].classList.add('ativa');
                sons = 'tecla_pom';
                tocaSom(sons);
                break;
            case "Numpad2":
                listaDeTecla[1].classList.add('ativa');
                sons = 'tecla_clap';
                tocaSom(sons);
                break;
            case "Numpad3":
                listaDeTecla[2].classList.add('ativa');
                sons = 'tecla_tim';
                tocaSom(sons);
                break;
            case "Numpad4":
                listaDeTecla[3].classList.add('ativa');
                sons = 'tecla_puff';
                tocaSom(sons);
                break;
            case "Numpad5":
                listaDeTecla[4].classList.add('ativa');
                sons = 'tecla_splash';
                tocaSom(sons);
                break;
            case "Numpad6":
                listaDeTecla[5].classList.add('ativa');
                sons = 'tecla_toim';
                tocaSom(sons);
                break;
            case "Numpad7":
                listaDeTecla[6].classList.add('ativa');
                sons = 'tecla_psh';
                tocaSom(sons);
                break;
            case "Numpad8":
                listaDeTecla[7].classList.add('ativa');
                sons = 'tecla_tic';
                tocaSom(sons);
                break;
            case "Numpad9":
                listaDeTecla[8].classList.add('ativa');
                sons = 'tecla_tom';
                tocaSom(sons);
                break;
            default:
                return;
        }
    })
}

function desativaTecla() {
    tecla.addEventListener("keyup", (event) => {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.code) {
            case "Numpad1":
                listaDeTecla[0].classList.remove('ativa');
                break;
            case "Numpad2":
                listaDeTecla[1].classList.remove('ativa');
                break;
            case "Numpad3":
                listaDeTecla[2].classList.remove('ativa');
                break;
            case "Numpad4":
                listaDeTecla[3].classList.remove('ativa');
                break;
            case "Numpad5":
                listaDeTecla[4].classList.remove('ativa');
                break;
            case "Numpad6":
                listaDeTecla[5].classList.remove('ativa');
                break;
            case "Numpad7":
                listaDeTecla[6].classList.remove('ativa');
                break;
            case "Numpad8":
                listaDeTecla[7].classList.remove('ativa');
                break;
            case "Numpad9":
                listaDeTecla[8].classList.remove('ativa');
                break;
            default:
                return;
        }
    })
}

var listaDeTecla = document.querySelectorAll('.tecla');

for (let aux = 0; aux <= listaDeTecla.length; aux++) {
    var tecla = listaDeTecla[aux];
    const sons = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(sons);
    }

    ativaTecla();
    desativaTecla();

    // tecla.onkeydown = (event) => {
    //     console.log(event)
    //     if (event.code === "Numpad1") { //or event.code
    //         tecla.classList.add('ativa');
    //         tocaSom(sons);
    //     }
    // }

    // tecla.onkeyup = () => {
    //     listaDeTecla[0].classList.remove('ativa');
    // }
}