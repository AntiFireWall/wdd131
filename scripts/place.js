const windChill = document.getElementById("wind-chill");
const windSpeed = document.getElementById("wind").innerHTML;
const temp = document.getElementById("temp").innerHTML;

function calculateWindChill(windSpeed, temp){

    if (temp <= 10 && windSpeed > 4.8){
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); // Round to two decimal places 
    }
    else{ return "N/A"};
    
};

windChill.innerText = calculateWindChill(windSpeed, temp)