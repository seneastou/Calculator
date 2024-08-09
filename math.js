function exo() {

const operator = document.getElementById("operator").value;
const nb1 = document.getElementById("number1").value;
const nb2 = document.getElementById("number2").value;

let result;

    switch (operator) {
        case '+':
            result = 1.*nb1 + 1.*nb2;
            break;
        case '-':
            result = nb1 - nb2;
            break;
        case '*':
            result = nb1 * nb2;
            break;
        case '/':
             result = nb1 / nb2;
            break;
        case '%':
            result = nb1 % nb2;
            break;
        default:
            return 'Opération non valide';
    }

    document.getElementById('resultat').textContent = 'Résultat: ' + result;
}
