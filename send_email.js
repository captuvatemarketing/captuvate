$(document).ready(function () {
    $("#sendEmailForm").submit(function (event) {
        event.preventDefault(); // Prevent page reload

        $.ajax({
            type: "POST",
            url: "send_email.php",
            data: $(this).serialize(), // Serialize form data
            success: function (response) {
                $("#statusMessage").html(response); // Display response message
                $("#sendEmailForm")[0].reset(); // Clear form
            },
            error: function () {
                $("#statusMessage").html("<p style='color: red;'>Email sending failed. Please try again.</p>");
            }
        });
    });
});
