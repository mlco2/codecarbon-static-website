class Carrousel {
    constructor(node) {
        this.node = node;
        this.initCarrousel();
    }
    initCarrousel() {
        this.media = this.node.querySelectorAll('img');
        this.carrousel = this.renderCarrousel();
        this.node.appendChild(this.carrousel);
        this.control = this.node.querySelectorAll(
            '.carrousel_container_control'
        );
        for (let ctrl of this.control) {
            ctrl.addEventListener('click', this.handleClick.bind(this));
        }
        for (let media of this.media) {
            this.carrousel.appendChild(media);
        }
        this.index = {
            max: this.media.length,
            current: -1,
            next: 0,
            previous: 0,
        };
        this.setIndex(2);
        this.setMedia();
        this.interval = window.setInterval(() => {
            this.setIndex(1);
            this.setMedia();
        }, 10000);
    }
    setMedia() {
        for (let i = 0; i < this.media.length; ++i) {
            if (i === this.index.current) this.media[i].style.display = 'unset';
            else this.media[i].style.display = 'none';
        }
    }
    handleClick(e) {
        if (e.target.dataset.direction === 'left') this.setIndex(-1);
        else this.setIndex(1);
        this.setMedia();
    }
    setIndex(val) {
        this.index.current += val >= 0 ? 1 : -1;
        this.index.current %= this.index.max;
        if (this.index.current < 0) this.index.current = this.index.max - 1;
        this.index.previous = (this.index.current - 1) % this.index.max;
        if (this.index.previous < 0) this.index.previous = this.index.max - 1;
        this.index.next = (this.index.current + 1) % this.index.max;
        if (this.index.next < 0) this.index.next = this.index.max - 1;
    }
    renderCarrousel() {
        let $car = document.createElement('div');
        $car.className = 'carrousel_container';
        $car.innerHTML = `
        <span class="carrousel_container_control" data-direction="left" 
        style="
            position: absolute;
            top: 50%;
            left: 0;
            font-size: 3rem;
            background-color: #707070;
            padding: 1rem;
            color: white;
            cursor: pointer;
            border: 1px solid white;
            " > < </span>
        <span class="carrousel_container_control" data-direction="right" 
        style="
            position: absolute;
            top: 50%;
            right: 0;
            font-size: 3rem;
            background-color: #707070;
            padding: 1rem;
            color: white;
            cursor: pointer;
            border: 1px solid white;
            "
            > > </span>
        `;
        $car.style.position = 'relative';
        $car.style.display = 'flex';
        $car.style.justifyContent = 'center';
        return $car;
    }
}

export default Carrousel;

/*



*/
