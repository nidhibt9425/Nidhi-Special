window.onload = function () {

    const button = document.querySelector(".search-box button");

    button.addEventListener("click", function () {

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

        // RESET
        trackingResult.style.display = "none";
        blockedResult.style.display = "none";

        // EMPTY INPUT
        if (trackingInput.trim() === "") {

            alert("Please enter tracking number");
            return;
        }

        // USA ALLOWED
        if (country === "usa") {

            trackingResult.style.display = "block";

            trackId.innerText = trackingInput;

        }

        // OTHERS BLOCKED
        else {

            blockedResult.style.display = "block";

        }

    });

};
