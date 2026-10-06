document.addEventListener('DOMContentLoaded', () => {
    // Currently, 0 out of 5 lessons are complete. 
    // We will update this logic later when we add backend saving.
    const targetProgress = 0; 
    const progressBar = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    setTimeout(() => {
        progressBar.style.width = targetProgress + '%';
        
        let current = 0;
        if (targetProgress > 0) {
            const interval = setInterval(() => {
                if (current >= targetProgress) {
                    clearInterval(interval);
                } else {
                    current++;
                    progressText.innerText = current + '%';
                }
            }, 30);
        } else {
            progressText.innerText = '0%';
        }
    }, 500);
});

function startLearning() {
    document.getElementById('roadmap').scrollIntoView({ 
        behavior: 'smooth' 
    });
}