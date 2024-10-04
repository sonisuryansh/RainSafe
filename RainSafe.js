function handleQuerySubmit(event) {
    event.preventDefault();
    const status = document.getElementById('queryStatus');
    status.textContent = 'Query submitted successfully!';
    status.style.color = 'green'; 
    document.getElementById('queryForm').reset();
}

function toggleDonateMessage() {
    const donateMessage = document.getElementById("donateMessage");
    donateMessage.classList.toggle("hidden");
}


(function () {
    emailjs.init("4HKBMHU_yDXU8KTgr");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_ruulpyo', 'template_peevwsp', this)
        .then(function () {
            document.getElementById('status').innerText = 'Message sent successfully!';
            document.getElementById('contactForm').reset();
        }, function (error) {
            document.getElementById('status').innerText = 'Failed to send message, Please try again.';
        });
});


function handleComplaintSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('complaintStatus');
    status.textContent = 'Complaint submitted successfully!';
    status.style.color = 'green'; 
    document.getElementById('complaintForm').reset();
}


function handleQuerySubmit(event) {
    event.preventDefault();
    document.getElementById('queryForm').reset();
    document.getElementById('collegeImage').style.display = 'none'; 
    document.getElementById('collegeImage2').style.display = 'none'; 
}

function showImage() {
    const location = document.getElementById('problem').value;
    const area = document.getElementById('time').value;
    const imageSMS = document.getElementById('collegeImage');
    const imageBBD = document.getElementById('collegeImage2');

    
    if (location === 'lucknow' && area === 'sms') {
        imageSMS.src = "graph1.webp"; 
        imageSMS.style.display = 'block';
        imageBBD.style.display = 'none'; 
    } 
    
    else if (location === 'lucknow' && area === 'bbd') {
        imageBBD.src = "graph2.jpg"; 
        imageBBD.style.display = 'block';
        imageSMS.style.display = 'none'; 
    } else {
        imageSMS.style.display = 'none';
        imageBBD.style.display = 'none';
    }
}