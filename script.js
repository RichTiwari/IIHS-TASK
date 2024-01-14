let video, canvas, captureBtn, logoutBtn;

function login() {
    // Simulate a successful login (replace this with your authentication logic)
    const loginContainer = document.getElementById('login-container');
    const imageCaptureContainer = document.getElementById('image-capture-container');

    loginContainer.style.display = 'none';
    imageCaptureContainer.style.display = 'block';

    // Initialize video and canvas elements
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    captureBtn = document.getElementById('capture-btn');
    logoutBtn = document.getElementById('logout-btn');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
}

function captureImage() {
    // Capture image from video stream and display it on the canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

function logout() {
    // Simulate a logout by resetting the UI and stopping the video stream
    const loginContainer = document.getElementById('login-container');
    const imageCaptureContainer = document.getElementById('image-capture-container');

    loginContainer.style.display = 'block';
    imageCaptureContainer.style.display = 'none';

    // Stop the video stream
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
        track.stop();
    });

    video.srcObject = null;
}

// Ensure logout button is disabled until a successful login
if (logoutBtn) {
    logoutBtn.disabled = true;
}

const button= document.getElementById('button');
       
const textlight = document.querySelector('.textlight')

button.addEventListener('click',showText)

function showText(inputName)
{
    let text = usertext.value;
    textlight.innerText = text;
    usertext.value=""
}