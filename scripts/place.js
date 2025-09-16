const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastmodified").textContent = document.lastModified;

const temperature = 27; // °C
const windSpeed = 8;  // km/h

function calculateWindChill(t, v) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(2);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    windChill = "N/A";
}

document.getElementById("windchill").textContent = windChill;