function checkTracking(){

    const selectedCountry =
        document.getElementById("countrySelect").value;

    const trackingInput =
        document.getElementById("trackingInput").value;

    const trackingResult =
        document.getElementById("trackingResult");

    const blockedResult =
        document.getElementById("blockedResult");

    const trackId =
        document.getElementById("trackId");

    // RESET

    trackingResult.style.display = "none";
    blockedResult.style.display = "none";

    // EMPTY CHECK

    if(trackingInput.trim() === ""){

        alert("Please enter tracking number");
        return;
    }

    // USA ONLY

    if(selectedCountry === "usa"){

        trackingResult.style.display = "block";

        trackId.innerText = trackingInput;

    }else{

        blockedResult.style.display = "block";
    }
}
