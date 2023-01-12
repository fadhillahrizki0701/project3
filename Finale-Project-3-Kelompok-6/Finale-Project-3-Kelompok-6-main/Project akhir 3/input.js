function saveToLocalstorage() {
  const email = document.getElementById("email").value
  localStorage.setItem("Email", email)

  const subject = document.getElementById("subject").value
  localStorage.setItem("subject", subject)

  const message = document.getElementById("message").value
  localStorage.setItem("message", message)
}

function validateForm() {
  if (document.forms["formContact"]["email"].value == "") {
    alert("Silahkan Masukan Email Terlebih Dahulu");
    document.forms["formContact"]["email"].focus();
    return false;
  }

  if (document.forms["formContact"]["subject"].value == "") {
    alert("Subject Tidak Boleh Kosong");
    document.forms["formContact"]["subject"].focus();
    return false;
  }

  if (document.forms["formContact"]["message"].value == "") {
    alert("Message Tidak Boleh Kosong");
    document.forms["formContact"]["message"].focus();
    return false;
  }
}

