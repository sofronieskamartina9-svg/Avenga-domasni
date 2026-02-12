const loadBtn = document.getElementById("loadBtn");
const tableBody = document.getElementById("tableBody");
const paginationDiv = document.getElementById("paginationButtons");

let currentPage = 1;

// Function that makes API call
function fetchPlanets(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderTable(data.results);
        })
        .catch(error => console.error("Error:", error));
}

// Function to render table
function renderTable(planets) {
    tableBody.innerHTML = "";

    planets.forEach(planet => {
        tableBody.innerHTML += `
            <tr>
                <td>${planet.name}</td>
                <td>${planet.population}</td>
                <td>${planet.climate}</td>
                <td>${planet.gravity}</td>
            </tr>
        `;
    });

    renderButtons();
}

// Function to render buttons
function renderButtons() {
    paginationDiv.innerHTML = "";

    if (currentPage === 1) {
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "NEXT 10";
        nextBtn.addEventListener("click", () => {
            currentPage = 2;
            fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");
        });
        paginationDiv.appendChild(nextBtn);
    } 
    else if (currentPage === 2) {
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "PREVIOUS 10";
        prevBtn.addEventListener("click", () => {
            currentPage = 1;
            fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
        });
        paginationDiv.appendChild(prevBtn);
    }
}

// Initial load button
loadBtn.addEventListener("click", () => {
    currentPage = 1;
    fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
});
