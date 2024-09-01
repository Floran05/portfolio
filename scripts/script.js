(function(){

    window.onload = function(){

        document.querySelectorAll('a[href^="#"]').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();

                document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.querySelectorAll('.close-popup, #popups').forEach(el => {
            el.addEventListener('click', e => {
                if(el.id === 'popups' && e.target != el) return;
                const popups = document.getElementById('popups');
                if(popups) {
                    popups.style.display = 'none';
                    popups.classList.remove('show');
                }
            });
        });
        document.getElementById('show-credits').addEventListener('click', e => showPopup('credits'));
        document.getElementById('button-show-paragon-popup').addEventListener('click', e => showPopup('paragon'));

        let copyTimeout = null;
        document.getElementById('mail-text').addEventListener('click', e => {
            if(copyTimeout) return;

            const value = e.currentTarget.textContent;
            navigator.clipboard.writeText(value);
            e.currentTarget.textContent = "Copiée !";
            copyTimeout = setTimeout(target => {
                target.textContent = value;
                copyTimeout	= null;
            }, 1500, e.currentTarget);
        });

        const droneYearsSpan = document.getElementById('drone-years');
        if(droneYearsSpan){
            droneYearsSpan.textContent = (new Date()).getFullYear() - 2019;
        }

    }

    const showPopup = name => {
        const popups = document.getElementById('popups');
        popups.style.display = 'flex';
        document.querySelectorAll('.popup').forEach(el => {
            el.style.display = 'none';
        });
        document.getElementById('popup-' + name).style.display = 'block';
        setTimeout(() => { popups.classList.add('show'); }, 100);
    };

})();