function sendEmail() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "jhwebsiteemail@gmail.com",
        Password: "|D-T'F!4hCj?e>OHQ95D",
        To: 'jakobithammonds@gmail.com',
        From: "jhwebsiteemail@gmail.com",
        Subject: name,
        Body: message,
    })
        .then(function (message) {
            alert("Mail has been sent successfully")
        });
}