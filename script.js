const pageCount = document.querySelector('#count');
const priceByMonth = document.querySelector('#price-value');
const rangeInput = document.querySelector('.range-input');
const toggleSwitch = document.querySelector('#toggle-switch');

rangeInput.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, cyan ${value}%, #ccc ${value}%)`;
});

// Array of default prices
const priceArray = [8, 12, 16, 24, 36];


// Function to toggle discount
function applyDiscount(isChecked) {
    return isChecked ? priceArray.map(price => (price*25)/100) : [...priceArray];
}

// Function to update page views and price based on range input value
function updatePricing(rangeValue, prices) {
    switch (parseInt(rangeValue)) {
        case 20:
            pageCount.textContent = '10K';
            priceByMonth.textContent = `$${prices[0]}.00`;
            break;
        case 40:
            pageCount.textContent = '50K';
            priceByMonth.textContent = `$${prices[1]}.00`;
            break;
        case 60:
            pageCount.textContent = '100K';
            priceByMonth.textContent = `$${prices[2]}.00`;
            break;
        case 80:
            pageCount.textContent = '500K';
            priceByMonth.textContent = `$${prices[3]}.00`;
            break;
        case 100:
            pageCount.textContent = '1M';
            priceByMonth.textContent = `$${prices[4]}.00`;
            break;
        default:
            pageCount.textContent = '0';
            priceByMonth.textContent = `$00.00`;
    }
}

// Event listener for range input to update price and views
rangeInput.addEventListener('input', function (event) {
    const currentPrices = applyDiscount(toggleSwitch.checked);
    updatePricing(event.target.value, currentPrices);
});

// Event listener for toggle switch to apply discount
toggleSwitch.addEventListener('input', function (event) {
    const currentPrices = applyDiscount(event.target.checked);
    updatePricing(rangeInput.value, currentPrices);
});

// Initial setup to reset page views and price
pageCount.textContent = '0';
priceByMonth.textContent = `$00.00`;
