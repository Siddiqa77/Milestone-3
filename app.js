//Resume form display
var form = document.getElementById("resume-form");
var output = document.getElementById("resumeOutput");
//Generate resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate resume content dynamically
    var resumeHtml = "\n\n   </div>\n   <h2>Resume</h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b>".concat(name, "</p>\n   <p><b>Email:</b>").concat(email, "</p>\n   <p><b>Phone:</b>").concat(phone, "</p>\n   <p><b>Address:</b>").concat(address, "</p>\n    <h3>Education</h3>\n   <p>").concat(education, "</p>\n    <h3>Experience</h3\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    </div>\n    ");
    if (output) {
        output.innerHTML = resumeHtml;
    }
    else {
        console.error("Resume Element is missing");
    }
});
