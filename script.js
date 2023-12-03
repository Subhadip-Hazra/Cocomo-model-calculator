function typeEffect(element, text) {
    let i = 0;
    const interval = setInterval(function() {
        if (text.charAt(i) === '<') {
            const endIndex = text.indexOf('>', i);
            element.innerHTML += text.substring(i, endIndex + 1);
            i = endIndex + 1;
        } else {
            element.innerHTML += text.charAt(i);
            i++;
        }

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 50);
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    var klocValue = parseFloat(document.getElementById('klocInput').value);
    var mode = document.querySelector('input[name="mode"]:checked').value;

    var effort = 0;
    var developement_time = 0;
    var staff_size = 0;
    var productivity = 0;
    if (mode === 'organic') {
        effort = (klocValue ** 1.05) * 2.4;
        developement_time = (effort ** 0.38) * 2.5;
        staff_size = effort / developement_time;
        productivity = klocValue / effort;
    } else if (mode === 'semi-detached') {
        effort = (klocValue ** 1.12) * 3.0;
        developement_time = (effort ** 0.35) * 2.5;
        staff_size = effort / developement_time;
        productivity = klocValue / effort;
    } else if (mode === 'embedded') {
        effort = (klocValue ** 1.20) * 3.6;
        developement_time = (effort ** 0.32) * 2.5;
        staff_size = effort / developement_time;
        productivity = klocValue / effort;
    }

    var resultText = 'Effort: ' + effort.toFixed(6) +'  P.M' + '<br>Development Time: ' + developement_time.toFixed(6) +'  Mounths' +
        '<br>Average Staff Size: ' + staff_size.toFixed(6) +'  Persons'+'<br>Productivity: ' + productivity.toFixed(6) +'   KLOC/P.M';

    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = '';
    typeEffect(resultElement, resultText);
});
