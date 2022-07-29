const sections = document.querySelectorAll('.section');
const sectsBtn = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    sectBtn.forEach((btn) => {
        btn.addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    });

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            sectsBtn.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active')
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener('click', () => { 
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();