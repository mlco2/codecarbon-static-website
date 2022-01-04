const SLIDE_DURATION = 10000; // Change this const for setting the waiting time between slide change in millisecond

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
        this.setIndex(1);
        this.setMedia();
        this.setTimer();
    }
    setTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = this.interval = window.setInterval(() => {
            this.setIndex(1);
            this.setMedia();
        }, SLIDE_DURATION);
    }
    setMedia() {
        for (let i = 0; i < this.media.length; ++i) {
            if (i === this.index.current) this.media[i].style.display = 'unset';
            else this.media[i].style.display = 'none';
        }
    }
    handleClick(e) {
        if (e.target.dataset.direction === 'left') this.setIndex(-1);
        else if (e.target.dataset.direction === 'right') this.setIndex(1);
        this.setMedia();
        this.setTimer();
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
        <div class="carrousel_container_control" style=
        "
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        transform: translationX(-50%);
        "> <span data-direction="left" 
        style="
            font-size: 3rem;
            background-color: #707070;
            padding: 1rem;
            color: white;
            cursor: pointer;
            border: 1px solid white;
            width: 4rem;
            height: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin:0rem;
            " > < </span>
        <span  data-direction="right" 
        style="

            font-size: 3rem;
            background-color: #707070;
            padding: 1rem;
            color: white;
            cursor: pointer;
            border: 1px solid white;
            width: 4rem;
            height: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin:0rem;

            "
            > > </span>
            </div>
        `;
        $car.style.position = 'relative';
        $car.style.display = 'flex';
        $car.style.justifyContent = 'center';
        return $car;
    }
}

export default Carrousel;
