document.getElementById('preview-btn').addEventListener('click', () => {
    const title = document.getElementById('title-input').value;
    const content = document.getElementById('content-input').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content.');
        return;
    }

    document.getElementById('preview-title').textContent = title;
    document.getElementById('preview-content').textContent = content;
    
    document.getElementById('preview-container').style.display = 'block';
});
