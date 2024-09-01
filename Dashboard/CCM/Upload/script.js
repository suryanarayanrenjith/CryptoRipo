document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const fileSelectButton = document.getElementById('fileSelectButton');
    const fileNameDisplay = document.getElementById('fileName');

    const MAX_FILE_SIZE = 10 * 1024 * 1024;

    fileSelectButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size <= MAX_FILE_SIZE) {
                fileNameDisplay.textContent = `Selected File: ${file.name}`;
            } else {
                fileNameDisplay.textContent = 'File size exceeds the 10MB limit. Please choose a smaller file.';
                fileInput.value = '';
            }
        }
    });

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.classList.add('drop-zone-hover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drop-zone-hover');
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropZone.classList.remove('drop-zone-hover');

        const file = event.dataTransfer.files[0];
        if (file && file.type === 'application/zip') {
            if (file.size <= MAX_FILE_SIZE) {
                fileNameDisplay.textContent = `Selected File: ${file.name}`;
                fileInput.files = event.dataTransfer.files;
            } else {
                fileNameDisplay.textContent = 'File size exceeds the 10MB limit. Please choose a smaller file.';
            }
        } else {
            fileNameDisplay.textContent = 'Please drop a valid ZIP file.';
        }
    });
});