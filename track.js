function checkTracking() {

    const country =
        document.getElementById("countrySelect").value;

    const trackingInput =
        document.getElementById("trackingInput").value;

    const trackingResult =
        document.getElementById("trackingResult");

    const blockedResult =
        document.getElementById("blockedResult");

    const trackId =
        document.getElementById("trackId");

    // hide both first
    trackingResult.style.display = "none";
    blockedResult.style.display = "none";

    // empty input check
    if (trackingInput.trim() === "") {

        alert("Please enter tracking number");
        return;
    }

    // USA ALLOWED
    if (country === "usa") {

        trackingResult.style.display = "block";

        trackId.innerText = trackingInput;

    }

    // OTHER COUNTRIES BLOCKED
    else {

        blockedResult.style.display = "block";

    }

}
