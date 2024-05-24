
    let principal = 3000;
    let rate = 10;   
    let years = 3;
    let aamount = document.getElementById("aamount");
    let iamount = document.getElementById("iamount");


    let accruedAmount = principal * (1 + (rate * years));

    let interestAmount = accruedAmount - principal; 


    aamount.innerHTML = "The total accrued amount is:=" + accruedAmount;
    iamount.innerHTML = "The total interest amount is:=" + interestAmount;

