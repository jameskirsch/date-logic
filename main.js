'use strict'; // this will display bad syntax as real errors, used to write secure javascript

// Sets the initial price, discount price, and days in advance into the DOM
var price = 50.00;
var discountPrice = 10.00;
var daysInAdvance = 6;
document.getElementById('price').innerHTML = price;
document.getElementById('discountPrice').innerHTML = discountPrice;
document.getElementById('daysInAdvance').innerHTML = daysInAdvance;

// Need a way to add days to a given date, this is how to do it.
function addDaysToDate(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function calculateTicketPrice() {
    console.clear();

    // Get Today's Date
    var dateToday = new Date();
    var dd = dateToday.getDate();
    var mm = dateToday.getMonth() + 1; // January starts at 0
    var yyyy = dateToday.getFullYear();

    // Format month to always have a zero in the formatting if less than 10
    // this can be done easier with jQuery
    if (mm < 10) {
        mm = '0' + mm;
    }

    // Format the Date for Today
    var today = new Date(yyyy + '-' + mm + '-' + dd);
    console.log('Todays Date: ' + today);

    // Get The User's selection and the Projected Discount Date (days in advance from current date)
    var userSelectedTravelDate = new Date(document.getElementById('travelDate').value);
    console.log('User Selected Travel Date: ' + userSelectedTravelDate);

    var projectedDiscountDate = addDaysToDate(today, daysInAdvance);
    console.log('Projected Discount Date: ' + projectedDiscountDate);

    var quallifyingEventElement = document.getElementById('qualifyingEvent');
    if (userSelectedTravelDate.getTime() > projectedDiscountDate.getTime()) {
        quallifyingEventElement.innerHTML = 'You Qualify for a Discount.';
        quallifyingEventElement.style.background = 'green';
        document.getElementById('price').innerHTML = (price - discountPrice);
        document.getElementById('price').style.background = 'lightgreen';
    } else {
        quallifyingEventElement.innerHTML = 'You do not Qualify for a Discount.';
        quallifyingEventElement.style.background = 'grey';
        document.getElementById('price').innerHTML = price;
        document.getElementById('price').style.background = 'white';
    }
}