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

    }

})();