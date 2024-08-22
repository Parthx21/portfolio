function sendMail() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "5f400b0d-75fd-472a-9f17-6a57ed5e6c3d",
    To: "parthog2103@gmail.com",
    From: "parthog2103@gmail.com",
    Subject: subject,
    Body: `Name: ${username} <br> Email: ${email} <br> Message: ${message}`,
  }).then((message) => alert(message));
}
