class App {  
    constructor() {
        fetch('assets/data/catalogo.json')
            .then(item => item.json())
            .then(json => this.carregar(json))
    }
    
    carregar(grupos) {
        const content = document.getElementById('content');
        grupos
            .map(grupo => new Carousel(grupo.id, grupo.titulo, grupo.catalogo))
            .map(carousel => carousel.section)
            .forEach(section => content.appendChild(section));
    }
}

class Carousel {
    section;
    wrapper;
    previousNavigation;
    nextNavigation;
    
    constructor(id, titulo, lista) {
        const component = this;
        this.section = document.createElement('section');
        this.section.className = 'catalog';
        this.section.id = id;

        const title = document.createElement('h3');
        title.innerHTML = titulo;
        this.section.appendChild(title);

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'carousel';
        this.wrapper.onscroll = (event) => component.onChangeScroll(event);

        this.previousNavigation = document.createElement('div')
        this.previousNavigation.className = "navigation previous"
        this.previousNavigation.addEventListener('click', () => component.changeScroll(-500));
        
        this.nextNavigation = document.createElement('div')
        this.nextNavigation.className = "navigation next"
        this.nextNavigation.addEventListener('click', () => component.changeScroll(+500));

        this.section.appendChild(this.previousNavigation);
        this.section.appendChild(this.wrapper);
        this.section.appendChild(this.nextNavigation);
        setTimeout(() => component.onChangeScroll(), 300);

        lista.forEach(filme => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            this.wrapper.appendChild(item);
    
            const img = document.createElement('img');
            img.src = `./assets/images/films/${filme.imagem}`;
            img.alt = `Imagem do título ${filme.nome}`;
            
            const detail = document.createElement('div');
            detail.className = 'details';
            detail.innerHTML = `<span>${filme.nome}</span>`

            item.appendChild(img);
            item.appendChild(detail);
        });
    }

    changeScroll(scroll) {
        this.wrapper.scrollLeft += scroll;
    }

    onChangeScroll() {
        if (this.wrapper.scrollLeft === 0) {
            this.previousNavigation.className = 'navigation previous invisible';
        } else {
            this.previousNavigation.className = 'navigation previous';
        }

        if (this.wrapper.scrollLeft >= this.wrapper.offsetWidth + 190) {
            this.nextNavigation.className = 'navigation next invisible';
        } else {
            this.nextNavigation.className = 'navigation next';
        }
    }
}

new App();
