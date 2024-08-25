        const endDate = new Date('2024-08-31T18:30:00');

        function updateCountdown() {
            const now = new Date();
            const timeRemaining = endDate - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('odliczanie').innerHTML = 
                `${days} dni ${hours} godz. ${minutes} min. ${seconds} sek.`;

            if (timeRemaining < 0) {
                document.getElementById('odliczanie').innerHTML = "Czas minął!";
                clearInterval(countdownInterval);
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);

        updateCountdown();
