if (document.querySelector('.js-timer')) {
    function downTimer() {

        const timer = document.querySelector('.js-timer');

        const deadline = new Date(2022, 1, 14);
        let timerId = null;

        function countdownTimer() {

            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
            }
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

            timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
        }


        countdownTimer();
        timerId = setInterval(countdownTimer, 1000);
    }
    setTimeout(() => {
        downTimer();
    }, 1000)
};