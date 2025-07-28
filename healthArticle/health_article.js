// 1. Creo la richiesta
var xhr = new XMLHttpRequest();

// 2. Indico da dove prendere i dati
var url = './health_article.json';

// 3. Apro la richiesta GET in modo asincrono
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;                       // Array di articoli
    var articlesDiv = document.getElementById('articles');     // Il div dove stamperemo i dati
  
    // Iteriamo ogni articolo
    articles.forEach(function(article) {
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');
  
      var title = document.createElement('h2');
      title.textContent = article.title;
  
      var description = document.createElement('p');
      description.textContent = article.description;
  
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Modi per Raggiungere:';
  
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });
  
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefici:';
  
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });
  
      // Costruzione finale
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);
      articlesDiv.appendChild(articleDiv);
    });
  };
  
  xhr.send();
