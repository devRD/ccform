/**
 * Credit Card Validation
 * Card Number (with / and - )
 * CVV Number (MM/YY)
 * Phone Number with Country
 **/

document.getElementById("csubmit").addEventListener("click", (event) => {
  event.preventDefault();

  let cname = document.getElementById("cname").value;
  let cnum = document.getElementById("cnum").value;
  let cvv = document.getElementById("cvv").value;
  let expiry = document.getElementById("expiry").value;
  let code = document.getElementById("code").value;
  let phnum = document.getElementById("ph-num").value;

  let msg = document.getElementById("message");

  if (cname == "" || cnum == "" || cvv == "" || expiry == "" || phnum == "") {
    msg.className = "";
    msg.className += "alert alert-danger";
    msg.innerText = "Please fill in the required fields!";
  } else {
    let regexCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    if (regexCard.test(cnum)) {
      msg.className = "";
      msg.className += "alert alert-primary";
      msg.innerText = "Your card details have been submitted!";
    } else {
      msg.className = "";
      msg.className += "alert alert-danger";
      msg.innerText = "Enter a valid Card number!";
    }
  }
});
