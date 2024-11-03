function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value)
    let newProductCount = productCount

    if (isIncrease == true) {
        newProductCount = productCount + 1
    }
    if (isIncrease == false && productCount > 1) {
        newProductCount = productCount - 1
    }

    productInput.value = newProductCount

    let productTotal;
    if (product = 'laptop') {
        productTotal = newProductCount * 1450
    }
    else {
        productTotal = newProductCount * 249
    }

    document.getElementById(product + '-count').innerText = productCount
    handleCheckout()
}

function handleCheckout() {
    const laptopCount = getItems('laptop')
    const airpodCount = getItems('airpod')

    const totalPrice = laptopCount * 1450 + airpodCount * 249

    document.getElementById('sub-total').innerText = totalPrice

    const tax = Math.round(totalPrice * 0.0635)
    document.getElementById('tax-amount').innerText = tax

    const grandTotal = totalPrice + tax
    document.getElementById('grand-total').innerText = grandTotal

}

function getItems(product){
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value)
    return productCount
}

function checkout() {
    alert("Thanks for purchasing with Interactive Carts")
    location.reload()
}
