window.onload = function() {
    const timeLabel = document.getElementById('timeLabel');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let startTime = 0;
    let intervalId;

    function formatTime(ms) {
        const date = new Date(ms);
        return date.toISOString().substr(11, 8);
    }

    function updateLabel() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        timeLabel.textContent = formatTime(elapsedTime);
    }

    function startCountdown() {
        if (!intervalId) {
            startTime = Date.now();
            intervalId = setInterval(updateLabel, 1000);
        }
    }
    

    function stopCountdown() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function resetCountdown() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        timeLabel.textContent = '00:00:00';
    }

    startButton.addEventListener('click', () => {
        startCountdown();
    });

    stopButton.addEventListener('click', () => {
        stopCountdown();
    });

    resetButton.addEventListener('click', () => {
        resetCountdown();
    });
};
