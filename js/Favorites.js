// classe que irá conter a lógica dos dados
// como os dados serão estruturados

export class GitFavorites {
    constructor(root) {
        this.root = document.querySelector(root);

        this.update();
    }
}

export class GitFavoritesView extends GitFavorites {
    constructor(root) {
        super(root)
    }   

    update() {
        const tbody = this.root.querySelector('table tbody');

        tbody.querySelectorAll('tr')
            .forEach((el) => {
                el.remove();
            })
    }
}