function trackPackage(){

    const trackingInput =
        document.getElementById("trackingInput").value;

    const resultBox =
        document.getElementById("resultBox");

    const trackId =
        document.getElementById("trackId");

    const carrier =
        document.getElementById("carrier");

    const status =
        document.getElementById("status");

    if(trackingInput === ""){

        alert("Please enter tracking number");
        return;
    }

    resultBox.style.display = "block";

    trackId.innerText = trackingInput;

    const carriers = [
        "USPS",
        "UPS",
        "FedEx"
    ];

    const statuses = [

        "Your package is currently in transit.",

        "Shipment arrived at regional facility.",

        "Out for delivery today.",

        "Package delivered successfully."

    ];

    const randomCarrier =
        carriers[Math.floor(Math.random() * carriers.length)];

    const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

    carrier.innerText = randomCarrier;

    status.innerText = randomStatus;
}
