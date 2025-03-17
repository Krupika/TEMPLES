
document.getElementById('bookingForm').onsubmit = function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var temple = document.getElementById('temple').value;
    document.getElementById('confirmationMessage').innerHTML =
        "Thank you, " + name + ". Your ticket to " + temple + " has been booked!";
};
function goBack() {
    window.history.back();
}
