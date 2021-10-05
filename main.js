let filmek=[];

class Film{


    constructor(nev,rendezo,kiadasiev){
        this.nev= nev;
        this.rendezo= rendezo;
        this.kiadasiev= kiadasiev;
    }
    
}
function hozzaadas() {
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadaseve = document.getElementById('kiadas').value;

    filmek.push(nev,rendezo,kiadaseve);

    document.getElementById('nev').value="";
    document.getElementById('rendezo').value="";
    document.getElementById('kiadas').value="";

    for (let i = 0; i < filmek.length; i++) {
        console.log(filmek[i]);
    }
    
}

document.getElementById('hozzaad').addEventListener('click', hozzaadas);