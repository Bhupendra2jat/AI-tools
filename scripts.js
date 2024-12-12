// scripts.js
document.getElementById('diffusion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const prompt = document.getElementById('prompt').value;
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<img src="${data.image_url}" alt="Generated Image">`;
    })
    .catch(error => console.error('Error:', error));
});

// Fluid background effect
document.body.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

// Add ripple effect
document.body.addEventListener('mousedown', function() {
    document.body.classList.add('active');
});

document.body.addEventListener('mouseup', function() {
    document.body.classList.remove('active');
});
