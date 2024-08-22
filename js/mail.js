function sendMail() {
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "parthog2103@gmail.com",
    Password: "8565E780A9F7B0DDEC8975CE5EE6B74D3D8B",
    To: "parthog2103@gmail.com",
    From: "parthog2103@gmail.com",
    Subject: subject,
    Body: `Name: ${username} <br> Email: ${email} <br> Message: ${message}`,
  }).then((message) => alert(message));
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
});