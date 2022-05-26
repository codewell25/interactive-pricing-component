
let slider = document.getElementById('slider')
let price = document.getElementById('price')


let rangeValue;

let isYearly = false;
let toggleBtn = document.getElementById('package-shifter')

let packageType = document.getElementById('package-type')





let pageViews = document.getElementById('page-views')

slider.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;

    if (rangeValue <= 20) {
        pageViews.innerText = "10K PAGEVIEWS"
        price.innerText = "$8.00"
    }
})



slider.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue > 20 && rangeValue <= 40) {
        pageViews.innerText = "50K PAGEVIEWS"
        price.innerText = "$12.00"
    }
})

slider.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue > 40 && rangeValue <= 60) {
        pageViews.innerText = "100K PAGEVIEWS"
        price.innerText = "$16.00"
    }
})

slider.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue > 60 && rangeValue <= 80) {
        pageViews.innerText = "500K PAGEVIEWS"
        price.innerText = "$24.00"
    }
})

slider.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue > 80 && rangeValue <= 100) {
        pageViews.innerText = "1M PAGEVIEWS"
        price.innerText = "$36.00"
    }
})

toggleBtn.addEventListener('click', () => {
    if (isYearly) {
        isYearly = false;
        packageType.innerText = '/ month'
    }
    else {
        isYearly = true
        packageType.innerText = '/ year'
    }
})

toggleBtn.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue <= 20 && isYearly == true) {
        price.innerText = "$" + (((8 * 12) - (25 / 100) * 8 * 12)).toFixed(2)
    }
    else if (rangeValue <= 20 && isYearly == false) {
        price.innerText = "$8.00"
    }
})

toggleBtn.addEventListener('click', () => {

    rangeValue = document.getElementById('slider').value
    if (rangeValue > 20 && rangeValue <= 40 && isYearly == true) {
        price.innerText = "$" + (((12 * 12) - (25 / 100) * 12 * 12)).toFixed(2)
    }
    else if (rangeValue > 20 && rangeValue <= 40 && isYearly == false) {
        price.innerText = "$12.00"
    }

})

toggleBtn.addEventListener('click', () => {

    rangeValue = document.getElementById('slider').value;

    if (rangeValue > 40 && rangeValue <= 60 && isYearly == true) {
        price.innerText = "$" + (((16 * 12) - (25 / 100) * 16 * 12)).toFixed(2)
    }
    else if (rangeValue > 40 && rangeValue <= 60 && isYearly == false) {
        price.innerText = "$16.00"
    }

})

toggleBtn.addEventListener('click', () => {

    rangeValue = document.getElementById('slider').value;

    if (rangeValue > 60 && rangeValue <= 80 && isYearly == true) {
        price.innerText = "$" + (((24 * 12) - (25 / 100) * 24 * 12)).toFixed(2)
    }
    else if (rangeValue > 60 && rangeValue <= 80 && isYearly == false) {
        price.innerText = "$24.00"
    }

})


toggleBtn.addEventListener('click', () => {
    rangeValue = document.getElementById('slider').value;
    if (rangeValue > 80 && isYearly == true) {
        price.innerText = "$" + (((36 * 12) - (25 / 100) * 36 * 12)).toFixed(2)
    }
    else if (rangeValue > 80 && rangeValue <= 80 && isYearly == false) {
        price.innerText = "$36.00"
    }

})



