let pageCount = document.querySelector('#count')
let priceByMonth = document.querySelector('#price-value')
let rangeInput = document.querySelector('.range-input')
let toggleSwitch = document.querySelector('#toggle-switch')

rangeInput.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, cyan ${value}%, #ccc ${value}%)`;
});

let priceArray = [8,12,16,24,36]
let discountedArray

function discountToggle(valueChecked){
    if(!valueChecked){
        priceArray = [8,12,16,24,36]
    }
    else{
        priceArray = priceArray.map(price=>'0'+(price*25)/100)
    }
}

toggleSwitch.addEventListener('input',(toggle)=>{
    discountToggle(toggle.target.checked)
})


pageCount.textContent = 0
function updateValue(rangeValue){
    // console.log(rangeValue)
    switch(parseInt(rangeValue)){   
        case 20:
            pageCount.textContent = '10K'
            priceByMonth.textContent = `$${priceArray[0]}.00`
            break;
        case 40:
            pageCount.textContent = '50K'
            priceByMonth.textContent = `$${priceArray[1]}.00`
            break;
        case 60:
            pageCount.textContent = '100K'
            priceByMonth.textContent =`$${priceArray[2]}.00`
            break;
        case 80:
            pageCount.textContent = '500K'
            priceByMonth.textContent = `$${priceArray[3]}.00`
            break;
        case 100:
            pageCount.textContent = '1M'
            priceByMonth.textContent = `$${priceArray[4]}.00`
            break;
        default:
            pageCount.textContent = 0
            priceByMonth.textContent = `00.00`
        }
}

rangeInput.addEventListener('input',(range)=>{
    updateValue(range.target.value)
})
