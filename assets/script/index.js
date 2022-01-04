import Carrousel from './carrousel.js';

new Carrousel(document.querySelector('.carrousel'));

let $navBar = document.querySelector('header');
let $isSticky = document.querySelector('#isSticky');

let observer = new IntersectionObserver(
    function (entries) {
        console.log(entries);
        if (entries[0].intersectionRatio === 0) $navBar.dataset.isSticky = true;
        else if (entries[0].intersectionRatio === 1)
            $navBar.dataset.isSticky = false;
    },
    { threshold: [0, 1] }
);

observer.observe($isSticky);
