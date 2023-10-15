<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Country Information</h1>
        <div class="search-container">
            <input type="text" id="countryName" placeholder="Enter a country name">
            <button id="searchButton">Search</button>
        </div>
        <div class="country-details">
            <!-- Display country information here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.search-container {
    margin-top: 20px;
}

.country-details {
    margin-top: 20px;
}
const searchButton = document.getElementById("searchButton");
const countryNameInput = document.getElementById("countryName");
const countryDetails = document.querySelector(".country-details");

searchButton.addEventListener("click", async () => {
    try {
        const countryName = countryNameInput.value;
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (response.ok) {
            const data = await response.json();
            displayCountryInfo(data[0]);
        } else {
            countryDetails.innerHTML = "Country not found.";
        }
    } catch (error) {
        console.error("Error fetching data: " + error);
    }
});

function displayCountryInfo(country) {
    // Create and populate HTML elements with country information
    countryDetails.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <!-- Add more details as needed -->
    `;
}
