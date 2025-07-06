
        // sample aqi data 
        function updateAQIColor() {
            const aqiCircle = document.getElementById('aqiCircle');
            const currentAQI = 156;
            
            if (currentAQI <= 50) {
                aqiCircle.style.background = '#2ecc71';
            } else if (currentAQI <= 100) {
                aqiCircle.style.background = '#f1c40f';
            } else if (currentAQI <= 150) {
                aqiCircle.style.background = '#f39c12';
            } else if (currentAQI <= 200) {
                aqiCircle.style.background = '#e74c3c';
            } else {
                aqiCircle.style.background = '#8e44ad';
            }
        }

        // Scrolling links for smooth ui/ux
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
