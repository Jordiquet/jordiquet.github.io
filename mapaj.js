let areesatacants = 0;
let nombrejugadors = 0;
let territoristriats = 0;
let triaterritoris = false;
let triajugadors = true;
let torntria = 0;
let jugadors = [];
let torn = 0;
let mostrantvegueries = false;
let fase = 0;
let soldatsatacants = 0;
let soldatsdefensors = 0;
let victoria = false;
let comarcaatacant = undefined;
let dausatac = [];
let dausdefensa = [];
let soldatsrestants = 0;


let jugador1 = {
    nom: "jugador1",
    colorhover: "#990000",
    colorvorahover: "#dd0000",
    colorconquerit: "#bb0000",
    coloratacant: "#660000",
    colordefensa: "#ff0000",
    territoris: []
}

let jugador2 = {
    nom: "jugador2",
    colorhover: "#009900",
    colorvorahover: "#00dd00",
    colorconquerit: "#00bb00",
    coloratacant: "#006600",
    colordefensa: "#00ff00",
    territoris: []
}
let jugador3 = {
    nom:"jugador3",
    colorhover: "#000099",
    colorvorahover: "#0000dd",
    colorconquerit: "#0000bb",
    coloratacant: "#000066",
    colordefensa: "#0000ff",
    territoris: []
}
let jugador4 = {
    nom: "jugador4",
    colorhover: "#999900",
    colorvorahover: "#dddd00",
    colorconquerit: "#bbbb00",
    coloratacant: "#666600",
    colordefensa: "#ffff00",
    territoris: []
}
let jugador5 = {
    nom: "jugador5",
    colorhover: "#990099",
    colorvorahover: "#dd00dd",
    colorconquerit: "#bb00bb",
    coloratacant: "#660066",
    colordefensa: "#ff00ff",
    territoris: []
}
let jugador6 = {
    nom: "jugador6",
    colorhover: "#009999",
    colorvorahover: "#00dddd",
    colorconquerit: "#00bbbb",
    coloratacant: "#006666",
    colordefensa: "#00ffff",
    territoris: []
}
let jugadorsmax = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6];

function nombreJugadors(botojugador) {
    if (triajugadors == true) {
        nombrejugadors = botojugador.nombre;
        botojugador.style.fill = "#cccccc";
        triajugadors = false;
        triaterritoris = true;
        console.log(nombrejugadors);
        for (var i = 0; i < nombrejugadors; i++){
            jugadors[i] = jugadorsmax[i];
            jugadors[i].nombrepropietats = 0;
            jugadors[i].propietatsalacant = 0;
            jugadors[i].propietatsandorra = 0;
            jugadors[i].propietatsbarcelona = 0;
            jugadors[i].propietatscastello = 0;
            jugadors[i].propietatsgandia = 0;
            jugadors[i].propietatsgirona = 0;
            jugadors[i].propietatslleida = 0;
            jugadors[i].propietatsmanresa = 0;
            jugadors[i].propietatspalma = 0;
            jugadors[i].propietatsperpinya = 0;
            jugadors[i].propietatstarragona = 0;
            jugadors[i].propietatstortosa = 0;
            jugadors[i].propietatsvalencia = 0;
            jugadors[i].propietatsxiva = 0;
        }
    }
}


function passaTorn(un, dos, tres, quatre, cinc, sis) {
    if (triaterritoris == false && triajugadors == false && fase == 2) {
        if (torn < nombrejugadors - 1){
            torn += 1;
        }
        else {
            torn = 0;
        }
        if (torn == 0) {
            un.style.fill = '#cccccc';
            dos.style.fill = '#888888';
            tres.style.fill = '#888888';
            quatre.style.fill = '#888888';
            cinc.style.fill = '#888888';
            sis.style.fill = '#888888';
        }
        if (torn == 1) {
            un.style.fill = '#888888';
            dos.style.fill = '#cccccc';
            tres.style.fill = '#888888';
            quatre.style.fill = '#888888';
            cinc.style.fill = '#888888';
            sis.style.fill = '#888888';
        }
        if (torn == 2) {
            un.style.fill = '#888888';
            dos.style.fill = '#888888';
            tres.style.fill = '#cccccc';
            quatre.style.fill = '#888888';
            cinc.style.fill = '#888888';
            sis.style.fill = '#888888';
        }
        if (torn == 3) {
            un.style.fill = '#888888';
            dos.style.fill = '#888888';
            tres.style.fill = '#888888';
            quatre.style.fill = '#cccccc';
            cinc.style.fill = '#888888';
            sis.style.fill = '#888888';
        }
        if (torn == 4) {
            un.style.fill = '#888888';
            dos.style.fill = '#888888';
            tres.style.fill = '#888888';
            quatre.style.fill = '#888888';
            cinc.style.fill = '#cccccc';
            sis.style.fill = '#888888';
        }
        if (torn == 5) {
            un.style.fill = '#888888';
            dos.style.fill = '#888888';
            tres.style.fill = '#888888';
            quatre.style.fill = '#888888';
            cinc.style.fill = '#888888';
            sis.style.fill = '#cccccc';
        }
        console.log(torn + 1);
        fase = 0;
        jugadors[torn].nombrepropietats = 0;
        jugadors[torn].nombrepropietats = 0;
        jugadors[torn].propietatsalacant = 0;
        jugadors[torn].propietatsandorra = 0;
        jugadors[torn].propietatsbarcelona = 0;
        jugadors[torn].propietatscastello = 0;
        jugadors[torn].propietatsgandia = 0;
        jugadors[torn].propietatsgirona = 0;
        jugadors[torn].propietatslleida = 0;
        jugadors[torn].propietatsmanresa = 0;
        jugadors[torn].propietatspalma = 0;
        jugadors[torn].propietatsperpinya = 0;
        jugadors[torn].propietatstarragona = 0;
        jugadors[torn].propietatstortosa = 0;
        jugadors[torn].propietatsvalencia = 0;
        jugadors[torn].propietatsxiva = 0;
        soldatsrestants = 0;
        for (var i = 0; i < comarques.length; i++) {
            if (comarques[i].propietari == jugadors[torn]) {
                jugadors[torn].nombrepropietats += 1;
                console.log(jugadors[torn].nombrepropietats);
                if (comarques[i].vegueria == "campdegirona") {
                    jugadors[torn].propietatsgirona += 1;
                }
                if (comarques[i].vegueria == "areadebarcelona") {
                    jugadors[torn].propietatsbarcelona += 1;
                }
                if (comarques[i].vegueria == "comarquescentrals") {
                    jugadors[torn].propietatsmanresa += 1;
                }
                if (comarques[i].vegueria == "catalunyanord") {
                    jugadors[torn].propietatsperpinya += 1;
                }
                if (comarques[i].vegueria == "campdetarragona") {
                    jugadors[torn].propietatstarragona += 1;
                }
                if (comarques[i].vegueria == "altpirineu") {
                    jugadors[torn].propietatsandorra += 1;
                }
                if (comarques[i].vegueria == "plansdelleida") {
                    jugadors[torn].propietatslleida += 1;
                }
                if (comarques[i].vegueria == "terresdelebre") {
                    jugadors[torn].propietatstortosa += 1;
                }
                if (comarques[i].vegueria == "terresdecastello") {
                    jugadors[torn].propietatscastello += 1;
                }
                if (comarques[i].vegueria == "hortesdelxuquerturia") {
                    jugadors[torn].propietatsvalencia += 1;
                }
                if (comarques[i].vegueria == "ponentvalencia") {
                    jugadors[torn].propietatsxiva += 1;
                }
                if (comarques[i].vegueria == "muntanyesdelsud") {
                    jugadors[torn].propietatsgandia += 1;
                }
                if (comarques[i].vegueria == "riberesdelsud") {
                    jugadors[torn].propietatsalacant += 1;
                }
                if (comarques[i].vegueria == "illes") {
                    jugadors[torn].propietatspalma += 1;
                }
            }
        }
        soldatsrestants += Math.floor(jugadors[torn].nombrepropietats / 3);
        if (soldatsrestants < 3) {
            soldatsrestants = 3;
        }
        if (jugadors[torn].propietatsalacant == alacanti.comarquesvegueria){
            soldatsrestants += alacanti.comarquesvegueria;
        }
        if (jugadors[torn].propietatsandorra == andorra.comarquesvegueria){
            soldatsrestants += andorra.comarquesvegueria;
        }
        if (jugadors[torn].propietatsbarcelona == barcelones.comarquesvegueria){
            soldatsrestants += barcelones.comarquesvegueria;
        }
        if (jugadors[torn].propietatscastello == planaalta.comarquesvegueria){
            soldatsrestants += planaalta.comarquesvegueria;
        }
        if (jugadors[torn].propietatsgandia == safor.comarquesvegueria){
            soldatsrestants += safor.comarquesvegueria;
        }
        if (jugadors[torn].propietatsgirona == girones.comarquesvegueria){
            soldatsrestants += girones.comarquesvegueria;
        }
        if (jugadors[torn].propietatslleida == segria.comarquesvegueria){
            soldatsrestants += segria.comarquesvegueria;
        }
        if (jugadors[torn].propietatsmanresa == bages.comarquesvegueria){
            soldatsrestants += bages.comarquesvegueria;
        }
        if (jugadors[torn].propietatspalma == mallorca.comarquesvegueria){
            soldatsrestants += mallorca.comarquesvegueria;
        }
        if (jugadors[torn].propietatsperpinya == rossello.comarquesvegueria){
            soldatsrestants += rossello.comarquesvegueria;
        }
        if (jugadors[torn].propietatstarragona == tarragones.comarquesvegueria){
            soldatsrestants += tarragones.comarquesvegueria;
        }
        if (jugadors[torn].propietatstortosa == baixebre.comarquesvegueria){
            soldatsrestants += baixebre.comarquesvegueria;
        }
        if (jugadors[torn].propietatsvalencia == valencia.comarquesvegueria){
            soldatsrestants += valencia.comarquesvegueria;
        }
        if (jugadors[torn].propietatsxiva == foiadebunyol.comarquesvegueria){
            soldatsrestants += foiadebunyol.comarquesvegueria;
        }
    }
    else if (triaterritoris == false && triajugadors == false && soldatsrestants == 0) {
        fase += 1;
    }
}

