function calculateTotal() {
    let room = document.getElementById("room");
    let daysBox = document.getElementById("days");
    let totalBox = document.getElementById("total");

    if (!room || !daysBox || !totalBox) {
        return;
    }

    let roomPrice = Number(room.value);
    let days = Number(daysBox.value);

    if (isNaN(days) || days < 1) {
        days = 1;
        daysBox.value = 1;
    }

    let total = roomPrice * days;

    let addons = document.getElementsByClassName("addon");

    for (let i = 0; i < addons.length; i++) {
        if (addons[i].checked) {
            total += Number(addons[i].value);
        }
    }

    totalBox.innerHTML = "Estimated Total: $" + total.toFixed(2);
}

function showReviews() {
    let reviewOutput = document.getElementById("reviewOutput");

    let guestNames = ["Crista", "Teena", "Carolyn", "Betty"]
    let roomNames = ["Rose Room", "Merlot Room", "Rose Room", "Merlot Room"]
    let ratings = ["5", "4", "5", "5"]
    let comments = [
        "We had a very relaxing stay at the Rustic Pour.",
        "I can not wait to come back in the summer for the Sangria Social!",
        "The Rose room was perfect for a refreshing reset!",
        "Everything felt so charming and thoughtful. We will definitely be back!"
    ];
    
    let output = "";

    for (let i = 0; i< guestNames.length; i++) {
        output += "<div class = 'review-card'>";
        output += "<h3>" + guestNames[i] + "</h3>";
        output += "<p><strong>Room: </strong>" + roomNames[i] + "</p>";
        output += "<p><strong>Rating: </strong>" +ratings[i] + " / 5</p>";
        output += "<p>" + comments[i] + "</p>";
        output += "</div>";
    }

    reviewOutput.innerHTML = output;
}

window.onload = function () {
    calculateTotal();
    showReviews();
};