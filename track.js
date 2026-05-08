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

        // TITLE + SUBTITLE
        const title =
            document.querySelector("h1");

        const subtitle =
            document.querySelector(".subtitle");

        // RESET
        trackingResult.style.display = "none";
        blockedResult.style.display = "none";

        // EMPTY
        if (trackingInput.trim() === "") {

            alert("Please enter tracking number");
            return;
        }

        // USA
        if (country === "usa") {

            // hide fake error text
            title.style.display = "none";
            subtitle.style.display = "none";

            trackingResult.style.display = "block";

            trackId.innerText = trackingInput;

        }

        // BLOCKED COUNTRIES
        else {

            // show fake error text
            title.style.display = "block";
            subtitle.style.display = "block";

            blockedResult.style.display = "block";

        }

    });

};
