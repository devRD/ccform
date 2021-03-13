/**
 * Credit Card Validation
 * Card Number (with / and - )
 * CVV Number (MM/YY)
 * Phone Number with Country
 **/

function showMessage(type, text = "") {
  let msg = document.getElementById("message");
  msg.className = "";
  switch (type) {
    case "error":
      msg.className += "alert alert-danger";
      msg.innerText = text;
      break;
    case "pass":
      msg.className += "alert alert-primary";
      msg.innerText = text;
      break;
    default:
      console.log("Type of Message is Unknown");
  }
}

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
    showMessage("error", "Please fill in the required fields!");
  } else {
    let regexCVV =/^[0-9]{3}$/;
    let regexCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    let str = expiry.toString().split('/');
    let month = parseInt(str[0], 10), year = parseInt(str[1], 10) + 2000;
    let today = new Date();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    if (regexCard.test(cnum)) {
      if(month < 1 || month > 12 || year < currentYear || (year == currentYear && month < currentMonth)) {
        showMessage("error", "Enter a valid expiry date!");
      } else {
        let listCVV = regexCVV.exec(cvv);
        if(cvv != listCVV) {
          showMessage("error", "Enter a valid CVV number!");
        } else {
          showMessage("pass", "Your card details have been submitted!");
        }
      }
    } else {
      showMessage("error", "Enter a valid Card number!");
    }
  }
});
