import Carrousel from './carrousel.js';
import Burger_menu from './burger_menu.js';
import Contributor_card from './contributor_card.js';
import { data } from "../contributor/contributor.js"

new Carrousel(document.querySelector('.carrousel'));

// Observing the navbar for switching his style when scrolling
let $navBar = document.querySelector('header');
let $isSticky = document.querySelector('#isSticky');

let observer = new IntersectionObserver(
    function (entries) {
        if (entries[0].intersectionRatio === 0) $navBar.dataset.isSticky = true;
        else if (entries[0].intersectionRatio === 1)
            $navBar.dataset.isSticky = false;
    },
    { threshold: [0, 1] }
);

observer.observe($isSticky);
// End of obsvervation

let $navBurger = document.querySelector('.header_nav');
new Burger_menu($navBurger);


// Actual contributor list

let $ulDiv = document.querySelector(".actual_contrib_ul")
let content = ""
data.forEach(el => {
    content += Contributor_card(el)
})
$ulDiv.innerHTML = content;