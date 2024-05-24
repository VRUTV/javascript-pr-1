function calculateBill() {


    let productName = document.getElementById('productName').value;
    let productPrice = parseFloat(document.getElementById('productPrice').value);
    let discount = parseFloat(document.getElementById('discount').value);

    let discountAmount = (productPrice * discount) / 100;
    let payableAmount = productPrice - discountAmount;

    document.getElementById('total').innerText =  "Total : Rs" + productPrice;
    document.getElementById('discountAmount').innerText = "Discount Amount : Rs" + discountAmount;
    document.getElementById('payableAmount').innerText =  "Payable Amount : Rs" + payableAmount;
    

    document.getElementById('results').style.display = 'block';
}