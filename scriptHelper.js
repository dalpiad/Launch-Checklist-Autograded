// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
        <img src="${imageUrl}"></img>`
}

 
 function validateInput(testInput) {
    let response = "";
    console.log(testInput);
    if(testInput === "" || testInput === null) {
        response = "Empty";
        return response;
    } else if (isNaN(testInput)) {
        response = "Not a Number";
        return response;
    } else if (!(isNaN(testInput))) {
        response = "Is a Number";
        return response;
    };
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" 
    || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
        alert('All fields are required');
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert('A number is not a valid input for the Pilot or Copilot');
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert('The Fuel Level and Cargo Mass must be a number');
    } else {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (fuelLevel < 10000) {
        list.style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("fuelStatus").innerHTML = 'Fuel level too low for launch';
        document.getElementById("cargoStatus").innerHTML = 'Cargo mass low enough for launch';
    } 
    
    if (cargoLevel > 10000) {
        list.style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = 'Cargo mass too heavy for launch';
        document.getElementById("fuelStatus").innerHTML = 'Fuel level high enough for launch';
    } 

    if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility = 'visible';
        document.getElementById("launchStatus").innerHTML = 'Shuttle Not Ready for Launch';
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("cargoStatus").innerHTML = 'Cargo mass too heavy for launch';
        document.getElementById("fuelStatus").innerHTML = 'Fuel level too low for launch';
    } 
    
    if (cargoLevel <=10000 && fuelLevel >= 10000) {
        document.getElementById("launchStatus").innerHTML = 'Shuttle is Ready for Launch';
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("cargoStatus").innerHTML = 'Cargo mass low enough for launch';
        document.getElementById("fuelStatus").innerHTML = 'Fuel level high enough for launch';
    }
 }


 async function myFetch() {
    let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planetsReturned = await response.json();
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;