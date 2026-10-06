document.addEventListener('DOMContentLoaded', () => {
    const cmdInput = document.getElementById('cmd-input');
    const terminalScreen = document.getElementById('terminal-screen');
    const completeBtn = document.getElementById('complete-btn');

    cmdInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const command = cmdInput.value.trim().toLowerCase();
            
            // Echo what the user typed to the screen
            const historyLine = document.createElement('div');
            historyLine.innerHTML = `<span class="prompt-text">user@bugbounty:~$</span> <span style="color: #ededed;">${command}</span>`;
            terminalScreen.insertBefore(historyLine, cmdInput.parentElement);

            // Process the command output
            const responseLine = document.createElement('div');
            responseLine.style.marginBottom = "10px";

            if (command === 'whoami') {
                responseLine.innerHTML = `<span style="color: #ededed;">root</span><br><br><span class="success-text">Challenge Solved! FLAG{W3LC0M3_T0_TH3_SH3LL}</span>`;
                
                // Show completion button using minimal styling
                completeBtn.style.display = 'inline-block';
                completeBtn.innerText = "Challenge Solved! Return to Roadmap ↓";
            } 
            else if (command === '') {
                // Do nothing if they just press enter on an empty line
                responseLine.innerHTML = '';
                responseLine.style.marginBottom = "0";
            }
            else {
                // Simulate standard error
                responseLine.innerHTML = `bash: ${command}: command not found`;
                responseLine.classList.add('error-text');
            }

            if (command !== '') {
                terminalScreen.insertBefore(responseLine, cmdInput.parentElement);
            }

            // Clear the input box and scroll to the bottom
            cmdInput.value = '';
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }
    });
});