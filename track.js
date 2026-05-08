function checkAccess(){

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

    trackingResult.style.display = "none";
    blockedResult.style.display = "none";

    if(trackingInput === ""){

        alert("Please enter tracking number");
        return;
    }

    // ONLY USA ACCESS

    if(selectedCountry === "allowed"){

        trackingResult.style.display = "block";

        trackId.innerText = trackingInput;

    }else{

        blockedResult.style.display = "block";
    }
}
