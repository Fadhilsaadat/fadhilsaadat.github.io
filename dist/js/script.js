// Navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
});

// Skills
document.addEventListener('alpine:init', () => {
    Alpine.data('skillDisplay', () => ({
        skills: [{
                'title': 'HTML',
                'percent': '95',
            },
            {
                'title': 'CSS',
                'percent': '70',
            },
            {
                'title': 'Vue.js',
                'percent': '60',
            },
            {
                'title': 'JavaScript',
                'percent': '70',
            },
            {
                'title': 'Figma',
                'percent': '80',
            }, {
                'title': 'PHP',
                'percent': '65',
            }, {
                'title': 'Laravel',
                'percent': '75',
            }
        ],
        currentSkill: {
            'title': 'HTML',
            'percent': '95',
        }
    }));
});

//tilt
VanillaTilt.init(document.querySelector(".kbd"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector(".mouse"), {
    max: 25,
    speed: 400
});