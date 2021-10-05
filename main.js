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
    let kiadasiev = document.getElementById('kiadasiev').value;

    
    if (nev != "" && rendezo != "" && kiadasiev != "") {
        let film=new Film(nev,rendezo,kiadasiev);
        filmek.push(film);
    }

    listazas();

    document.getElementById('nev').value="";
    document.getElementById('rendezo').value="";
    document.getElementById('kiadasiev').value="";

    
    
}
function listazas() {
    if (filmek.length !== 0) {
        let a = "<table class='table text-center table-striped'><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
        for (let i = 0; i < filmek.length; i++) {
            a += "<tr><td>" + filmek[i].nev + "</td><td>" + filmek[i].rendezo + "</td><td>" + filmek[i].kiadasiev + "</td></tr>";
        }

        a += "</table>";

        document.getElementById('tablazat').innerHTML = a;
    }
}

document.getElementById('hozzaad').addEventListener('click', hozzaadas);