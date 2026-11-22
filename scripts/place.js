const temperature = 22;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
	return (
		13.12 +
		0.6215 * temperature -
		11.37 * windSpeed ** 0.16 +
		0.3965 * temperature * windSpeed ** 0.16
	);
}

let windChill = 0;

if (temperature <= 10 && windSpeed > 4.8) {
	windChill = Math.round(calculateWindChill(temperature, windSpeed)) + " °C";
} else {
	windChill = "N/A";
}

document.querySelector("#wind-chill").textContent = windChill;
