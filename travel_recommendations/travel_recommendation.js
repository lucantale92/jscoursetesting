async function fetchData() {
  const response = await fetch('travel_recommendation_api.json');
  return await response.json();
}

function search() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!input) return;

  fetchData().then(data => {
    const results = data.filter(place => place.keyword.toLowerCase().includes(input));
    displayResults(results);
  });
}

function displayResults(places) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  if (places.length === 0) {
    container.innerHTML = '<p>Nessun risultato trovato.</p>';
    return;
  }

  places.forEach(place => {
    const div = document.createElement('div');
    div.className = 'place';
    div.innerHTML = `
      <h2>${place.name}</h2>
      <img src="${place.imageUrl}" alt="${place.name}">
      <p>${place.description}</p>
    `;
    container.appendChild(div);
  });
}

function reset() {
  document.getElementById('searchInput').value = '';
  document.getElementById('results').innerHTML = '';
}
