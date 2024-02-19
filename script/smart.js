




// Initialize variables to store selected seats and their prices
const selectedSeats = [];
let totalPrice = 0;
let selectedSeatBadgeCount = 0;
let selectedCurrentSeat = 40;


 

// Function to update grand total
function updateGrandTotal() {
    const grandTotalCell = document.getElementById('grand-total-price');
    grandTotalCell.textContent = `BDT${totalPrice.toFixed()}`; // Displaying grand total price with two decimal places
}

function bookSeat(seatNumber) {
    // Check if the seat is already selected
    const seatIndex = selectedSeats.indexOf(seatNumber);

    if (selectedSeats.length >= 4 && seatIndex === -1) {
        // If 4 seats are already selected and the current seat is not one of them, alert the user
        alert("You can only select up to 4 seats.");
        return;

       
    }

    if (seatIndex === -1) {
        // If the seat is not selected, add it to the list
        selectedSeats.push(seatNumber);
        totalPrice += 550; // Assuming the price is 550 for each seat

        // Change the button color
        document.getElementById(`seat-${seatNumber}`).style.backgroundColor = '#1DD100';

        // Decrement the count-seat
        selectedCurrentSeat = Math.max(0, selectedCurrentSeat - 1);
        document.getElementById('current-seat').textContent = selectedCurrentSeat;

         // Increment the badge count
         selectedSeatBadgeCount++;
         document.getElementById('seatBadge').textContent = selectedSeatBadgeCount;
    } else {
        // If the seat is already selected, remove it from the list
        selectedSeats.splice(seatIndex, 1);
        totalPrice -= 550; // Assuming the price is 550 for each seat

        // Change the button color back to the default
        document.getElementById(`seat-${seatNumber}`).style.backgroundColor = '';

        // Increment the badge count
        selectedCurrentSeat++;
        document.getElementById('current-seat').textContent = selectedCurrentSeat;

        // Decrement the badge count
        selectedSeatBadgeCount = Math.max(0, selectedSeatBadgeCount - 1);
        document.getElementById('seatBadge').textContent = selectedSeatBadgeCount;
    }

    

    // Update the table with selected seats and their prices
    updateSelectedSeatsTable();
    // Update grand total
    updateGrandTotal();

    
}

function applyCoupon() {
    const couponCodeInput = document.getElementById('couponCode').value;
    if (couponCodeInput === 'NEW15') {
        totalPrice *= 0.85; // Apply 15% discount
        hideCouponField(); // Hide the coupon field
    } else if (couponCodeInput === 'Couple 20') {
        totalPrice *= 0.80; // Apply 20% discount
        hideCouponField(); // Hide the coupon field
    } else {
        alert('Invalid coupon code');
    }

    // Update the table with discounted total price
    updateSelectedSeatsTable();
  
    
}

function hideCouponField() {
    document.getElementById('coupon-field').style.display = 'none';
}



function updateSelectedSeatsTable() {
    const tableBody = document.querySelector('#selected-seats tbody');

    // Clear the table
    tableBody.innerHTML = '';

    // Populate the table with selected seats and their prices
    selectedSeats.forEach(seatNumber => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = seatNumber;
        cell2.textContent = 'Economy'; // Inserting "economy" class
        cell3.textContent = '550'; // Assuming the price is 550 for each seat
        cell1.style.font = "normal 16px inter"; // Regular font, 16px, inter
        cell2.style.font = "normal 16px inter"; // Regular font, 16px, inter
        cell3.style.font = "normal 16px inter"; // Regular font, 16px, inter
    });

    // Display the total price
    const totalPriceRow = tableBody.insertRow();
    const totalPriceLabelCell = totalPriceRow.insertCell(0);
    totalPriceLabelCell.textContent = 'Total Price:';
    totalPriceLabelCell.style.font = "bold 16px inter";
    const emptyCell = totalPriceRow.insertCell(1);
    emptyCell.textContent = ''; // Empty cell
    const totalPriceCell = totalPriceRow.insertCell(2);
    totalPriceCell.colSpan = 2;
    totalPriceCell.style.font =  "small-caps bold 16px inter";
    totalPriceCell.textContent = `BDT${totalPrice.toFixed()}`; // Displaying total price with two decimal places
     

     // Update grand total
     updateGrandTotal();
}




document.getElementById('nextButton').addEventListener('click', onNextButtonClick);

function onNextButtonClick() {
    // Check if at least one seat is selected
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        my_modal_1.close();
        return;
    }

    // Check if the phone number input field is empty
    const phoneNumberInput = document.getElementById('phoneNumber').value.trim();
    if (phoneNumberInput === '') {
        alert("Please enter your phone number.");
        my_modal_1.close();
        return;
    }

    // If both conditions are met, show the modal
    my_modal_1.showModal();
    
}
document.addEventListener("DOMContentLoaded", function() {
    var buyTicketsButton = document.getElementById("buy-tickets-button");
    var paribahanSection = document.getElementById("paribahan-name");

    buyTicketsButton.addEventListener("click", function() {
        paribahanSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var busButton = document.getElementById("bus-btn");
    var busNameSection = document.getElementById("bus-name");

    busButton.addEventListener("click", function() {
        busNameSection.scrollIntoView({ behavior: "smooth" });
    });
});