/* si no estan conquerits es veuen blaus, i els veins no conquerits es fan groc fosc */
function mouseOver(areaidveins) {
    if (triajugadors == false && triaterritoris == false) {
        areaidveins[0].style.stroke = areaidveins[0].propietari.coloratacant;
    }
    areaidveins[0].style.strokeWidth = 15;
    if (triaterritoris == true && triajugadors == false && areaidveins[0].conquerit != true) {  /* triar */
        areaidveins[0].style.fill = jugadors[torntria].colorconquerit;
        areaidveins[0].conquerit = true;
        areaidveins[0].propietari = jugadors[torntria];
        //jugadors[torntria].nombrepropietats += 1;
        territoristriats += 1;
        areaidveins[0].defensa = false;
        areaidveins[0].soldats = 1;
        areaidveins[0].nombre.innerHTML = areaidveins[0].soldats;
        if (torntria == nombrejugadors - 1) {
            torntria = 0;
        }
        else{
            torntria +=1;
        }
        for (var i = 1; i < areaidveins.length; i++) {
            if (areaidveins[i].conquerit != true && areaidveins[i].defensa != true && areaidveins[i].atacant != true) {
                areaidveins[i].style.fill = "#c07700";
            }
        }
        if (territoristriats == 91) {
            triaterritoris = false;
            torn = nombrejugadors;
            unjugador.style.fill = '#cccccc';
            dosjugadors.style.fill = '#888888';
            tresjugadors.style.fill = '#888888';
            quatrejugadors.style.fill = '#888888';
            cincjugadors.style.fill = '#888888';
            sisjugadors.style.fill = '#888888';
            fase = 2;
        }
    }
    
    if (triajugadors == false && triaterritoris == false) {
        if (areaidveins[0].conquerit == true && areaidveins[0].defensa != true && areaidveins[0].atacant != true) {
            areaidveins[0].style.fill = areaidveins[0].propietari.colorhover;
            for (var i = 1; i < areaidveins.length; i++){
                if (areaidveins[i].conquerit == true && areaidveins[i].defensa != true && areaidveins[i].atacant != true) {
                //    areaidveins[i].style.fill = areaidveins[i].propietari.colorvorahover;
                }
            }
        }
    }
    

    if (areaidveins[0].conquerit != true && areaidveins[0].defensa != true && areaidveins[0].atacant != true) {
        areaidveins[0].style.fill = "#000066";
    }
    for (var i = 1; i < areaidveins.length; i++) {
        if (areaidveins[i].conquerit != true && areaidveins[i].defensa != true && areaidveins[i].atacant != true) {
            areaidveins[i].style.fill = "#c07700";
        }
    }
    /*
    console.log(areaidveins[0].id);
    console.log(areaidveins[0].class);
    console.log(areaidveins[0].style.fill);
    console.log(areaidveins[0].conquerit);
    console.log(areaidveins[0].atacant);
    console.log(areaidveins[0].defensa);
    */
}

/* si no estan conquerits tornen a ser grocs */
function mouseOut(areaidveins) {
    areaidveins[0].style.stroke = "#000000";
    areaidveins[0].style.strokeWidth = 5;
    if (triajugadors == false && triaterritoris == false) {
        if (areaidveins[0].conquerit == true && areaidveins[0].atacant != true) {
            for (var i = 0; i < areaidveins.length; i++) {
                if(areaidveins[i].atacant != true && areaidveins[i].defensa != true) {
                    areaidveins[i].style.fill = areaidveins[i].propietari.colorconquerit;
                }
            }
        }
    }

    for (var i = 0; i < areaidveins.length; i++) {
        if (areaidveins[i].conquerit != true && areaidveins[i].defensa != true && areaidveins[i].atacant != true) {
            areaidveins[i].style.fill = "#f0aa15";
        }
    }
}

