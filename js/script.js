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
  }
});
