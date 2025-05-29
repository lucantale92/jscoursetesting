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