/* si es conquereixen es fan roig fosc i si es perden es tornen blaus */
function onClick(areaidveins) {
    if (areaidveins[0].defensa == true) {                              /* conquerir */
        soldatsdefensors = areaidveins[0].soldats;
        dausatac = [];
        dausdefensa = [];
        for (var i = 0; i < soldatsatacants; i++) {
            if (i > 2) {
                break;
            }
            dausatac[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        }
        for (var i = 0; i < soldatsdefensors; i++) {
            if (i > 1) {
                break;
            }
            dausdefensa[i] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        }
        dausatac = dausatac.sort(function(a, b){return b-a});
        dausdefensa = dausdefensa.sort(function(a, b){return b-a});
        console.log(dausatac);
        console.log(dausdefensa);
        if (dausatac.length > dausdefensa.length){
            for (var i = 0; i < dausdefensa.length; i++) {
                if (dausatac[i] > dausdefensa[i] && areaidveins[0].soldats > 0 && comarcaatacant.soldats > 1) {
                    areaidveins[0].soldats -= 1;
                    soldatsdefensors -= 1;
                    areaidveins[0].nombre.innerHTML = areaidveins[0].soldats;
                }
                else if (dausatac[i] <= dausdefensa[i] && comarcaatacant.soldats > 1) {
                    comarcaatacant.soldats -= 1;
                    soldatsatacants -= 1;
                    comarcaatacant.nombre.innerHTML = comarcaatacant.soldats;
                }
            }
        }
        else {
            for (var i = 0; i < dausatac.length; i++) {
                if (dausatac[i] > dausdefensa[i] && areaidveins[0].soldats > 0 && comarcaatacant.soldats > 1) {
                    areaidveins[0].soldats -= 1;
                    soldatsdefensors -= 1;
                    areaidveins[0].nombre.innerHTML = areaidveins[0].soldats;
                }
                else if (dausatac[i] <= dausdefensa[i] && comarcaatacant.soldats > 1) {
                    comarcaatacant.soldats -= 1;
                    soldatsatacants -= 1;
                    comarcaatacant.nombre.innerHTML = comarcaatacant.soldats;
                }
            }
        }
        if (areaidveins[0].soldats == 0){
            victoria = true;
        }
        else if (soldatsatacants < 1) {
            comarcaatacant.atacant = false;
            areesatacants -= 1;
            comarcaatacant.style.fill = comarcaatacant.propietari.colorconquerit;
            for (var i = 0; i < comarques.length; i++) {
                    comarques[i].style.fill = comarques[i].propietari.colorconquerit;
                    comarques[i].defensa = false;
            }
            victoria = false;
        }
        if (victoria == true) {
            areaidveins[0].style.fill = jugadors[torn].colorconquerit;
            areaidveins[0].conquerit = true;
            areaidveins[0].defensa = false;
            areaidveins[0].propietari = jugadors[torn];
            areaidveins[0].style.stroke = areaidveins[0].propietari.coloratacant;
            soldatsatacants -= 1;
            comarcaatacant.soldats -= 1;
            comarcaatacant.nombre.innerHTML = comarcaatacant.soldats;
            areaidveins[0].soldats += 1;
            areaidveins[0].nombre.innerHTML = areaidveins[0].soldats;
            victoria = false;
        }
    }
    if (areaidveins[0].atacant == true && areesatacants == 1) {    /* desatacar */
        areaidveins[0].atacant = false;
        areesatacants -= 1;
        areaidveins[0].style.fill = areaidveins[0].propietari.colorconquerit;
        for (var i = 1; i < areaidveins.length; i++) {
            areaidveins[i].style.fill = areaidveins[i].propietari.colorconquerit;
            areaidveins[i].defensa = false;
        }
    }  
    if (fase == 0 && areaidveins[0].propietari == jugadors[torn]) {   /* afegir soldats */ /////////////////////////////////////////
        if (soldatsrestants > 0) {
            areaidveins[0].soldats += 1;
            areaidveins[0].nombre.innerHTML = areaidveins[0].soldats;
            soldatsrestants -= 1;
            console.log("Soldats restants:");
            console.log(soldatsrestants);
            if (soldatsrestants == 0) {
                fase = 1;
                console.log("Fase d'atac")
            }
        }
    }
    /* desconquerir */
    /*
    else {
        for (var i = 1; i < areaidveins.length; i++) {
            if (areaidveins[i].atacant == true) {
                areaidveins[0].defensa = true;
            }
        }
        if (areaidveins[0].defensa == true) {
            areaidveins[0].style.fill = "#cc0000";
        }
        else{
            areaidveins[0].style.fill = "#000066";
        }
        areaidveins[0].conquerit = false;
        for (var i = 1; i < areaidveins.length; i++) {
            if (areaidveins[i].conquerit != true && areaidveins[i].defensa != true && areaidveins[i].atacant != true) {
                areaidveins[i].style.fill = "#c07700";
            }
        }
    }
    */
}

/* si està conquerit, els veins es tornen roig clar, i en mode defensa */
function dobleClick(areaidveins) {
    if (triaterritoris == false && triajugadors == false && fase == 1) {
        if (areaidveins[0].conquerit == true && areesatacants == 0) {
            if (areaidveins[0].propietari == jugadors[torn]) {
                areaidveins[0].atacant = true;
                areaidveins[0].style.fill = jugadors[torn].coloratacant;
                soldatsatacants = areaidveins[0].soldats - 1;
                comarcaatacant = areaidveins[0];
                areesatacants += 1;                                                 /* arreglant el color */
                for (var i = 1; i < areaidveins.length; i++) {
                    if (soldatsatacants > 0 && areaidveins[i].propietari != jugadors[torn]) {
                        areaidveins[i].style.fill = areaidveins[i].propietari.colordefensa;
                        areaidveins[i].defensa = true;
                    }
                }
            }
        }
    }
}

function mostraVegueries(comarques) {
 //   if (triajugadors == false && triaterritoris == false) {
        if (mostrantvegueries == false) {
            for (var i = 0; i < comarques.length; i++) {
                comarques[i].colorjoc = comarques[i].style.fill;
                if (comarques[i].classList[0] == "campdegirona") {
                    comarques[i].style.fill = '#8888ff';
                }
                if (comarques[i].classList[0] == "areadebarcelona") {
                    comarques[i].style.fill = '#ff88aa';
                }
                if (comarques[i].classList[0] == "comarquescentrals") {
                    comarques[i].style.fill = '#ffff88';
                }
                if (comarques[i].classList[0] == "catalunyanord") {
                    comarques[i].style.fill = '#ff88ff';
                }
                if (comarques[i].classList[0] == "campdetarragona") {
                    comarques[i].style.fill = '#88aaff';
                }
                if (comarques[i].classList[0] == "altpirineu") {
                    comarques[i].style.fill = '#88ffff';
                }
                if (comarques[i].classList[0] == "plansdelleida") {
                    comarques[i].style.fill = '#ff8888';
                }
                if (comarques[i].classList[0] == "terresdelebre") {
                    comarques[i].style.fill = '#88ff88';
                }
                if (comarques[i].classList[0] == "terresdecastello") {
                    comarques[i].style.fill = '#8888ff';
                }
                if (comarques[i].classList[0] == "hortesdelxuquerturia") {
                    comarques[i].style.fill = '#ff88ff';
                }
                if (comarques[i].classList[0] == "ponentvalencia") {
                    comarques[i].style.fill = '#ffff88';
                }
                if (comarques[i].classList[0] == "muntanyesdelsud") {
                    comarques[i].style.fill = '#88ffff';
                }
                if (comarques[i].classList[0] == "riberesdelsud") {
                    comarques[i].style.fill = '#ff8888';
                }
                if (comarques[i].classList[0] == "illes") {
                    comarques[i].style.fill = '#ffaaff';
                }
            }
            mostrantvegueries = true;
        }
        else{
            for (var i = 0; i < comarques.length; i++) {
                comarques[i].style.fill = comarques[i].colorjoc;
            }
            mostrantvegueries = false;
        }
  //  }
}


let botojugador = document.getElementById("jugadors");
botojugador.style.fill = "#cccccc";
console.log(botojugador);

botojugador.onclick = function() {passaTorn(unjugador, dosjugadors, tresjugadors, quatrejugadors, cincjugadors, sisjugadors)};

let unjugador = document.getElementById("unjugador");
unjugador.style.fill = "#888888";
unjugador.nombre = 1;
console.log(unjugador);

let dosjugadors = document.getElementById("dosjugadors");
dosjugadors.style.fill = "#888888";
dosjugadors.nombre = 2;
console.log(dosjugadors);

let tresjugadors = document.getElementById("tresjugadors");
tresjugadors.style.fill = "#888888";
tresjugadors.nombre = 3;
console.log(tresjugadors);

let quatrejugadors = document.getElementById("quatrejugadors");
quatrejugadors.style.fill = "#888888";
quatrejugadors.nombre = 4;
console.log(quatrejugadors);

let cincjugadors = document.getElementById("cincjugadors");
cincjugadors.style.fill = "#888888";
cincjugadors.nombre = 5;
console.log(cincjugadors);

let sisjugadors = document.getElementById("sisjugadors");
sisjugadors.style.fill = "#888888";
sisjugadors.nombre = 6;
console.log(sisjugadors);

unjugador.onclick = function() {nombreJugadors(unjugador)};

dosjugadors.onclick = function() {nombreJugadors(dosjugadors)};

tresjugadors.onclick = function() {nombreJugadors(tresjugadors)};

quatrejugadors.onclick = function() {nombreJugadors(quatrejugadors)};

cincjugadors.onclick = function() {nombreJugadors(cincjugadors)};

sisjugadors.onclick = function() {nombreJugadors(sisjugadors)};


let botovegueries = document.getElementById("costa");

botovegueries.onclick = function() {mostraVegueries(comarques)};


let girones = document.getElementById("girones");
girones.style.fill = "#f0aa15";
console.log(girones);

let baixemporda = document.getElementById("baixemporda");
baixemporda.style.fill = "#f0aa15";
console.log(baixemporda);

let altemporda = document.getElementById("altemporda");
altemporda.style.fill = "#f0aa15";
console.log(altemporda);

let pladelestany = document.getElementById("pladelestany");
pladelestany.style.fill = "#f0aa15";
console.log(pladelestany);

let selva = document.getElementById("selva");
selva.style.fill = "#f0aa15";
console.log(selva);

let garrotxa = document.getElementById("garrotxa");
garrotxa.style.fill = "#f0aa15";
console.log(garrotxa);

let barcelones = document.getElementById("barcelones");
barcelones.style.fill = "#f0aa15";
console.log(barcelones);

let vallesoriental = document.getElementById("vallesoriental");
vallesoriental.style.fill = "#f0aa15";
console.log(vallesoriental);

let vallesoccidental = document.getElementById("vallesoccidental");
vallesoccidental.style.fill = "#f0aa15";
console.log(vallesoccidental);

let maresme = document.getElementById("maresme");
maresme.style.fill = "#f0aa15";
console.log(maresme);

let baixllobregat = document.getElementById("baixllobregat");
baixllobregat.style.fill = "#f0aa15";
console.log(baixllobregat);

let ripolles = document.getElementById("ripolles");
ripolles.style.fill = "#f0aa15";
console.log(ripolles);

let bergueda = document.getElementById("bergueda");
bergueda.style.fill = "#f0aa15";
console.log(bergueda);

let solsones = document.getElementById("solsones");
solsones.style.fill = "#f0aa15";
console.log(solsones);

let bages = document.getElementById("bages");
bages.style.fill = "#f0aa15";
console.log(bages);

let moianes = document.getElementById("moianes");
moianes.style.fill = "#f0aa15";
console.log(moianes);

let osona = document.getElementById("osona");
osona.style.fill = "#f0aa15";
console.log(osona);

let capcir = document.getElementById("capcir");
capcir.style.fill = "#f0aa15";
console.log(capcir);

let fenolleda = document.getElementById("fenolleda");
fenolleda.style.fill = "#f0aa15";
console.log(fenolleda);

let altacerdanya = document.getElementById("altacerdanya");
altacerdanya.style.fill = "#f0aa15";
console.log(altacerdanya);

let baixacerdanya = document.getElementById("baixacerdanya");
baixacerdanya.style.fill = "#f0aa15";
console.log(baixacerdanya);

let conflent = document.getElementById("conflent");
conflent.style.fill = "#f0aa15";
console.log(conflent);

let rossello = document.getElementById("rossello");
rossello.style.fill = "#f0aa15";
console.log(rossello);

let vallespir = document.getElementById("vallespir");
vallespir.style.fill = "#f0aa15";
console.log(vallespir);

let anoia = document.getElementById("anoia");
anoia.style.fill = "#f0aa15";
console.log(anoia);

let tarragones = document.getElementById("tarragones");
tarragones.style.fill = "#f0aa15";
console.log(tarragones);

let concadebarbera = document.getElementById("concadebarbera");
concadebarbera.style.fill = "#f0aa15";
console.log(concadebarbera);

let garraf = document.getElementById("garraf");
garraf.style.fill = "#f0aa15";
console.log(garraf);

let altcamp = document.getElementById("altcamp");
altcamp.style.fill = "#f0aa15";
console.log(altcamp);

let altpenedes = document.getElementById("altpenedes");
altpenedes.style.fill = "#f0aa15";
console.log(altpenedes);

let baixcamp = document.getElementById("baixcamp");
baixcamp.style.fill = "#f0aa15";
console.log(baixcamp);

let baixpenedes = document.getElementById("baixpenedes");
baixpenedes.style.fill = "#f0aa15";
console.log(baixpenedes);

let pallarssobira = document.getElementById("pallarssobira");
pallarssobira.style.fill = "#f0aa15";
console.log(pallarssobira);

let pallarsjussa = document.getElementById("pallarsjussa");
pallarsjussa.style.fill = "#f0aa15";
console.log(pallarsjussa);

let valldaran = document.getElementById("valldaran");
valldaran.style.fill = "#f0aa15";
console.log(valldaran);

let altaribagorca = document.getElementById("altaribagorca");
altaribagorca.style.fill = "#f0aa15";
console.log(altaribagorca);

let ribagorca = document.getElementById("ribagorca");
ribagorca.style.fill = "#f0aa15";
console.log(ribagorca);

let alturgell = document.getElementById("alturgell");
alturgell.style.fill = "#f0aa15";
console.log(alturgell);

let andorra = document.getElementById("andorra");
andorra.style.fill = "#f0aa15";
console.log(andorra);

let urgell = document.getElementById("urgell");
urgell.style.fill = "#f0aa15";
console.log(urgell);

let llitera = document.getElementById("llitera");
llitera.style.fill = "#f0aa15";
console.log(llitera);

let baixcinca = document.getElementById("baixcinca");
baixcinca.style.fill = "#f0aa15";
console.log(baixcinca);

let noguera = document.getElementById("noguera");
noguera.style.fill = "#f0aa15";
console.log(noguera);

let pladurgell = document.getElementById("pladurgell");
pladurgell.style.fill = "#f0aa15";
console.log(pladurgell);

let segarra = document.getElementById("segarra");
segarra.style.fill = "#f0aa15";
console.log(segarra);

let segria = document.getElementById("segria");
segria.style.fill = "#f0aa15";
console.log(segria);

let garrigues = document.getElementById("garrigues");
garrigues.style.fill = "#f0aa15";
console.log(garrigues);

let montsia = document.getElementById("montsia");
montsia.style.fill = "#f0aa15";
console.log(montsia);

let priorat = document.getElementById("priorat");
priorat.style.fill = "#f0aa15";
console.log(priorat);

let baixebre = document.getElementById("baixebre");
baixebre.style.fill = "#f0aa15";
console.log(baixebre);

let riberadebre = document.getElementById("riberadebre");
riberadebre.style.fill = "#f0aa15";
console.log(riberadebre);

let terraalta = document.getElementById("terraalta");
terraalta.style.fill = "#f0aa15";
console.log(terraalta);

let matarranya = document.getElementById("matarranya");
matarranya.style.fill = "#f0aa15";
console.log(matarranya);

let alcalaten = document.getElementById("alcalaten");
alcalaten.style.fill = "#f0aa15";
console.log(alcalaten);

let altmaestrat = document.getElementById("altmaestrat");
altmaestrat.style.fill = "#f0aa15";
console.log(altmaestrat);

let ports = document.getElementById("ports");
ports.style.fill = "#f0aa15";
console.log(ports);

let baixmaestrat = document.getElementById("baixmaestrat");
baixmaestrat.style.fill = "#f0aa15";
console.log(baixmaestrat);

let planaalta = document.getElementById("planaalta");
planaalta.style.fill = "#f0aa15";
console.log(planaalta);

let planabaixa = document.getElementById("planabaixa");
planabaixa.style.fill = "#f0aa15";
console.log(planabaixa);

let campdemorvedre = document.getElementById("campdemorvedre");
campdemorvedre.style.fill = "#f0aa15";
console.log(campdemorvedre);

let campdeturia = document.getElementById("campdeturia");
campdeturia.style.fill = "#f0aa15";
console.log(campdeturia);

let hortasud = document.getElementById("hortasud");
hortasud.style.fill = "#f0aa15";
console.log(hortasud);

let hortaoest = document.getElementById("hortaoest");
hortaoest.style.fill = "#f0aa15";
console.log(hortaoest);

let hortanord = document.getElementById("hortanord");
hortanord.style.fill = "#f0aa15";
console.log(hortanord);

let valencia = document.getElementById("valencia");
valencia.style.fill = "#f0aa15";
console.log(valencia);

let riberabaixa = document.getElementById("riberabaixa");
riberabaixa.style.fill = "#f0aa15";
console.log(riberabaixa);

let riberaalta = document.getElementById("riberaalta");
riberaalta.style.fill = "#f0aa15";
console.log(riberaalta);

let canaldenavarres = document.getElementById("canaldenavarres");
canaldenavarres.style.fill = "#f0aa15";
console.log(canaldenavarres);

let valldecofrents = document.getElementById("valldecofrents");
valldecofrents.style.fill = "#f0aa15";
console.log(valldecofrents);

let requenautiel = document.getElementById("requenautiel");
requenautiel.style.fill = "#f0aa15";
console.log(requenautiel);

let foiadebunyol = document.getElementById("foiadebunyol");
foiadebunyol.style.fill = "#f0aa15";
console.log(foiadebunyol);

let racodademus = document.getElementById("racodademus");
racodademus.style.fill = "#f0aa15";
console.log(racodademus);

let serrans = document.getElementById("serrans");
serrans.style.fill = "#f0aa15";
console.log(serrans);

let altpalancia = document.getElementById("altpalancia");
altpalancia.style.fill = "#f0aa15";
console.log(altpalancia);

let altmillars = document.getElementById("altmillars");
altmillars.style.fill = "#f0aa15";
console.log(altmillars);

let alcoia = document.getElementById("alcoia");
alcoia.style.fill = "#f0aa15";
console.log(alcoia);

let marinabaixa = document.getElementById("marinabaixa");
marinabaixa.style.fill = "#f0aa15";
console.log(marinabaixa);

let marinaalta = document.getElementById("marinaalta");
marinaalta.style.fill = "#f0aa15";
console.log(marinaalta);

let comtat = document.getElementById("comtat");
comtat.style.fill = "#f0aa15";
console.log(comtat);

let valldalbaida = document.getElementById("valldalbaida");
valldalbaida.style.fill = "#f0aa15";
console.log(valldalbaida);

let costera = document.getElementById("costera");
costera.style.fill = "#f0aa15";
console.log(costera);

let safor = document.getElementById("safor");
safor.style.fill = "#f0aa15";
console.log(safor);

let baixsegura = document.getElementById("baixsegura");
baixsegura.style.fill = "#f0aa15";
console.log(baixsegura);

let baixvinalopo = document.getElementById("baixvinalopo");
baixvinalopo.style.fill = "#f0aa15";
console.log(baixvinalopo);

let vinalopomitja = document.getElementById("vinalopomitja");
vinalopomitja.style.fill = "#f0aa15";
console.log(vinalopomitja);

let altvinalopo = document.getElementById("altvinalopo");
altvinalopo.style.fill = "#f0aa15";
console.log(altvinalopo);

let alacanti = document.getElementById("alacanti");
alacanti.style.fill = "#f0aa15";
console.log(alacanti);

let pitiuses = document.getElementById("pitiuses");
pitiuses.style.fill = "#f0aa15";
console.log(pitiuses);

let mallorca = document.getElementById("mallorca");
mallorca.style.fill = "#f0aa15";
console.log(mallorca);

let menorca = document.getElementById("menorca");
menorca.style.fill = "#f0aa15";
console.log(menorca);

let alguer = document.getElementById("alguer");
alguer.style.fill = "#f0aa15";
console.log(alguer);

let comarques = [
    
    baixemporda,
    pladelestany,
    garrotxa,
    selva,
    girones, 
    altemporda,
    
    barcelones,
    vallesoccidental,
    vallesoriental,
    maresme,
    baixllobregat,
    
    ripolles,
    bergueda,
    solsones,
    bages,
    moianes,
    osona,
    
    capcir,
    fenolleda,
    altacerdanya,
    baixacerdanya,
    conflent,
    rossello,
    vallespir,
    
    anoia,
    tarragones,
    concadebarbera,
    garraf,
    altcamp,
    altpenedes,
    baixcamp,
    baixpenedes,
    
    pallarssobira,
    pallarsjussa,
    valldaran,
    altaribagorca,
    ribagorca,
    alturgell,
    andorra,
    
    urgell,
    llitera,
    baixcinca,
    noguera,
    pladurgell,
    segarra,
    segria,
    garrigues,
    
    montsia,
    priorat,
    baixebre,
    riberadebre,
    terraalta,
    matarranya,
    
    alcalaten,
    altmaestrat,
    ports,
    baixmaestrat,
    planaalta,
    planabaixa,
    
    campdemorvedre,
    campdeturia,
    valencia,
    hortanord,
    hortaoest,
    hortasud,
    riberabaixa,
    riberaalta,
    
    canaldenavarres,
    valldecofrents,
    requenautiel,
    foiadebunyol,
    racodademus,
    serrans,
    altpalancia,
    altmillars,
    
    marinabaixa,
    marinaalta,
    comtat,
    valldalbaida,
    alcoia,
    costera,
    safor,
    
    baixsegura,
    baixvinalopo,
    vinalopomitja,
    altvinalopo,
    alacanti,
    
    pitiuses,
    mallorca,
    menorca,
    alguer
    
];

    
for (var i = 0; i < comarques.length; i++) {
    if (comarques[i].classList[0] == "campdegirona") {
        comarques[i].vegueria = "campdegirona";
        comarques[i].comarquesvegueria = 6;
    }
    if (comarques[i].classList[0] == "areadebarcelona") {
        comarques[i].vegueria = "areadebarcelona";
        comarques[i].comarquesvegueria = 5;
    }
    if (comarques[i].classList[0] == "comarquescentrals") {
        comarques[i].vegueria = "comarquescentrals";
        comarques[i].comarquesvegueria = 6;
    }
    if (comarques[i].classList[0] == "catalunyanord") {
        comarques[i].vegueria = "catalunyanord";
        comarques[i].comarquesvegueria = 7;
    }
    if (comarques[i].classList[0] == "campdetarragona") {
        comarques[i].vegueria = "campdetarragona";
        comarques[i].comarquesvegueria = 8;
    }
    if (comarques[i].classList[0] == "altpirineu") {
        comarques[i].vegueria = "altpirineu";
        comarques[i].comarquesvegueria = 7;
    }
    if (comarques[i].classList[0] == "plansdelleida") {
        comarques[i].vegueria = "plansdelleida";
        comarques[i].comarquesvegueria = 8;
    }
    if (comarques[i].classList[0] == "terresdelebre") {
        comarques[i].vegueria = "terresdelebre";
        comarques[i].comarquesvegueria = 6;
    }
    if (comarques[i].classList[0] == "terresdecastello") {
        comarques[i].vegueria = "terresdecastello";
        comarques[i].comarquesvegueria = 6;
    }
    if (comarques[i].classList[0] == "hortesdelxuquerturia") {
        comarques[i].vegueria = "hortesdelxuquerturia";
        comarques[i].comarquesvegueria = 8;
    }
    if (comarques[i].classList[0] == "ponentvalencia") {
        comarques[i].vegueria = "ponentvalencia";
        comarques[i].comarquesvegueria = 8;
    }
    if (comarques[i].classList[0] == "muntanyesdelsud") {
        comarques[i].vegueria = "muntanyesdelsud";
        comarques[i].comarquesvegueria = 7;
    }
    if (comarques[i].classList[0] == "riberesdelsud") {
        comarques[i].vegueria = "riberesdelsud";
        comarques[i].comarquesvegueria = 5;
    }
    if (comarques[i].classList[0] == "illes") {
        comarques[i].vegueria = "illes";
        comarques[i].comarquesvegueria = 4;
    }
}

for (var i = 0; i < 91; i++) {
    comarques[i].soldats = 0;
    comarques[i].nombre = document.getElementById(i.toString());
    //comarques[i].onclick = function() {canviaNombre(comarques[i])};
}

let girones_veins = [girones, baixemporda, altemporda, pladelestany, selva, garrotxa];
let baixemporda_veins = [baixemporda, altemporda, girones, selva, alguer];
let altemporda_veins = [altemporda, baixemporda, girones, pladelestany, garrotxa, vallespir, rossello];
let pladelestany_veins = [pladelestany, girones, altemporda, garrotxa];
let selva_veins = [selva, girones, baixemporda, garrotxa, vallesoriental, maresme, osona];
let garrotxa_veins = [garrotxa, girones, selva, altemporda, pladelestany, ripolles, osona, vallespir];
let barcelones_veins = [barcelones, maresme, vallesoriental, vallesoccidental, baixllobregat, alguer, menorca, mallorca];
let vallesoriental_veins = [vallesoriental, barcelones, maresme, vallesoccidental, selva, osona, moianes];
let vallesoccidental_veins = [vallesoccidental, barcelones, vallesoriental, baixllobregat, moianes, bages];
let maresme_veins = [maresme, barcelones, vallesoriental, selva];
let baixllobregat_veins = [baixllobregat, barcelones, vallesoccidental, bages, anoia, altpenedes, garraf];
let ripolles_veins = [ripolles, bergueda, osona, garrotxa, conflent, vallespir, baixacerdanya, altacerdanya];
let bergueda_veins = [bergueda, ripolles, osona, bages, solsones, baixacerdanya, alturgell];
let solsones_veins = [solsones, bergueda, bages, anoia, segarra, noguera, alturgell];
let bages_veins = [bages, solsones, bergueda, moianes, osona, baixllobregat, vallesoccidental, anoia];
let moianes_veins = [moianes, bages, osona, vallesoccidental, vallesoriental];
let osona_veins = [osona, ripolles, bergueda, bages, moianes, vallesoriental, selva, garrotxa];
let capcir_veins = [capcir, conflent, altacerdanya];
let fenolleda_veins = [fenolleda, rossello, conflent];
let altacerdanya_veins = [altacerdanya, baixacerdanya, ripolles, conflent, capcir, andorra];
let baixacerdanya_veins = [baixacerdanya, altacerdanya, ripolles, bergueda, alturgell, andorra];
let conflent_veins = [conflent, fenolleda, rossello, vallespir, ripolles, altacerdanya, capcir];
let rossello_veins = [rossello, fenolleda, conflent, vallespir, altemporda];
let vallespir_veins = [vallespir, rossello, conflent, ripolles, garrotxa, altemporda];
let anoia_veins = [anoia, solsones, bages, baixllobregat, altpenedes, altcamp, concadebarbera, segarra];
let tarragones_veins = [tarragones, baixpenedes, baixcamp, altcamp, mallorca];
let concadebarbera_veins = [concadebarbera, anoia, altcamp, baixcamp, segarra, urgell, garrigues, priorat];
let garraf_veins = [garraf, baixllobregat, altpenedes, baixpenedes];
let altcamp_veins = [altcamp, anoia, concadebarbera, baixcamp, tarragones, baixpenedes, altpenedes];
let altpenedes_veins = [altpenedes, baixllobregat, anoia, altcamp, baixpenedes, garraf];
let baixcamp_veins = [baixcamp, concadebarbera, altcamp, tarragones, priorat, riberadebre, baixebre];
let baixpenedes_veins = [baixpenedes, garraf, altpenedes, altcamp, tarragones];
let pallarssobira_veins = [pallarssobira, andorra, alturgell, pallarsjussa, altaribagorca, valldaran];
let pallarsjussa_veins = [pallarsjussa, pallarssobira, alturgell, ribagorca, altaribagorca, noguera];
let valldaran_veins = [valldaran, pallarssobira, altaribagorca, ribagorca];
let altaribagorca_veins = [altaribagorca, valldaran, pallarssobira, pallarsjussa, ribagorca];
let ribagorca_veins = [ribagorca, valldaran, altaribagorca, pallarsjussa, noguera, llitera];
let alturgell_veins = [alturgell, andorra, pallarssobira, pallarsjussa, solsones, bergueda, baixacerdanya, noguera];
let andorra_veins = [andorra, pallarssobira, alturgell, baixacerdanya, altacerdanya];
let urgell_veins = [urgell, noguera, segarra, concadebarbera, garrigues, pladurgell];
let llitera_veins = [llitera, ribagorca, noguera, segria];
let baixcinca_veins = [baixcinca, segria, riberadebre, terraalta];
let noguera_veins = [noguera, ribagorca, pallarsjussa, alturgell, solsones, segarra, urgell, pladurgell, segria, llitera];
let pladurgell_veins = [pladurgell, noguera, urgell, garrigues, segria];
let segarra_veins = [segarra, anoia, solsones, noguera, urgell, concadebarbera];
let segria_veins = [segria, llitera, noguera, pladurgell, garrigues, baixcinca, riberadebre];
let garrigues_veins = [garrigues, segria, pladurgell, urgell, concadebarbera, priorat, riberadebre];
let montsia_veins = [montsia, baixebre, matarranya, baixmaestrat];
let priorat_veins = [priorat, garrigues, concadebarbera, baixcamp, riberadebre];
let baixebre_veins = [baixebre, baixcamp, riberadebre, terraalta, matarranya, montsia];
let riberadebre_veins = [riberadebre, baixcinca, segria, garrigues, priorat, baixcamp, baixebre, terraalta];
let terraalta_veins = [terraalta, baixcinca, riberadebre, baixebre, matarranya];
let matarranya_veins = [matarranya, terraalta, baixebre, montsia, baixmaestrat, ports];
let alcalaten_veins = [alcalaten, altmaestrat, planaalta, planabaixa, altmillars];
let altmaestrat_veins = [altmaestrat, ports, baixmaestrat, planaalta, alcalaten];
let ports_veins = [ports, matarranya, baixmaestrat, altmaestrat];
let baixmaestrat_veins = [baixmaestrat, montsia, matarranya, ports, altmaestrat, planaalta];
let planaalta_veins = [planaalta, baixmaestrat, altmaestrat, alcalaten, planabaixa, mallorca];
let planabaixa_veins = [planabaixa, planaalta, alcalaten, campdemorvedre, altmillars, altpalancia];
let campdemorvedre_veins = [campdemorvedre, planabaixa, campdeturia, hortanord, altpalancia];
let campdeturia_veins = [campdeturia, campdemorvedre, hortanord, valencia, hortaoest, altpalancia, serrans, requenautiel, foiadebunyol];
let hortasud_veins = [hortasud, valencia, hortaoest, riberaalta, riberabaixa];
let hortaoest_veins = [hortaoest, campdeturia, hortanord, valencia, hortasud, riberaalta, foiadebunyol];
let hortanord_veins = [hortanord, campdemorvedre, campdeturia, hortaoest, valencia];
let valencia_veins = [valencia, hortanord, campdeturia, hortaoest, hortasud, riberabaixa, mallorca, pitiuses];
let riberabaixa_veins = [riberabaixa, valencia, hortasud, riberaalta, safor];
let riberaalta_veins = [riberaalta, riberabaixa, hortasud, hortaoest, foiadebunyol, canaldenavarres, costera, safor];
let canaldenavarres_veins = [canaldenavarres, valldecofrents, foiadebunyol, riberaalta, costera];
let valldecofrents_veins = [valldecofrents, requenautiel, foiadebunyol, canaldenavarres];
let requenautiel_veins = [requenautiel, serrans, campdeturia, foiadebunyol, valldecofrents];
let foiadebunyol_veins = [foiadebunyol, canaldenavarres, valldecofrents, requenautiel, serrans, campdeturia, hortaoest, riberaalta];
let racodademus_veins = [racodademus, serrans];
let serrans_veins = [serrans, racodademus, altpalancia, campdeturia, foiadebunyol, requenautiel];
let altpalancia_veins = [altpalancia, altmillars, planabaixa, campdemorvedre, campdeturia, serrans];
let altmillars_veins = [altmillars, alcalaten, planabaixa, altpalancia];
let alcoia_veins = [alcoia, valldalbaida, comtat, marinabaixa, alacanti, vinalopomitja, altvinalopo];
let marinabaixa_veins = [marinabaixa, marinaalta, comtat, alcoia, alacanti];
let marinaalta_veins = [marinaalta, safor, comtat, marinabaixa, pitiuses];
let comtat_veins = [comtat, safor, valldalbaida, alcoia, marinabaixa, marinaalta];
let valldalbaida_veins = [valldalbaida, costera, safor, comtat, alcoia, altvinalopo];
let costera_veins = [costera, canaldenavarres, riberaalta, safor, valldalbaida, altvinalopo];
let safor_veins = [safor, riberabaixa, riberaalta, costera, valldalbaida, comtat, marinaalta];
let baixsegura_veins = [baixsegura, baixvinalopo, vinalopomitja];
let baixvinalopo_veins = [baixvinalopo, alacanti, vinalopomitja, baixsegura];
let vinalopomitja_veins = [vinalopomitja, altvinalopo, alcoia, alacanti, baixvinalopo, baixsegura];
let altvinalopo_veins = [altvinalopo, costera, valldalbaida, alcoia, vinalopomitja];
let alacanti_veins = [alacanti, marinabaixa, alcoia, vinalopomitja, baixvinalopo, pitiuses];
let pitiuses_veins = [pitiuses, mallorca, valencia, marinaalta, alacanti];
let mallorca_veins = [mallorca, menorca, barcelones, tarragones, valencia, pitiuses, planaalta];
let menorca_veins = [menorca, alguer, barcelones, mallorca];
let alguer_veins = [alguer, menorca, barcelones, baixemporda];

girones.onmouseover = function() {mouseOver(girones_veins)};
girones.onmouseout = function() {mouseOut(girones_veins)};
girones.onclick = function() {onClick(girones_veins)};
girones.ondblclick = function() {dobleClick(girones_veins)};

baixemporda.onmouseover = function() {mouseOver(baixemporda_veins)};
baixemporda.onmouseout = function() {mouseOut(baixemporda_veins)};
baixemporda.onclick = function() {onClick(baixemporda_veins)};
baixemporda.ondblclick = function() {dobleClick(baixemporda_veins)};

altemporda.onmouseover = function() {mouseOver(altemporda_veins)};
altemporda.onmouseout = function() {mouseOut(altemporda_veins)};
altemporda.onclick = function() {onClick(altemporda_veins)};
altemporda.ondblclick = function() {dobleClick(altemporda_veins)};

pladelestany.onmouseover = function() {mouseOver(pladelestany_veins)};
pladelestany.onmouseout = function() {mouseOut(pladelestany_veins)};
pladelestany.onclick = function() {onClick(pladelestany_veins)};
pladelestany.ondblclick = function() {dobleClick(pladelestany_veins)};

selva.onmouseover = function() {mouseOver(selva_veins)};
selva.onmouseout = function() {mouseOut(selva_veins)};
selva.onclick = function() {onClick(selva_veins)};
selva.ondblclick = function() {dobleClick(selva_veins)};

garrotxa.onmouseover = function() {mouseOver(garrotxa_veins)};
garrotxa.onmouseout = function() {mouseOut(garrotxa_veins)};
garrotxa.onclick = function() {onClick(garrotxa_veins)};
garrotxa.ondblclick = function() {dobleClick(garrotxa_veins)};

barcelones.onmouseover = function() {mouseOver(barcelones_veins)};
barcelones.onmouseout = function() {mouseOut(barcelones_veins)};
barcelones.onclick = function() {onClick(barcelones_veins)};
barcelones.ondblclick = function() {dobleClick(barcelones_veins)};

maresme.onmouseover = function() {mouseOver(maresme_veins)};
maresme.onmouseout = function() {mouseOut(maresme_veins)};
maresme.onclick = function() {onClick(maresme_veins)};
maresme.ondblclick = function() {dobleClick(maresme_veins)};

vallesoccidental.onmouseover = function() {mouseOver(vallesoccidental_veins)};
vallesoccidental.onmouseout = function() {mouseOut(vallesoccidental_veins)};
vallesoccidental.onclick = function() {onClick(vallesoccidental_veins)};
vallesoccidental.ondblclick = function() {dobleClick(vallesoccidental_veins)};

vallesoriental.onmouseover = function() {mouseOver(vallesoriental_veins)};
vallesoriental.onmouseout = function() {mouseOut(vallesoriental_veins)};
vallesoriental.onclick = function() {onClick(vallesoriental_veins)};
vallesoriental.ondblclick = function() {dobleClick(vallesoriental_veins)};

baixllobregat.onmouseover = function() {mouseOver(baixllobregat_veins)};
baixllobregat.onmouseout = function() {mouseOut(baixllobregat_veins)};
baixllobregat.onclick = function() {onClick(baixllobregat_veins)};
baixllobregat.ondblclick = function() {dobleClick(baixllobregat_veins)};

ripolles.onmouseover = function() {mouseOver(ripolles_veins)};
ripolles.onmouseout = function() {mouseOut(ripolles_veins)};
ripolles.onclick = function() {onClick(ripolles_veins)};
ripolles.ondblclick = function() {dobleClick(ripolles_veins)};

bergueda.onmouseover = function() {mouseOver(bergueda_veins)};
bergueda.onmouseout = function() {mouseOut(bergueda_veins)};
bergueda.onclick = function() {onClick(bergueda_veins)};
bergueda.ondblclick = function() {dobleClick(bergueda_veins)};

solsones.onmouseover = function() {mouseOver(solsones_veins)};
solsones.onmouseout = function() {mouseOut(solsones_veins)};
solsones.onclick = function() {onClick(solsones_veins)};
solsones.ondblclick = function() {dobleClick(solsones_veins)};

bages.onmouseover = function() {mouseOver(bages_veins)};
bages.onmouseout = function() {mouseOut(bages_veins)};
bages.onclick = function() {onClick(bages_veins)};
bages.ondblclick = function() {dobleClick(bages_veins)};

moianes.onmouseover = function() {mouseOver(moianes_veins)};
moianes.onmouseout = function() {mouseOut(moianes_veins)};
moianes.onclick = function() {onClick(moianes_veins)};
moianes.ondblclick = function() {dobleClick(moianes_veins)};

osona.onmouseover = function() {mouseOver(osona_veins)};
osona.onmouseout = function() {mouseOut(osona_veins)};
osona.onclick = function() {onClick(osona_veins)};
osona.ondblclick = function() {dobleClick(osona_veins)};

capcir.onmouseover = function() {mouseOver(capcir_veins)};
capcir.onmouseout = function() {mouseOut(capcir_veins)};
capcir.onclick = function() {onClick(capcir_veins)};
capcir.ondblclick = function() {dobleClick(capcir_veins)};

fenolleda.onmouseover = function() {mouseOver(fenolleda_veins)};
fenolleda.onmouseout = function() {mouseOut(fenolleda_veins)};
fenolleda.onclick = function() {onClick(fenolleda_veins)};
fenolleda.ondblclick = function() {dobleClick(fenolleda_veins)};

altacerdanya.onmouseover = function() {mouseOver(altacerdanya_veins)};
altacerdanya.onmouseout = function() {mouseOut(altacerdanya_veins)};
altacerdanya.onclick = function() {onClick(altacerdanya_veins)};
altacerdanya.ondblclick = function() {dobleClick(altacerdanya_veins)};

baixacerdanya.onmouseover = function() {mouseOver(baixacerdanya_veins)};
baixacerdanya.onmouseout = function() {mouseOut(baixacerdanya_veins)};
baixacerdanya.onclick = function() {onClick(baixacerdanya_veins)};
baixacerdanya.ondblclick = function() {dobleClick(baixacerdanya_veins)};

conflent.onmouseover = function() {mouseOver(conflent_veins)};
conflent.onmouseout = function() {mouseOut(conflent_veins)};
conflent.onclick = function() {onClick(conflent_veins)};
conflent.ondblclick = function() {dobleClick(conflent_veins)};

rossello.onmouseover = function() {mouseOver(rossello_veins)};
rossello.onmouseout = function() {mouseOut(rossello_veins)};
rossello.onclick = function() {onClick(rossello_veins)};
rossello.ondblclick = function() {dobleClick(rossello_veins)};

vallespir.onmouseover = function() {mouseOver(vallespir_veins)};
vallespir.onmouseout = function() {mouseOut(vallespir_veins)};
vallespir.onclick = function() {onClick(vallespir_veins)};
vallespir.ondblclick = function() {dobleClick(vallespir_veins)};

anoia.onmouseover = function() {mouseOver(anoia_veins)};
anoia.onmouseout = function() {mouseOut(anoia_veins)};
anoia.onclick = function() {onClick(anoia_veins)};
anoia.ondblclick = function() {dobleClick(anoia_veins)};

tarragones.onmouseover = function() {mouseOver(tarragones_veins)};
tarragones.onmouseout = function() {mouseOut(tarragones_veins)};
tarragones.onclick = function() {onClick(tarragones_veins)};
tarragones.ondblclick = function() {dobleClick(tarragones_veins)};

concadebarbera.onmouseover = function() {mouseOver(concadebarbera_veins)};
concadebarbera.onmouseout = function() {mouseOut(concadebarbera_veins)};
concadebarbera.onclick = function() {onClick(concadebarbera_veins)};
concadebarbera.ondblclick = function() {dobleClick(concadebarbera_veins)};

garraf.onmouseover = function() {mouseOver(garraf_veins)};
garraf.onmouseout = function() {mouseOut(garraf_veins)};
garraf.onclick = function() {onClick(garraf_veins)};
garraf.ondblclick = function() {dobleClick(garraf_veins)};

altcamp.onmouseover = function() {mouseOver(altcamp_veins)};
altcamp.onmouseout = function() {mouseOut(altcamp_veins)};
altcamp.onclick = function() {onClick(altcamp_veins)};
altcamp.ondblclick = function() {dobleClick(altcamp_veins)};

altpenedes.onmouseover = function() {mouseOver(altpenedes_veins)};
altpenedes.onmouseout = function() {mouseOut(altpenedes_veins)};
altpenedes.onclick = function() {onClick(altpenedes_veins)};
altpenedes.ondblclick = function() {dobleClick(altpenedes_veins)};

baixcamp.onmouseover = function() {mouseOver(baixcamp_veins)};
baixcamp.onmouseout = function() {mouseOut(baixcamp_veins)};
baixcamp.onclick = function() {onClick(baixcamp_veins)};
baixcamp.ondblclick = function() {dobleClick(baixcamp_veins)};

baixpenedes.onmouseover = function() {mouseOver(baixpenedes_veins)};
baixpenedes.onmouseout = function() {mouseOut(baixpenedes_veins)};
baixpenedes.onclick = function() {onClick(baixpenedes_veins)};
baixpenedes.ondblclick = function() {dobleClick(baixpenedes_veins)};

pallarssobira.onmouseover = function() {mouseOver(pallarssobira_veins)};
pallarssobira.onmouseout = function() {mouseOut(pallarssobira_veins)};
pallarssobira.onclick = function() {onClick(pallarssobira_veins)};
pallarssobira.ondblclick = function() {dobleClick(pallarssobira_veins)};

pallarsjussa.onmouseover = function() {mouseOver(pallarsjussa_veins)};
pallarsjussa.onmouseout = function() {mouseOut(pallarsjussa_veins)};
pallarsjussa.onclick = function() {onClick(pallarsjussa_veins)};
pallarsjussa.ondblclick = function() {dobleClick(pallarsjussa_veins)};

valldaran.onmouseover = function() {mouseOver(valldaran_veins)};
valldaran.onmouseout = function() {mouseOut(valldaran_veins)};
valldaran.onclick = function() {onClick(valldaran_veins)};
valldaran.ondblclick = function() {dobleClick(valldaran_veins)};

altaribagorca.onmouseover = function() {mouseOver(altaribagorca_veins)};
altaribagorca.onmouseout = function() {mouseOut(altaribagorca_veins)};
altaribagorca.onclick = function() {onClick(altaribagorca_veins)};
altaribagorca.ondblclick = function() {dobleClick(altaribagorca_veins)};

ribagorca.onmouseover = function() {mouseOver(ribagorca_veins)};
ribagorca.onmouseout = function() {mouseOut(ribagorca_veins)};
ribagorca.onclick = function() {onClick(ribagorca_veins)};
ribagorca.ondblclick = function() {dobleClick(ribagorca_veins)};

alturgell.onmouseover = function() {mouseOver(alturgell_veins)};
alturgell.onmouseout = function() {mouseOut(alturgell_veins)};
alturgell.onclick = function() {onClick(alturgell_veins)};
alturgell.ondblclick = function() {dobleClick(alturgell_veins)};

andorra.onmouseover = function() {mouseOver(andorra_veins)};
andorra.onmouseout = function() {mouseOut(andorra_veins)};
andorra.onclick = function() {onClick(andorra_veins)};
andorra.ondblclick = function() {dobleClick(andorra_veins)};

urgell.onmouseover = function() {mouseOver(urgell_veins)};
urgell.onmouseout = function() {mouseOut(urgell_veins)};
urgell.onclick = function() {onClick(urgell_veins)};
urgell.ondblclick = function() {dobleClick(urgell_veins)};

llitera.onmouseover = function() {mouseOver(llitera_veins)};
llitera.onmouseout = function() {mouseOut(llitera_veins)};
llitera.onclick = function() {onClick(llitera_veins)};
llitera.ondblclick = function() {dobleClick(llitera_veins)};

baixcinca.onmouseover = function() {mouseOver(baixcinca_veins)};
baixcinca.onmouseout = function() {mouseOut(baixcinca_veins)};
baixcinca.onclick = function() {onClick(baixcinca_veins)};
baixcinca.ondblclick = function() {dobleClick(baixcinca_veins)};

noguera.onmouseover = function() {mouseOver(noguera_veins)};
noguera.onmouseout = function() {mouseOut(noguera_veins)};
noguera.onclick = function() {onClick(noguera_veins)};
noguera.ondblclick = function() {dobleClick(noguera_veins)};

pladurgell.onmouseover = function() {mouseOver(pladurgell_veins)};
pladurgell.onmouseout = function() {mouseOut(pladurgell_veins)};
pladurgell.onclick = function() {onClick(pladurgell_veins)};
pladurgell.ondblclick = function() {dobleClick(pladurgell_veins)};

segarra.onmouseover = function() {mouseOver(segarra_veins)};
segarra.onmouseout = function() {mouseOut(segarra_veins)};
segarra.onclick = function() {onClick(segarra_veins)};
segarra.ondblclick = function() {dobleClick(segarra_veins)};

segria.onmouseover = function() {mouseOver(segria_veins)};
segria.onmouseout = function() {mouseOut(segria_veins)};
segria.onclick = function() {onClick(segria_veins)};
segria.ondblclick = function() {dobleClick(segria_veins)};

garrigues.onmouseover = function() {mouseOver(garrigues_veins)};
garrigues.onmouseout = function() {mouseOut(garrigues_veins)};
garrigues.onclick = function() {onClick(garrigues_veins)};
garrigues.ondblclick = function() {dobleClick(garrigues_veins)};

montsia.onmouseover = function() {mouseOver(montsia_veins)};
montsia.onmouseout = function() {mouseOut(montsia_veins)};
montsia.onclick = function() {onClick(montsia_veins)};
montsia.ondblclick = function() {dobleClick(montsia_veins)};

priorat.onmouseover = function() {mouseOver(priorat_veins)};
priorat.onmouseout = function() {mouseOut(priorat_veins)};
priorat.onclick = function() {onClick(priorat_veins)};
priorat.ondblclick = function() {dobleClick(priorat_veins)};

baixebre.onmouseover = function() {mouseOver(baixebre_veins)};
baixebre.onmouseout = function() {mouseOut(baixebre_veins)};
baixebre.onclick = function() {onClick(baixebre_veins)};
baixebre.ondblclick = function() {dobleClick(baixebre_veins)};

riberadebre.onmouseover = function() {mouseOver(riberadebre_veins)};
riberadebre.onmouseout = function() {mouseOut(riberadebre_veins)};
riberadebre.onclick = function() {onClick(riberadebre_veins)};
riberadebre.ondblclick = function() {dobleClick(riberadebre_veins)};

terraalta.onmouseover = function() {mouseOver(terraalta_veins)};
terraalta.onmouseout = function() {mouseOut(terraalta_veins)};
terraalta.onclick = function() {onClick(terraalta_veins)};
terraalta.ondblclick = function() {dobleClick(terraalta_veins)};

matarranya.onmouseover = function() {mouseOver(matarranya_veins)};
matarranya.onmouseout = function() {mouseOut(matarranya_veins)};
matarranya.onclick = function() {onClick(matarranya_veins)};
matarranya.ondblclick = function() {dobleClick(matarranya_veins)};

alcalaten.onmouseover = function() {mouseOver(alcalaten_veins)};
alcalaten.onmouseout = function() {mouseOut(alcalaten_veins)};
alcalaten.onclick = function() {onClick(alcalaten_veins)};
alcalaten.ondblclick = function() {dobleClick(alcalaten_veins)};

altmaestrat.onmouseover = function() {mouseOver(altmaestrat_veins)};
altmaestrat.onmouseout = function() {mouseOut(altmaestrat_veins)};
altmaestrat.onclick = function() {onClick(altmaestrat_veins)};
altmaestrat.ondblclick = function() {dobleClick(altmaestrat_veins)};

ports.onmouseover = function() {mouseOver(ports_veins)};
ports.onmouseout = function() {mouseOut(ports_veins)};
ports.onclick = function() {onClick(ports_veins)};
ports.ondblclick = function() {dobleClick(ports_veins)};

baixmaestrat.onmouseover = function() {mouseOver(baixmaestrat_veins)};
baixmaestrat.onmouseout = function() {mouseOut(baixmaestrat_veins)};
baixmaestrat.onclick = function() {onClick(baixmaestrat_veins)};
baixmaestrat.ondblclick = function() {dobleClick(baixmaestrat_veins)};

planaalta.onmouseover = function() {mouseOver(planaalta_veins)};
planaalta.onmouseout = function() {mouseOut(planaalta_veins)};
planaalta.onclick = function() {onClick(planaalta_veins)};
planaalta.ondblclick = function() {dobleClick(planaalta_veins)};

planabaixa.onmouseover = function() {mouseOver(planabaixa_veins)};
planabaixa.onmouseout = function() {mouseOut(planabaixa_veins)};
planabaixa.onclick = function() {onClick(planabaixa_veins)};
planabaixa.ondblclick = function() {dobleClick(planabaixa_veins)};

campdemorvedre.onmouseover = function() {mouseOver(campdemorvedre_veins)};
campdemorvedre.onmouseout = function() {mouseOut(campdemorvedre_veins)};
campdemorvedre.onclick = function() {onClick(campdemorvedre_veins)};
campdemorvedre.ondblclick = function() {dobleClick(campdemorvedre_veins)};

campdeturia.onmouseover = function() {mouseOver(campdeturia_veins)};
campdeturia.onmouseout = function() {mouseOut(campdeturia_veins)};
campdeturia.onclick = function() {onClick(campdeturia_veins)};
campdeturia.ondblclick = function() {dobleClick(campdeturia_veins)};

hortasud.onmouseover = function() {mouseOver(hortasud_veins)};
hortasud.onmouseout = function() {mouseOut(hortasud_veins)};
hortasud.onclick = function() {onClick(hortasud_veins)};
hortasud.ondblclick = function() {dobleClick(hortasud_veins)};

hortaoest.onmouseover = function() {mouseOver(hortaoest_veins)};
hortaoest.onmouseout = function() {mouseOut(hortaoest_veins)};
hortaoest.onclick = function() {onClick(hortaoest_veins)};
hortaoest.ondblclick = function() {dobleClick(hortaoest_veins)};

hortanord.onmouseover = function() {mouseOver(hortanord_veins)};
hortanord.onmouseout = function() {mouseOut(hortanord_veins)};
hortanord.onclick = function() {onClick(hortanord_veins)};
hortanord.ondblclick = function() {dobleClick(hortanord_veins)};

valencia.onmouseover = function() {mouseOver(valencia_veins)};
valencia.onmouseout = function() {mouseOut(valencia_veins)};
valencia.onclick = function() {onClick(valencia_veins)};
valencia.ondblclick = function() {dobleClick(valencia_veins)};

riberabaixa.onmouseover = function() {mouseOver(riberabaixa_veins)};
riberabaixa.onmouseout = function() {mouseOut(riberabaixa_veins)};
riberabaixa.onclick = function() {onClick(riberabaixa_veins)};
riberabaixa.ondblclick = function() {dobleClick(riberabaixa_veins)};

riberaalta.onmouseover = function() {mouseOver(riberaalta_veins)};
riberaalta.onmouseout = function() {mouseOut(riberaalta_veins)};
riberaalta.onclick = function() {onClick(riberaalta_veins)};
riberaalta.ondblclick = function() {dobleClick(riberaalta_veins)};

canaldenavarres.onmouseover = function() {mouseOver(canaldenavarres_veins)};
canaldenavarres.onmouseout = function() {mouseOut(canaldenavarres_veins)};
canaldenavarres.onclick = function() {onClick(canaldenavarres_veins)};
canaldenavarres.ondblclick = function() {dobleClick(canaldenavarres_veins)};

valldecofrents.onmouseover = function() {mouseOver(valldecofrents_veins)};
valldecofrents.onmouseout = function() {mouseOut(valldecofrents_veins)};
valldecofrents.onclick = function() {onClick(valldecofrents_veins)};
valldecofrents.ondblclick = function() {dobleClick(valldecofrents_veins)};

requenautiel.onmouseover = function() {mouseOver(requenautiel_veins)};
requenautiel.onmouseout = function() {mouseOut(requenautiel_veins)};
requenautiel.onclick = function() {onClick(requenautiel_veins)};
requenautiel.ondblclick = function() {dobleClick(requenautiel_veins)};

foiadebunyol.onmouseover = function() {mouseOver(foiadebunyol_veins)};
foiadebunyol.onmouseout = function() {mouseOut(foiadebunyol_veins)};
foiadebunyol.onclick = function() {onClick(foiadebunyol_veins)};
foiadebunyol.ondblclick = function() {dobleClick(foiadebunyol_veins)};

racodademus.onmouseover = function() {mouseOver(racodademus_veins)};
racodademus.onmouseout = function() {mouseOut(racodademus_veins)};
racodademus.onclick = function() {onClick(racodademus_veins)};
racodademus.ondblclick = function() {dobleClick(racodademus_veins)};

serrans.onmouseover = function() {mouseOver(serrans_veins)};
serrans.onmouseout = function() {mouseOut(serrans_veins)};
serrans.onclick = function() {onClick(serrans_veins)};
serrans.ondblclick = function() {dobleClick(serrans_veins)};

altpalancia.onmouseover = function() {mouseOver(altpalancia_veins)};
altpalancia.onmouseout = function() {mouseOut(altpalancia_veins)};
altpalancia.onclick = function() {onClick(altpalancia_veins)};
altpalancia.ondblclick = function() {dobleClick(altpalancia_veins)};

altmillars.onmouseover = function() {mouseOver(altmillars_veins)};
altmillars.onmouseout = function() {mouseOut(altmillars_veins)};
altmillars.onclick = function() {onClick(altmillars_veins)};
altmillars.ondblclick = function() {dobleClick(altmillars_veins)};

alcoia.onmouseover = function() {mouseOver(alcoia_veins)};
alcoia.onmouseout = function() {mouseOut(alcoia_veins)};
alcoia.onclick = function() {onClick(alcoia_veins)};
alcoia.ondblclick = function() {dobleClick(alcoia_veins)};

marinabaixa.onmouseover = function() {mouseOver(marinabaixa_veins)};
marinabaixa.onmouseout = function() {mouseOut(marinabaixa_veins)};
marinabaixa.onclick = function() {onClick(marinabaixa_veins)};
marinabaixa.ondblclick = function() {dobleClick(marinabaixa_veins)};

marinaalta.onmouseover = function() {mouseOver(marinaalta_veins)};
marinaalta.onmouseout = function() {mouseOut(marinaalta_veins)};
marinaalta.onclick = function() {onClick(marinaalta_veins)};
marinaalta.ondblclick = function() {dobleClick(marinaalta_veins)};

comtat.onmouseover = function() {mouseOver(comtat_veins)};
comtat.onmouseout = function() {mouseOut(comtat_veins)};
comtat.onclick = function() {onClick(comtat_veins)};
comtat.ondblclick = function() {dobleClick(comtat_veins)};

valldalbaida.onmouseover = function() {mouseOver(valldalbaida_veins)};
valldalbaida.onmouseout = function() {mouseOut(valldalbaida_veins)};
valldalbaida.onclick = function() {onClick(valldalbaida_veins)};
valldalbaida.ondblclick = function() {dobleClick(valldalbaida_veins)};

costera.onmouseover = function() {mouseOver(costera_veins)};
costera.onmouseout = function() {mouseOut(costera_veins)};
costera.onclick = function() {onClick(costera_veins)};
costera.ondblclick = function() {dobleClick(costera_veins)};

safor.onmouseover = function() {mouseOver(safor_veins)};
safor.onmouseout = function() {mouseOut(safor_veins)};
safor.onclick = function() {onClick(safor_veins)};
safor.ondblclick = function() {dobleClick(safor_veins)};

baixsegura.onmouseover = function() {mouseOver(baixsegura_veins)};
baixsegura.onmouseout = function() {mouseOut(baixsegura_veins)};
baixsegura.onclick = function() {onClick(baixsegura_veins)};
baixsegura.ondblclick = function() {dobleClick(baixsegura_veins)};

baixvinalopo.onmouseover = function() {mouseOver(baixvinalopo_veins)};
baixvinalopo.onmouseout = function() {mouseOut(baixvinalopo_veins)};
baixvinalopo.onclick = function() {onClick(baixvinalopo_veins)};
baixvinalopo.ondblclick = function() {dobleClick(baixvinalopo_veins)};

vinalopomitja.onmouseover = function() {mouseOver(vinalopomitja_veins)};
vinalopomitja.onmouseout = function() {mouseOut(vinalopomitja_veins)};
vinalopomitja.onclick = function() {onClick(vinalopomitja_veins)};
vinalopomitja.ondblclick = function() {dobleClick(vinalopomitja_veins)};

altvinalopo.onmouseover = function() {mouseOver(altvinalopo_veins)};
altvinalopo.onmouseout = function() {mouseOut(altvinalopo_veins)};
altvinalopo.onclick = function() {onClick(altvinalopo_veins)};
altvinalopo.ondblclick = function() {dobleClick(altvinalopo_veins)};

alacanti.onmouseover = function() {mouseOver(alacanti_veins)};
alacanti.onmouseout = function() {mouseOut(alacanti_veins)};
alacanti.onclick = function() {onClick(alacanti_veins)};
alacanti.ondblclick = function() {dobleClick(alacanti_veins)};

pitiuses.onmouseover = function() {mouseOver(pitiuses_veins)};
pitiuses.onmouseout = function() {mouseOut(pitiuses_veins)};
pitiuses.onclick = function() {onClick(pitiuses_veins)};
pitiuses.ondblclick = function() {dobleClick(pitiuses_veins)};

mallorca.onmouseover = function() {mouseOver(mallorca_veins)};
mallorca.onmouseout = function() {mouseOut(mallorca_veins)};
mallorca.onclick = function() {onClick(mallorca_veins)};
mallorca.ondblclick = function() {dobleClick(mallorca_veins)};

menorca.onmouseover = function() {mouseOver(menorca_veins)};
menorca.onmouseout = function() {mouseOut(menorca_veins)};
menorca.onclick = function() {onClick(menorca_veins)};
menorca.ondblclick = function() {dobleClick(menorca_veins)};

alguer.onmouseover = function() {mouseOver(alguer_veins)};
alguer.onmouseout = function() {mouseOut(alguer_veins)};
alguer.onclick = function() {onClick(alguer_veins)};
alguer.ondblclick = function() {dobleClick(alguer_veins)};



/*
function canviaNombre(area) {
    area.soldats += 1;
    area.nombre.innerHTML = area.soldats;
}
*/
/*
baixemporda.onclick = function() {canviaNombre(baixemporda)};
pladelestany.onclick = function() {canviaNombre(pladelestany)};
garrotxa.onclick = function() {canviaNombre(garrotxa)};
selva.onclick = function() {canviaNombre(selva)};
girones.onclick = function() {canviaNombre(girones)};
altemporda.onclick = function() {canviaNombre(altemporda)};

barcelones.onclick = function() {canviaNombre(barcelones)};
maresme.onclick = function() {canviaNombre(maresme)};
vallesoriental.onclick = function() {canviaNombre(vallesoriental)};
vallesoccidental.onclick = function() {canviaNombre(vallesoccidental)};
baixllobregat.onclick = function() {canviaNombre(baixllobregat)};

ripolles.onclick = function() {canviaNombre(ripolles)};
bergueda.onclick = function() {canviaNombre(bergueda)};
solsones.onclick = function() {canviaNombre(solsones)};
bages.onclick = function() {canviaNombre(bages)};
moianes.onclick = function() {canviaNombre(moianes)};
osona.onclick = function() {canviaNombre(osona)};
*/

/*
Math.floor(Math.random() * (max - min + 1) + min)
Math.floor(Math.random() * (6 - 1 + 1) + 1)

capcir,
fenolleda,
altacerdanya,
baixacerdanya,
conflent,
rossello,
vallespir,

anoia,
tarragones,
concadebarbera,
garraf,
altcamp,
altpenedes,
baixcamp,
baixpenedes,

*/
