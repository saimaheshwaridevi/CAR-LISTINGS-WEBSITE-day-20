// Example JavaScript code for fetching and displaying car listings dynamically
window.addEventListener('DOMContentLoaded', () => {
    // Fetch car listings from the server
    fetch('https://api.example.com/cars')
        .then(response => response.json())
        .then(data => {
            // Display car listings dynamically
            const carListingsContainer = document.querySelector('.car-listings .container');
            data.forEach(car => {
                const carElement = document.createElement('div');
                carElement.classList.add('car');
                carElement.innerHTML = `
                    <h3>${car.make} ${car.model}</h3>
                    <p>Year: ${car.year}</p>
                    <p>Price: $${car.price}</p>
                `;
                carListingsContainer.appendChild(carElement);
            });
        })
        .catch(error => {
            console.error('Error fetching car listings:', error);
        });

          // Define an array of car objects
          const cars = [
            { make: 'Toyota', model: 'Camry', year: 2020, price: 25000 },
            { make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
            { make: 'Ford', model: 'Mustang', year: 2021, price: 35000 },
            { make: 'Chevrolet', model: 'Silverado', year: 2018, price: 30000 },
            { make: 'BMW', model: 'X5', year: 2020, price: 50000 },
        ];

        // Function to create HTML elements for each car
        function createCarElement(car) {
            const carElement = document.createElement('div');
            carElement.classList.add('car');
            carElement.innerHTML = `
                <h2>${car.make} ${car.model}</h2>
                <p>Year: ${car.year}</p>
                <p>Price: $${car.price}</p>
            `;
            return carElement;
        }

        // Function to display car listings on the webpage
        function displayCarListings(carsToShow) {
            const carListContainer = document.querySelector('.car-list');
            // Clear existing car listings
            carListContainer.innerHTML = '';
            // Display cars matching the search criteria
            carsToShow.forEach(car => {
                const carElement = createCarElement(car);
                carListContainer.appendChild(carElement);
            });
        }

        // Function to handle search input
        function handleSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value.toLowerCase();
            // Filter cars based on search term
            const filteredCars = cars.filter(car => {
                return car.make.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm);
            });
            // Display filtered car listings
            displayCarListings(filteredCars);
        }

        // Call handleSearch function when the search input changes
        document.getElementById('searchInput').addEventListener('input', handleSearch);

        // Initially display all car listings
        displayCarListings(cars);
});