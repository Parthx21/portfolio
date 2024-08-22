function sendMail() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: subject,
    Body: `Name: ${username} <br> Email: ${email} <br> Message: ${message}`,
  }).then((message) => alert(message));
}
