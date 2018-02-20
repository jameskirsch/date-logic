// Sets the initial price, discount price, and days in advance into the DOM
var price = 50.00;
var discountPrice = 10.00;
var daysInAdvance = 5;
document.getElementById('price').innerHTML = price;
document.getElementById('discountPrice').innerHTML = discountPrice;
document.getElementById('daysInAdvance').innerHTML = daysInAdvance;

function calculateTicketPrice() {

    // Get today's Date
    var dateToday = new Date();
    var dd = dateToday.getDate();
    var mm = dateToday.getMonth() + 1; // January starts at 0
    var yyyy = dateToday.getFullYear();

    // Formats months to always have a zero in the formatting if less than 10, 
    // this can be done easier with jQuery
    if (mm < 10) {
        mm = '0' + mm;
    }

    // Format the Date for Today
    var today = new Date(yyyy + '-' + mm + '-' + dd);

    // Get The User's selection and the Projected Discount Date (days in advance from current date)
    var userSelectedTravelDate = new Date(document.getElementById('travelDate').value);

    // The main logic
    if (userSelectedTravelDate.getDate() > (today.getDate() + daysInAdvance)) {
        console.log('discount');
    }

    console.log(today.getDate() + daysInAdvance);

    console.log('Todays Date: ' + today);
    console.log('Selected Date: ' + userSelectedTravelDate);
}