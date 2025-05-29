let userRole = prompt("Inserisci il tuo ruolo:");
let serviceMessage; 

switch (userRole) {
    case "Dipendente":
    serviceMessage = "Accesso completo ai Servizi Dietetici";
    break;

    case "Membro Iscritto":
        serviceMessage = "Accesso + Dietologo";
        break;

    case "Abbonato":
        serviceMessage = "Accesso parziale";
        break;

    case "Non-abbonato":
        serviceMessage = "Iscrizione necessaria";
        break;

    default:
        serviceMessage = "Errore";
        break;
    }

    console.log("Messaggio Servizio:", serviceMessage);


    let lenght;
    let width;

    function calculateArea () {
        lengh = parseFloat (document.getElementById('lenght').value);
        width = parseFloat (document.getElementById('width').value);

    let area = lenght * width;

     document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    }