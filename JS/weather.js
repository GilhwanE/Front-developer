const weather = document.querySelector

const KEY_API = "861bb5a4eaf36065e8ebfeff01fa8f5a";
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(  
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY_API}`)
};

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSucces(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError() {
    console.log('cant access geo');
    
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    }else {
        const parseCoodrds = JSON.parse(loadedCoords);
        getWeather(parseCoodrds.latitude, parseCoodrds.longitude);

    }
}

function init(){
    loadCoords();
}

init();