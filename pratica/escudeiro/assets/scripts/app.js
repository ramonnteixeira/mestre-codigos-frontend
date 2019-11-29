class App {  
    constructor() {
        this.init();
    }
    
    init() {
        fetch('assets/data/catalogo.json')
            .then(item => item.json())
            .then(json => this.onLoad(json));
    }
    
    onLoad(groups) {
        const content = document.getElementById('content');
        groups
            .map(group => new Carousel(group.id, group.titulo, group.catalogo))
            .map(carousel => carousel.section)
            .forEach(section => content.appendChild(section));
    }
}