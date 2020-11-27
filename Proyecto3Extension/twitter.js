getSpan();

function getSpan() {


    const allSpans = document.querySelectorAll('span');

    let x = 0;
    for (x; x < allSpans.length; x++) {
        let setIdSpan = allSpans[x].setAttribute('id', 'sp' + x);
        let spanActual = document.getElementById('sp' + x).innerHTML;
        // TIPO DOLAR
        let tipoDolar1 = spanActual.search('dólar');
        let tipoDolar2 = spanActual.search('Dólar');
        // TIPO INSEGURIDAD
        let tipoInseguridad1 = spanActual.search('inseguridad');
        let tipoInseguridad2 = spanActual.search('Inseguridad');
        // TIPO ECONOMIA
        let tipoEconomia1 = spanActual.search('economia');
        let tipoEconomia2 = spanActual.search('Economia');

        // CONTRA DEL PARTIDO
        let tipoContra1 = spanActual.search('alberto');
        let tipoContra2 = spanActual.search('Alberto');
        let tipoContra3 = spanActual.search('cristina');
        let tipoContra4 = spanActual.search('Cristina');


        if (tipoDolar1 != -1 || tipoDolar2 != -1) {

            /*console.log(document.getElementById(x).innerHTML);*/
            let tipo = 'dolar';
            /*
            let tamOracion = document.getElementById('sp' + x).innerHTML.length;*/
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


/*Para transformar la sociedad se necesita mayor educación y finaciamiento al sector educativo tanto privado como público. */
function generateOration(tipo, elemento) {
    const tipoAsunto = tipo;
    const elements = elemento;
    const randomEconomia = Math.floor(Math.random() * 7);
    const randomInseguridad = Math.floor(Math.random() * 5);
    const randomContra = Math.floor(Math.random() * 3);
    const oracionesEconomicas = {
        /* Uso las palabras para la mente aplicando el arquetipo que representa el candidato*/
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
        document.getElementById(elements).innerHTML = oracionesInseguridad[randomInseguridad];
    }

    if (tipoAsunto == 'contra') {
        document.getElementById(elements).innerHTML = oracionesContra[randomContra];
    }

}