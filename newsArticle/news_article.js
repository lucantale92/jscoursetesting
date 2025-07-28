// 1. Creo l'oggetto XMLHttpRequest per inviare una richiesta al server
var xhr = new XMLHttpRequest();

// 2. Specifico il file JSON da cui voglio prendere i dati
var url = './news_article.json';

// 3. Apro la richiesta HTTP di tipo GET verso l'URL specificato, in modo asincrono
xhr.open('GET', url, true);

// 4. Dico che mi aspetto una risposta in formato JSON
xhr.responseType = 'json';

// 5. Quando la risposta arriva con successo...
xhr.onload = function() {

  // 6. Prendo il primo articolo dall'array "articles" del file JSON
  var article = xhr.response.articles[0];

  // 7. Prendo il contenitore <div id="news"> dalla pagina HTML
  var newsDiv = document.getElementById('news');

  // 8. Creo un elemento <h2> per il titolo
  var title = document.createElement('h2');
  title.textContent = article.title;

  // 9. Creo un <p> per la descrizione
  var description = document.createElement('p');
  description.textContent = article.description;

  // 10. Creo il titolo per la prima lista (punti chiave)
  var pointsHeader = document.createElement('h3');
  pointsHeader.textContent = 'Punti chiave:';

  // 11. Creo una lista non ordinata <ul> per i punti
  var pointsList = document.createElement('ul');
  article.points.forEach(function(point) {
    var listItem = document.createElement('li');
    listItem.textContent = point;
    pointsList.appendChild(listItem);
  });

  // 12. Creo il titolo per la seconda lista (impatto)
  var impactHeader = document.createElement('h3');
  impactHeader.textContent = 'Impatto:';

  // 13. Creo la lista degli impatti
  var impactList = document.createElement('ul');
  article.impact.forEach(function(imp) {
    var listItem = document.createElement('li');
    listItem.textContent = imp;
    impactList.appendChild(listItem);
  });

  // 14. Aggiungo tutto al contenitore della pagina HTML
  newsDiv.appendChild(title);
  newsDiv.appendChild(description);
  newsDiv.appendChild(pointsHeader);
  newsDiv.appendChild(pointsList);
  newsDiv.appendChild(impactHeader);
  newsDiv.appendChild(impactList);
};

// 15. Invio effettivamente la richiesta al file JSON
xhr.send();
