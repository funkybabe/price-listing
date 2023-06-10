const Button = document.getElementById("select-sue");
Button.addEventListener('click', myfunction);

function myfunction() {
    var monthpayment = document.getElementsByTagName("h3");
    var annualpayment = document.getElementsByTagName("h4");
    var i;
    var n;

    for (i = 0; i< monthpayment.length; i++) {
        for (n = 0; n< annualpayment.length; n++) {
            if (monthpayment[i].style.display === "none") {
                monthpayment[i].style.display = "block";
                annualpayment[i].style.display = "none";
                Button.style.justifyContent = "flex-end"
            } else {
                monthpayment[i].style.display = "none";
                annualpayment[i].style.display = "block";
                Button.style.justifyContent = "flex-end"
            }
    }   }
   
}
