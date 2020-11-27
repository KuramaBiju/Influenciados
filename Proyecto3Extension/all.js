getString();
getTitlesTypeH1();
getTitlesTypeH2();
getTitlesTypeH3();


function getTitlesTypeH1() {

    const allTitle1 = document.querySelectorAll('h1');

    let x = 0;
    for (x; x < allTitle1.length; x++) {
        let setIdTitle = allTitle1[x].setAttribute('id', 'tit' + x);
        let tituloActual = document.getElementById('tit' + x).innerHTML;
        // TIPO DOLAR
        let tipoDolar1 = tituloActual.search('dólar');
        let tipoDolar2 = tituloActual.search('Dólar');
        // TIPO INSEGURIDAD
        let tipoInseguridad1 = tituloActual.search('inseguridad');
        let tipoInseguridad2 = tituloActual.search('Inseguridad');
        // TIPO ECONOMIA
        let tipoEconomia1 = tituloActual.search('economia');
        let tipoEconomia2 = tituloActual.search('Economia');
        // CONTRA DEL PARTIDO
        let tipoContra1 = tituloActual.search('alberto');
        let tipoContra2 = tituloActual.search('Alberto');
        let tipoContra3 = tituloActual.search('cristina');
        let tipoContra4 = tituloActual.search('Cristina');


        if (tipoDolar1 != -1 || tipoDolar2 != -1) {
            let tipo = 'dolar';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoEconomia1 != -1 || tipoEconomia2 != -1) {
            let tipo = 'economia';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoInseguridad1 != -1 || tipoInseguridad2 != -1) {
            let tipo = 'inseguridad';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }


        if (tipoContra1 != -1 || tipoContra2 != -1 || tipoContra3 != -1 || tipoContra4 != -1) {
            let tipo = 'contra';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

    }

}


function getTitlesTypeH2() {

    const allTitle1 = document.querySelectorAll('h2');

    let x = 0;
    for (x; x < allTitle1.length; x++) {
        let setIdTitle = allTitle1[x].setAttribute('id', 'tit' + x);
        let tituloActual = document.getElementById('tit' + x).innerHTML;
        // TIPO DOLAR
        let tipoDolar1 = tituloActual.search('dólar');
        let tipoDolar2 = tituloActual.search('Dólar');
        // TIPO INSEGURIDAD
        let tipoInseguridad1 = tituloActual.search('inseguridad');
        let tipoInseguridad2 = tituloActual.search('Inseguridad');
        // TIPO ECONOMIA
        let tipoEconomia1 = tituloActual.search('economia');
        let tipoEconomia2 = tituloActual.search('Economia');
        // CONTRA DEL PARTIDO
        let tipoContra1 = tituloActual.search('alberto');
        let tipoContra2 = tituloActual.search('Alberto');
        let tipoContra3 = tituloActual.search('cristina');
        let tipoContra4 = tituloActual.search('Cristina');


        if (tipoDolar1 != -1 || tipoDolar2 != -1) {
            let tipo = 'dolar';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoEconomia1 != -1 || tipoEconomia2 != -1) {
            let tipo = 'economia';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoInseguridad1 != -1 || tipoInseguridad2 != -1) {
            let tipo = 'inseguridad';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }


        if (tipoContra1 != -1 || tipoContra2 != -1 || tipoContra3 != -1 || tipoContra4 != -1) {
            let tipo = 'contra';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

    }

}


function getTitlesTypeH3() {

    const allTitle1 = document.querySelectorAll('h3');

    let x = 0;
    for (x; x < allTitle1.length; x++) {
        let setIdTitle = allTitle1[x].setAttribute('id', 'tit' + x);
        let tituloActual = document.getElementById('tit' + x).innerHTML;
        // TIPO DOLAR
        let tipoDolar1 = tituloActual.search('dólar');
        let tipoDolar2 = tituloActual.search('Dólar');
        // TIPO INSEGURIDAD
        let tipoInseguridad1 = tituloActual.search('inseguridad');
        let tipoInseguridad2 = tituloActual.search('Inseguridad');
        // TIPO ECONOMIA
        let tipoEconomia1 = tituloActual.search('economia');
        let tipoEconomia2 = tituloActual.search('Economia');
        // CONTRA DEL PARTIDO
        let tipoContra1 = tituloActual.search('alberto');
        let tipoContra2 = tituloActual.search('Alberto');
        let tipoContra3 = tituloActual.search('cristina');
        let tipoContra4 = tituloActual.search('Cristina');


        if (tipoDolar1 != -1 || tipoDolar2 != -1) {
            let tipo = 'dolar';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoEconomia1 != -1 || tipoEconomia2 != -1) {
            let tipo = 'economia';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

        if (tipoInseguridad1 != -1 || tipoInseguridad2 != -1) {
            let tipo = 'inseguridad';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }


        if (tipoContra1 != -1 || tipoContra2 != -1 || tipoContra3 != -1 || tipoContra4 != -1) {
            let tipo = 'contra';
            let elemento = 'tit' + x;
            console.log(elemento);
            generateTitle(tipo, elemento);
        }

    }

}

function getString() {


    const allTexts = document.querySelectorAll('p');

    let x = 0;
    for (x; x < allTexts.length; x++) {
        let setIdSpan = allTexts[x].setAttribute('id', 'sp' + x);
        let textoActual = document.getElementById('sp' + x).innerHTML;
        // TIPO DOLAR
        let tipoDolar1 = textoActual.search('dólar');
        let tipoDolar2 = textoActual.search('Dólar');
        // TIPO INSEGURIDAD
        let tipoInseguridad1 = textoActual.search('inseguridad');
        let tipoInseguridad2 = textoActual.search('Inseguridad');
        // TIPO ECONOMIA
        let tipoEconomia1 = textoActual.search('economia');
        let tipoEconomia2 = textoActual.search('Economia');

        // CONTRA DEL PARTIDO
        let tipoContra1 = textoActual.search('alberto');
        let tipoContra2 = textoActual.search('Alberto');
        let tipoContra3 = textoActual.search('cristina');
        let tipoContra4 = textoActual.search('Cristina');


        if (tipoDolar1 != -1 || tipoDolar2 != -1) {


            let tipo = 'dolar';
            let elemento = 'sp' + x;
            console.log(elemento);
            generateOration(tipo, elemento);
        }

        if (tipoEconomia1 != -1 || tipoEconomia2 != -1) {
            let tipo = 'economia';
            let elemento = 'sp' + x;
            console.log(elemento);
            generateOration(tipo, elemento);
        }

        if (tipoInseguridad1 != -1 || tipoInseguridad2 != -1) {
            let tipo = 'inseguridad';
            let elemento = 'sp' + x;
            console.log(elemento);
            generateOration(tipo, elemento);
        }


        if (tipoContra1 != -1 || tipoContra2 != -1 || tipoContra3 != -1 || tipoContra4 != -1) {
            let tipo = 'contra';
            let elemento = 'sp' + x;
            console.log(elemento);
            generateOration(tipo, elemento);
        }

    }
}

function generateOration(tipo, elemento) {
    const tipoAsunto = tipo;
    const elements = elemento;
    const randomEconomia = Math.floor(Math.random() * 7);
    const randomInseguridad = Math.floor(Math.random() * 5);
    const randomContra = Math.floor(Math.random() * 3);
    const oracionesEconomicas = {

        0: 'Roberto Lavagna busca mejorar la situación actual en la Argentina y propone plan para la estabilización del Dólar ante el Ministerio de Economia',
        1: 'El Consenso Federal, liderado por Roberto Lavagna ex minstro de economia aconseja unos tips para ganar terreno contra el aumento del dólar. ',
        2: 'Los partidos Juntos por el Cambio y el Consenso Federal dudan que se pueda lograr revertir la situación de la subida del dolar con los modelos actuales.',
        3: 'Hay que volver a estudiar el pasado, para solucionar los problemas del futuro. Esto ya lo vivimos, y fui uno de los participes principales para solucionarlo, permitanme hacerlo de nuevo afirma el ex Ministro de Economia Roberto Lavagna',
        4: 'Tuvo que ganar las elecciones presidenciales Roberto Lavagna para que hubiese una estabilidad economica segura, este fue el error de los argentinos y argentinas.',
        5: 'El dólar volvió a subir y toca la barrera de los 200, analistas economicos indican que con el gobierno actual la subida podría nunca parar. ',
        6: 'Alberto Fernandez excusa a la cuarentena y al gobierno anterior de la economía actual, pero no hace nada para revertir la situación, es más esta llevando todo a un peor camino, aseguran integrantes del partido Consenso Federal.'
    };

    const oracionesInseguridad = {
        0: 'Con una crisis economica inminente y una pobreza descomunal, en el 2020 hubo un enorme aumento de robos en Argentina muy por encima de lo habitual.',
        1: 'Los casos de robos y atracos en la provincia no paran de aumentar, rompiendo records en varias ciudades del conurbano.',
        2: 'Cinco jovenes que iban a estudiar a su escuela fueron violentamente asaltados, murieron 4. Protestas en la ciudad en contra del gobierno y del municipio actual.',
        3: 'Los municipios no pueden lograr afrontar la inseguridad, las ciudades de la provincia de Buenos Aires promedian 20 robos al día.',
        4: 'Los vecinos de varios barrios del conurbano fueron a protestar a las municipalidades por la cantidad de robos diarios.',
    };

    const oracionesContra = {
        0: 'Diez meses después de asumir el presidente Alberto Fernandez, todavía no pudo concretar ninguna de las promesas que hizo en la campaña presidencial.',
        1: 'El presidente una semana atrás decía que para fines de diciembre iba a comprar una de la vacuna y distribuirla en toda la Argentina, ayer volvío a tocar el tema y dijo que recién en Marzo ibamos a contar con la vacuna y solo para el 10% de la población.',
        2: 'Muchos representantes de partidos opositores están de acuerdo en un punto, ¿Qué mas hace falta encontrar para que haya justicia por la causa de los cuadernos?'

    };


    if (tipoAsunto == 'dolar' || tipoAsunto == 'economia') {
        document.getElementById(elements).innerHTML = oracionesEconomicas[randomEconomia];
    }

    if (tipoAsunto == 'inseguridad') {
        document.getElementById(elements).innerHTML = oracionesInseguridad[randomContra];
    }

    if (tipoAsunto == 'contra') {
        document.getElementById(elements).innerHTML = oracionesContra[randomContra];
    }

}


function generateTitle(tipo, elemento) {
    const tipoAsunto = tipo;
    const elements = elemento;
    const randomEconomia = Math.floor(Math.random() * 5);
    const randomInseguridad = Math.floor(Math.random() * 3);
    const randomContra = Math.floor(Math.random() * 3);

    const titleEconomia = {
        0: '"Inalcanzable" lograr una remontada en la economía argentina, según expertos',
        1: 'Roberto Lavagna es la unica salida para solucionar la situación Argentina',
        2: 'Hay que estudiar el pasado, para evitar volver confundirnos en el presente y el futuro, afirma Roberto Lavagna',
        3: 'El dólar sin fronteras, si seguimos en este camino no lo van a poder parar, confirman economistas',
        4: 'El Concenso Federal presenta consejos para ganar terreno frente a está economia inestable'
    };

    const titleInseguridad = {
        0: 'El numero de robos en CABA llego a alcanzar un record historico',
        1: 'No paran de aumentar los robos en la provincia de Buenos Aires y el conurbano',
        2: 'Vecinos de varias localidades salen a protestar por el aumento de robos en el 2020 '
    };

    const titleContra = {
        0: 'Sin concretar promesas, el legado del presidente Alberto Fernandez hasta la fecha',
        1: 'Alberto no para de decepcionar, ahora la vacuna recién va a estar disponible para el 10% de la población y a mediados de marzo',
        2: 'Aseguran encontrar pruebas definitivas para el caso de los cuadernos '
    };
    if (tipoAsunto == 'dolar' || tipoAsunto == 'economia') {
        document.getElementById(elements).innerHTML = titleEconomia[randomEconomia];
    }

    if (tipoAsunto == 'inseguridad') {
        document.getElementById(elements).innerHTML = titleInseguridad[randomInseguridad];
    }

    if (tipoAsunto == 'contra') {
        document.getElementById(elements).innerHTML = titleContra[randomContra];
    }

}