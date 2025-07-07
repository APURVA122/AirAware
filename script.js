
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

let darkmode =localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch');

const  enabledarkmode = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
};

const disabledarkmode = () =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode','inactive');
};

if(localStorage.getItem('darkmode')==='active'){
    enabledarkmode();
}
themeswitch.addEventListener('click',()=>{
    const  dark = document.body.classList.contains('darkmode');
    if(dark){
        disabledarkmode();
    }else{
        enabledarkmode();
    }
});


// if(darkmode === "active") enabledarkmode()

// themeswitch.addEventListener('click',()=>{
//     darkmode!=="active" ? enabledarkmode() : disabledarkmode()
// })
