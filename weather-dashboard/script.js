const apiKey = 'YOUR_API_KEY_HERE'; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const loading = document.getElementById('loading');

searchBtn.addEventListener('click', async () => {
    const city = cityInput.value;
    if (!city) return alert("Please enter a city name");

    // Show loading state and clear previous result
    loading.classList.remove('hidden');
    weatherResult.innerHTML = '';

    try {
        const response = await fetch(`https://api.openweathermap.org{city}&units=metric&appid=${apiKey}`);
        
        if (!response.ok) throw new Error("City not found. Please try again.");

        const data = await response.json();
        
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p style="font-size: 2rem; margin: 10px 0;">${Math.round(data.main.temp)}°C</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
    } finally {
        loading.classList.add('hidden');
    }
});

