document.getElementById("search").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const apiKey = "4a7676fff3c4e05be2008764ac4993d1";
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
            })
            .catch(() => {
                alert("City not found!");
            });
    } else {
        alert("Please enter a city name.");
    }
});
