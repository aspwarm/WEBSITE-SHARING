document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData();
    var fileInput = document.getElementById('videoFile');
    formData.append('file', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        return response.text();
    })
    .then(data => {
        alert('Upload successful');
    })
    .catch(error => {
        alert('Upload failed: ' + error.message);
    });
});
