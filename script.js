// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    let form = document.getElementById("testForm");
    form.addEventListener("submit", formSubmission(form,
        List,
        form.querySelector("input[name=pilotName]"),
        form.querySelector("input[name=copilotName]"),
        form.querySelector("input[name=fuelLevel]"),
        form.querySelector("input[name=cargoMass]")));
 });