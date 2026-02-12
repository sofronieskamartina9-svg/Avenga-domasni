const apiUrl = "https://swapi.py4e.com/api/planets/?page=1";

// Function that calls the API
function fetchPlanets(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      printPlanets(data.results);
    })
    .catch(error => {
      console.error("Error fetching planets:", error);
    });
}

// Function that prints planets into the table
function printPlanets(planets) {
  const tableBody = document.getElementById("planetsTableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const planet = planets[i];

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${planet.name}</td>
      <td>${planet.population}</td>
      <td>${planet.climate}</td>
      <td>${planet.gravity}</td>
    `;

    tableBody.appendChild(row);
  }
}

// Button click event
document.getElementById("loadPlanetsBtn").addEventListener("click", () => {
  fetchPlanets(apiUrl);
});
