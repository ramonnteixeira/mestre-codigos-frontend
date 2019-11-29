class Carousel {    
    constructor(id, title, list) {
        this.init(id, title, list);
    }

    init(id, title, list) {
        this.mountSection(id, title, list);
    }
    
    mountSection(id, title, list) {
        const section = document.createElement('section');
        section.className = 'catalog';
        section.id = id;

        section.appendChild(this.mountTitle(title));
        section.appendChild(this.mountPreviusNavigation());
        section.appendChild(this.mountWrapper(list));
        section.appendChild(this.mountNextNavigation());

        this.section = section;
    }

    mountTitle(title) {
        const titleElement = document.createElement('h3');
        titleElement.innerHTML = title;
        return titleElement;
    }

    mountPreviusNavigation() {
        const previousNavigation = document.createElement('div');
        previousNavigation.className = "navigation previous";
        previousNavigation.addEventListener('click', () => this.changeScroll(-230));
        
        this._previousNavigation = previousNavigation;
        return previousNavigation;
    }

    mountWrapper(list) {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel';
        wrapper.onscroll = (event) => this.onChangeScroll(event);
        
        list.map(this.mountFilm.bind(this))
            .forEach(item => wrapper.appendChild(item));

        // Ativa o evento para esconder as setas desnecessárias
        setTimeout(() => this.onChangeScroll(), 300);

        this._wrapper = wrapper;
        return wrapper;
    }

    mountNextNavigation() {
        const nextNavigation = document.createElement('div');
        nextNavigation.className = "navigation next";
        nextNavigation.addEventListener('click', () => this.changeScroll(+230));
        this._nextNavigation = nextNavigation;
        return nextNavigation;
    }

    mountFilm(film) {
        const item = document.createElement('div');
        item.className = 'carousel-item';

        const img = document.createElement('img');
        img.src = `./assets/images/films/${film.imagem}`;
        img.alt = `Imagem do título ${film.nome}`;
        
        const detail = document.createElement('div');
        detail.className = 'details';
        detail.innerHTML = `<span>${film.nome}</span>`

        item.appendChild(img);
        item.appendChild(detail);
        return item;
    }

    changeScroll(scroll) {
        this._wrapper.scrollLeft += scroll;
    }

    onChangeScroll() {
        if (this._wrapper.scrollLeft === 0) {
            this._previousNavigation.className = 'navigation previous invisible';
        } else {
            this._previousNavigation.className = 'navigation previous';
        }

        if (this._wrapper.scrollWidth - this._wrapper.clientWidth <= this._wrapper.scrollLeft) {
            this._nextNavigation.className = 'navigation next invisible';
        } else {
            this._nextNavigation.className = 'navigation next';
        }
    }
}