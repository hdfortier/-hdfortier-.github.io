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

window.onload = function () {
    calculateTotal();
};
