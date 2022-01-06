class Burger_menu {
    constructor(burger_node) {
        this.content = burger_node.querySelectorAll('.in-burger');
        this.$frag = document.createDocumentFragment();
        this.cloneNodeBurger(this.content);
        burger_node.appendChild(this.$frag);
        this.$check = burger_node.querySelector('input[type=checkbox]');
        this.$check.addEventListener('change', this.handleBurger.bind(this));
    }
    cloneNodeBurger(arr) {
        this.$div = document.createElement('ul');
        this.$div.className = 'burger-menu';
        this.$div.dataset.isVisible = false;
        for (const node of arr) {
            let tmp = node.cloneNode(true);
            tmp.classList.toggle('header_nav_ul_li');
            this.$div.appendChild(tmp);
        }
        console.log(this.$div);
        this.$div.addEventListener('click', this.closeMenu.bind(this));
        this.$frag.appendChild(this.$div);
    }
    handleBurger({ target }) {
        if (target.checked) this.$div.dataset.isVisible = true;
        else this.$div.dataset.isVisible = false;
    }
    closeMenu({ target }) {
        console.log('close');
        this.$div.dataset.isVisible = false;
        this.$check.checked = false;
    }
}

export default Burger_menu;
