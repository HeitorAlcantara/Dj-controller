var listaDeTecla = document.querySelectorAll('.tecla');

function tocaSom(idElementAudio) {
    const elemento = document.querySelector('#som_' + idElementAudio);

    if (elemento === null && elemento.localName !== 'audio') {
        return;
    } else {
        elemento.play();
    }
}

for (let aux = 0; aux <= listaDeTecla.length; aux++) {
    var tecla = listaDeTecla[aux];
    console.log(tecla)
}

const buttonRandomSound = document.querySelector('.tecla_random');
buttonRandomSound.addEventListener('click', () => {
    const elemento = document.querySelector('#som_tecla_pom');
    elemento.play();
})