var numero1 = prompt("¿Qué numero 1 quieres asignar");
var numero2 = prompt("¿Qué numero 2 quieres asignar");
var operacion = prompt("¿Qué operación quieres realizar");

switch (operacion) {
    case 'suma':
        alert((1 * numero1) + (numero2 * 1));
        break;
    case 'resta':
        alert(numero1 - numero2);
        break;
    case 'multiplicacion':
        alert(numero1 * numero2);
        break;
    case 'division':
        alert(numero1 / numero2);
        break;
    default:
        break;
}